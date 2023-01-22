/**
 * test scenario for threadsReducer
 *
 * - Home reducerr function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by GET_DETAIL_THREADS action
 *  - should return the threads with the new comment when given by CREATE_DETAIL_COMMENTS action
 *
 */

import getOneThreadsReducer from "../DetailReducer"

describe('getOneThreadsReducer', () => {
    it('should return the initial state when given by unknown action', () => {
        //arrange
        const threads = []
        const action = {}

        //action
        const nextState = getOneThreadsReducer(threads, action)

        //assert
        expect(nextState).toEqual(threads)
    })

    it('should return the threads when given by GET_DETAIL_THREADS action', () => {
        //arrange
        const threads = []
        const action = {
            type: 'GET_DETAIL_THREADS',
            payload: {
                "detailThread": {
                    "id": "thread-hiOZlleXWQ1Y1llw",
                    "title": "hey",
                    "body": "hey hello world",
                    "createdAt": "2023-01-19T01:09:41.694Z",
                    "owner": {
                        "id": "user-E6BXuSrDsHdoVwk3",
                        "name": "test",
                        "avatar": "https://ui-avatars.com/api/?name=test&background=random"
                    },
                    "category": "hello",
                    "comments": [
                        {
                            "id": "comment-l5xpuR18j299FTxe",
                            "content": "hey too",
                            "createdAt": "2023-01-19T01:10:01.102Z",
                            "owner": {
                                "id": "user-E6BXuSrDsHdoVwk3",
                                "name": "test",
                                "avatar": "https://ui-avatars.com/api/?name=test&background=random"
                            },
                            "upVotesBy": [],
                            "downVotesBy": []
                        }
                    ],
                    "upVotesBy": [],
                    "downVotesBy": []
                }
            }
        }


        //action
        const nextState = getOneThreadsReducer(threads, action)

        //assert
        expect(nextState).toEqual(action.payload.threads)
    })

    it('should return the threads with the new comment when given by CREATE_DETAIL_COMMENTS action', () => {
        //arrange
        const threads = [
            {
                "comment": {
                    "id": "comment-1",
                    "content": "Ini adalah komentar pertama",
                    "createdAt": "2021-06-21T07:00:00.000Z",
                    "upVotesBy": [],
                    "downVotesBy": [],
                    "owner": {
                        "id": "users-1",
                        "name": "John Doe",
                        "email": "john@example.com"
                    }
                }
            }
        ]
        
        const action = {
            type: 'CREATE_DETAIL_COMMENTS',
            payload: {
                "id": "comment-2",
                "content": "Ini adalah komentar kedua",
                "createdAt": "2021-06-21T07:00:00.000Z",
                "upVotesBy": [],
                "downVotesBy": [],
                "owner": {
                    "id": "users-1",
                    "name": "John Doe",
                    "email": "john@example.com"
                }
            }
        }


        //action
        const nextState = getOneThreadsReducer(threads, action)

        //assert
        expect(nextState).toEqual(action.payload.threads)
    })
})