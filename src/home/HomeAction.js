import { hideLoading, showLoading } from "react-redux-loading-bar"
import api from "../app/utils/api"
import { refetchstatusProcess } from "../app/shared/FetchstatusAction"

const ActionType = {
    GET_ALL_THREADS: 'GET_ALL_THREADS',
    CREATE_THREADS: 'CREATE_THREADS'
}

function getAllThreadsActionCreator(threads) {
    return {
        type: ActionType.GET_ALL_THREADS,
        payload: {
            threads
        }
    }
}

function createThreadsActionCreator(threads) {
    return {
        type: ActionType.CREATE_THREADS,
        payload: {
            threads
        }
    }
}

function asyncGetAllThreads() {
    return async (dispatch) => {
        dispatch(showLoading())

        try {
            const threads = await api.getAllThreadsApi()
            // console.log(threads)
            const users = await api.getAllUsersApi()
            const allOwnedId = threads.map((e) => e.ownerId)
            let array = []
            for (let i = 0; i < allOwnedId.length; i++) {
                let tmp = users.filter((e) => e.id === allOwnedId[i])
                array.push(tmp[0])
            }

            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < threads.length; j++) {
                    if (array[i].id === threads[j].ownerId) {
                        threads[j] = { ...threads[j], users: array[i] }
                    }
                }
            }
            dispatch(getAllThreadsActionCreator(threads))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

function asyncCreateThreads({ title, body, category }) {
    return async (dispatch) => {
        console.log({ title, body, category })
        try {
            await api.createThreads({ title, body, category })
            dispatch(refetchstatusProcess())
        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    ActionType,
    getAllThreadsActionCreator,
    asyncGetAllThreads,
    createThreadsActionCreator,
    asyncCreateThreads
}
