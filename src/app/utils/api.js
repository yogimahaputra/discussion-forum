const api = (() => {
    const BASE_URL = "https://forum-api.dicoding.dev/v1"

    const getAllUsersApi = async () => {
        const response = await fetch(`${BASE_URL}/users`)
        const responseJson = await response.json()
        const { status, message } = responseJson

        if (status !== 'success') {
            throw new Error(message)
        }
        const { data: { users } } = responseJson
        return users
    }

    const getAllThreadsApi = async () => {
        const response = await fetch(`${BASE_URL}/threads`)
        const responseJson = await response.json()
        const { status, message } = responseJson

        if (status !== 'success') {
            throw new Error(message)
        }
        const { data: { threads } } = responseJson
        return threads
    }

    const getOneThreadsApi = async (id) => {
        const response = await fetch(`${BASE_URL}/threads/${id}`)
        const responseJson = await response.json()
        const { status, message } = responseJson

        if (status !== 'success') {
            throw new Error(message)
        }
        const { data } = responseJson
        return data.detailThread
    }

    function getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    function putAccessToken(accessToken) {
        return localStorage.setItem('accessToken', accessToken)
    }

    async function login({ email, password }) {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const responseJson = await response.json()

        const { status, message } = responseJson

        if (status !== 'success') {
            throw new Error(message)
        }

        const { data: { token } } = responseJson

        return token
    }

    async function register({ email, name, password }) {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                name,
                password
            })
        })

        const responseJson = await response.json()
        const { status, message } = responseJson

        if (status !== 'success') {
            throw new Error(message)
        }

        if (status === 'success') {
            alert('Register akun berhasil, silahkan login.')
        }

        const { data: { user } } = responseJson

        return user
    }

    async function getOwnProfile() {
        const response = await _fetchWithAuth(`${BASE_URL}/users/me`)
        const responseJson = await response.json()
        const { status, message } = responseJson

        if (status !== 'success') {
            throw new Error(message)
        }

        const { data: { user } } = responseJson
        return user
    }

    async function _fetchWithAuth(url, options = {}) {
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`
            }
        })
    }

    async function createThreads({ title, body, category }) {
        const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body, category })
        })

        const responseJson = await response.json()

        if (responseJson.status !== 'success') {
            return { error: true, data: null }
        }

        return { error: false, data: responseJson.data }
    }

    async function createComments({ id, content }) {
        const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        })

        const responseJson = await response.json()

        if (responseJson.status !== 'success') {
            return { error: true, data: null }
        }

        return { error: false, data: responseJson.data }
    }

    return {
        getAllThreadsApi,
        getAllUsersApi,
        getOneThreadsApi,
        register,
        login,
        putAccessToken,
        getAccessToken,
        getOwnProfile,
        createThreads,
        createComments
    }
})()

export default api
