import loadable from '@loadable/component'

const Detail = loadable(() => import('../detail'))
const Home = loadable(() => import('../home'))
const Login = loadable(() => import('../login'))
const Register = loadable(() => import('../register'))

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
