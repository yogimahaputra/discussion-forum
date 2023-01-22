import api from "../app/utils/api"

const ActionType = {
    GET_DETAIL_THREADS: 'GET_DETAIL_THREADS',
    CREATE_DETAIL_COMMENTS: 'CREATE_DETAIL_COMMENTS'
}

function getDetailThreadsActionCreator(threads) {
    return {
        type: ActionType.GET_DETAIL_THREADS,
        payload: {
            threads
        }
    }
}

function createCommentsActionCreator(threads) {
    return {
        type: ActionType.CREATE_DETAIL_COMMENTS,
        payload: {
            threads
        }
    }
}

function asyncGetOneThreads(id) {
    return async (dispatch) => {
        try {
            let oneThreads = await api.getOneThreadsApi(id)
            dispatch(getDetailThreadsActionCreator(oneThreads))
        } catch (error) {
            alert(error.message)
        }
    }
}

function asyncCreateComments({ id, content }) {
    return async (dispatch) => {
        try {
            await api.createComments({ id, content })
            const oneThreads = await api.getOneThreadsApi(id)
            dispatch(createCommentsActionCreator(oneThreads))
        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    ActionType,
    getDetailThreadsActionCreator,
    asyncGetOneThreads,
    createCommentsActionCreator,
    asyncCreateComments
}
