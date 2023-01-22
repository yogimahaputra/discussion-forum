import api from "../utils/api"

const ActionTypeUsers = {
    GET_ONE_USERS: 'GET_ONE_USERS'
}

function getOneUserActionCreator(users) {
    return {
        type: ActionTypeUsers.GET_ONE_USERS,
        payload: {
            users
        }
    }
}

function asyncGetOneUser(id) {
    return async (dispatch) => {
        try {
            const users = await api.getAllUsersApi()
            console.log(users)
        } catch (error) {
            alert(error)
        }
    }
}

export {
    ActionTypeUsers,
    getOneUserActionCreator,
    asyncGetOneUser
}
