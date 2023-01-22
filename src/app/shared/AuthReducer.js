import { ActionTypeLogin } from "../../login/LoginAction"
import { ActionTypeRegister } from "../../register/RegisterAction"

function authReducer(authUsers = null, action = {}) {
    switch (action.type) {
        case ActionTypeRegister.REGISTER_USERS:
            return action.payload.users
        case ActionTypeLogin.LOGIN_USERS:
            return action.payload.users
        case ActionTypeLogin.LOGOUT_USERS:
            return null
        default:
            return authUsers
    }
}

export default authReducer
