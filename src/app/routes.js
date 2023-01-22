import Detail from '../detail'
import Home from '../home'
import Login from '../login'
import Register from '../register'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: 'detail/:id',
        component: Detail
    }
]

const authRoutes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    }
]

export { routes, authRoutes }
