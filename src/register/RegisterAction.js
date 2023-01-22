import api from "../app/utils/api"

const ActionTypeRegister = {
    REGISTER_USERS: 'REGISTER_USERS'
}

function registerUsersActionCreator(users) {
    return {
        type: ActionTypeRegister.REGISTER_USERS,
        payload: {
            users
        }
    }
}

function asyncRegisterUsers({ name, email, password }) {
    return async (dispatch) => {
        try {
            await api.register({ name, email, password })
        } catch (error) {
            alert("ups, sorry! " + error.message)
        }
    }
}

export {
    ActionTypeRegister,
    registerUsersActionCreator,
    asyncRegisterUsers
}
