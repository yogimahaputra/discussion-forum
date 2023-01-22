import { ActionTypeFetchStatus } from "./FetchstatusAction"

function fetchStatusReducer(fetchstatus = true, action = {}) {
    switch (action.type) {
        case ActionTypeFetchStatus.FETCH_STATUS:
            return action.payload.fetchstatus
        default:
            return fetchstatus
    }
}

export default fetchStatusReducer
