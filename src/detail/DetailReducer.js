import { ActionType } from "./DetailAction"

function getOneThreadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_THREADS:
            return action.payload.threads
        case ActionType.CREATE_DETAIL_COMMENTS:
            return action.payload.threads
        default:
            return threads
    }
}

export default getOneThreadsReducer
