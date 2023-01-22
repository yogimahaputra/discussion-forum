const ActionTypeFetchStatus = {
    FETCH_STATUS: 'FETCH_STATUS'
}

function fetchStatusActionCreator(fetchstatus) {
    return {
        type: ActionTypeFetchStatus.FETCH_STATUS,
        payload: {
            fetchstatus
        }
    }
}

function fetchstatusProcess() {
    return (dispatch) => {
        dispatch(fetchStatusActionCreator(false))
    }
}

function refetchstatusProcess() {
    return (dispatch) => {
        dispatch(fetchStatusActionCreator(true))
    }
}

export {
    ActionTypeFetchStatus,
    fetchStatusActionCreator,
    fetchstatusProcess,
    refetchstatusProcess
}
