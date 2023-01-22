import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from "react-redux-loading-bar"
import getOneThreadsReducer from "../detail/DetailReducer"
import threadsReducer from "../home/HomeReducer"
import authReducer from "./shared/AuthReducer"
import fetchStatusReducer from "./shared/FetchstatusReducer"
import isPreloadReducer from "./shared/LoadingReducer"
import usersReducer from "./shared/UsersReducer"

const store = configureStore({
    reducer: {
        threads: threadsReducer,
        isPreload: isPreloadReducer,
        users: usersReducer,
        detailThreads: getOneThreadsReducer,
        authUsers: authReducer,
        loadingBar: loadingBarReducer,
        fetchstatus: fetchStatusReducer
    }
})

export default store
