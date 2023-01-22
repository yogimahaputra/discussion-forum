import { hideLoading, showLoading } from "react-redux-loading-bar"
import { ActionType } from "./HomeAction"

function createThreadsActionCreator(threads) {
    return {
        type: ActionType.GET_ALL_THREADS,
        payload: {
            threads
        }
    }
}

function asyncCreateThreads({ title, body, category }) {
    return async (dispatch) => {
        dispatch(showLoading())

        try {
            dispatch(hideLoading())
        } catch (error) {

        }
    }
}

export {
    createThreadsActionCreator,
    asyncCreateThreads
}
