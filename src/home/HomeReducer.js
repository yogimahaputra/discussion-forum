import { ActionType } from "./HomeAction"

function threadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_THREADS:
            return action.payload.threads
        default:
            return threads
    }
}

export default threadsReducer
