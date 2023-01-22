/**
 * test scenario for threadsReducer
 *
 * - Home reducerr function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by GET_ALL_THREADS action
 *
 */

import threadsReducer from "../HomeReducer"


describe('threadsReducer function', () => {
    it('should return the initial state when given by unknown action', () => {

        //arrange
        const threads = []
        const action = { type: 'UNKNOWN' }

        //action
        const nextState = threadsReducer(threads, action)

        //assert
        expect(nextState).toEqual(threads)
    })

    it('should return the threads when given by GET_ALL_THREADS action', () => {
        //arrange
        const threads = []
        const action = { 
            type : 'GET_ALL_THREADS',
            payload : {
                threads : [
                    {"id":"thread-s0o5Q4qYTRsfcVtn","title":"ss","body":"xscxs","category":"general","createdAt":"2023-01-17T03:05:56.044Z","ownerId":"user-VR5GJbbC2P_1IzN_","totalComments":0,"upVotesBy":[],"downVotesBy":[]}
                ]
            }
        }

        //action
        const nextState = threadsReducer(threads, action)

        //assert
        expect(nextState).toEqual(action.payload.threads)
    })
})
