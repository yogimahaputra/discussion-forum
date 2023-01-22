/**
 * skenario test
 *
 * - asyncGetAllThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../app/utils/api";
import { asyncGetAllThreads, getAllThreadsActionCreator } from "../HomeAction";

const fakeThreadsResponse = [
    {
        "id": "thread-08_nUU2fhu1P5nre",
        "title": "Pengalaman Belajar React di Dicoding",
        "body": "Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.",
        "category": "react",
        "createdAt": "2022-11-13T09:59:31.019Z",
        "ownerId": "user-5PqX6Ldhnk_ifroq",
        "totalComments": 1,
        "upVotesBy": [
            "user-6oWew2w2Wx5xLUTU",
            "user-5PqX6Ldhnk_ifroq"
        ],
        "downVotesBy": []
    },
    {
        "id": "thread-B3N9KGa87vfMHyBQ",
        "title": "Halo! Selamat datang dan silakan perkenalkan diri kamu!",
        "body": "<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>",
        "category": "introduction",
        "createdAt": "2022-11-13T09:55:55.353Z",
        "ownerId": "user-6oWew2w2Wx5xLUTU",
        "totalComments": 1,
        "upVotesBy": [
            "user-5PqX6Ldhnk_ifroq",
            "user-6oWew2w2Wx5xLUTU"
        ],
        "downVotesBy": []
    }
]

const fakeErrorResponse = new Error('Ups, something went wrong');


describe('asyncGetAllThreads', () => {

    beforeEach(() => {
        // backup original implementation
        api._getAllThreadsApi = api.getAllThreadsApi
    })

    afterEach(() => {
        // restore original implementation
        api.getAllThreadsApi = api._getAllThreadsApi

        // delete backup
        delete api._getAllThreadsApi
    });

    it('should dispatch action correctly when create data was success', async () => {
        // arrange
        api.getAllThreadsApi = () => Promise.resolve(fakeThreadsResponse);

        //mock
        const dispatch = jest.fn();

        // action
        await asyncGetAllThreads()(dispatch)

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(getAllThreadsActionCreator(fakeThreadsResponse))
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })

    it('should dispatch action and call alert correctly when data fetching failed', async() => {

        //arrange 
        api.getAllThreadsApi = () => Promise.reject(fakeErrorResponse)

        //mock dispatch
        const dispatch = jest.fn()

        //mock alert
        window.alert = jest.fn()

        //action
        await asyncGetAllThreads()(dispatch)

        //assert
        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)

    })
})