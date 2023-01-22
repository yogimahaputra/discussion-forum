import api from "../app/utils/api"

const ActionTypeLogin = {
    LOGIN_USERS: 'LOGIN_USERS',
    LOGOUT_USERS: 'LOGOUT_USERS'
}

function loginUsersActionCreator(users) {
    return {
        type: ActionTypeLogin.LOGIN_USERS,
        payload: {
            users
        }
    }
}

function logoutUsersActionCreator() {
    return {
        type: ActionTypeLogin.LOGOUT_USERS,
        payload: {
            users: null
        }
    }
}

function asyncUnsetAuthUser() {
    return (dispatch) => {
        dispatch(logoutUsersActionCreator())
        localStorage.removeItem('accessToken')
    }
}

function asyncSetAuthUser({ email, password }) {
    return async (dispatch) => {
        try {
            const token = await api.login({ email, password })
            api.putAccessToken(token)
            const authUser = await api.getOwnProfile()

            dispatch(loginUsersActionCreator(authUser))
        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    ActionTypeLogin,
    loginUsersActionCreator,
    logoutUsersActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser
}
