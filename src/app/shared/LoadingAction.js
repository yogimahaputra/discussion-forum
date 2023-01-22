import { loginUsersActionCreator } from "../../login/LoginAction"
import api from "../utils/api"

const ActionTypePreload = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD'
}

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActionTypePreload.SET_IS_PRELOAD,
        payload: {
            isPreload
        }
    }
}

function asyncPreloadProcess() {
    return async (dispatch) => {
        try {
            // preload process
            const authUser = await api.getOwnProfile()
            dispatch(loginUsersActionCreator(authUser))
        } catch (error) {
            dispatch(loginUsersActionCreator(null))
            // fallback process
        } finally {
            // end preload process
            dispatch(setIsPreloadActionCreator(false))
        }
    }
}

export {
    ActionTypePreload,
    setIsPreloadActionCreator,
    asyncPreloadProcess
}
