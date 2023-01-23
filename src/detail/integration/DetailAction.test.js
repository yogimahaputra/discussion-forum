/**
 * skenario test
 *
 * - asyncGetOneThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */


import api from "../../app/utils/api";
import { asyncGetOneThreads, getDetailThreadsActionCreator } from "../DetailAction";

const fakeDetailThreadsResponse = {
    "detailThread": {
        "id": "thread-1",
        "title": "Thread Pertama",
        "body": "Ini adalah thread pertama",
        "category": "General",
        "createdAt": "2021-06-21T07:00:00.000Z",
        "owner": {
            "id": "users-1",
            "name": "John Doe",
            "avatar": "https://generated-image-url.jpg"
        },
        "upVotesBy": [],
        "downVotesBy": [],
        "comments": [
            {
                "id": "comment-1",
                "content": "Ini adalah komentar pertama",
                "createdAt": "2021-06-21T07:00:00.000Z",
                "owner": {
                    "id": "users-1",
                    "name": "John Doe",
                    "avatar": "https://generated-image-url.jpg"
                },
                "upVotesBy": [],
                "downVotesBy": []
            }
        ]
    }
}

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetOneThreads', () => {
    beforeEach(() => {
        // backup original implementation
        api._getOneThreadsApi = api.getOneThreadsApi
    })

    afterEach(() => {
        // restore original implementation
        api.getOneThreadsApi = api._getOneThreadsApi

        // delete backup
        delete api._getOneThreadsApi
    });

    it('should dispatch action correctly when data fetching success', async () => {
        //arrange
        api.getOneThreadsApi = () => Promise.resolve(fakeDetailThreadsResponse)

        //mockk
        const dispatch = jest.fn()

        await asyncGetOneThreads()(dispatch)

        //assert
        expect(dispatch).toHaveBeenCalledWith(getDetailThreadsActionCreator(fakeDetailThreadsResponse))
    })

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
        //arrange
        api.getOneThreadsApi = () => Promise.reject(fakeErrorResponse)

        //mockk
        const dispatch = jest.fn()

        //mock alert
        window.alert = jest.fn()

        await asyncGetOneThreads()(dispatch)

        //assert
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
    })
})