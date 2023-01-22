import { ActionTypeUsers } from "./UsersAction"

function usersReducer(users = [], action = {}) {
    switch (action.type) {
        case ActionTypeUsers.GET_ONE_USERS:
            return action.payload.users
        default:
            return users
    }
}

export default usersReducer
