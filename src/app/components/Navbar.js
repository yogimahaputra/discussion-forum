import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { asyncUnsetAuthUser } from '../../login/LoginAction'

const menu = ['home', 'login']

const Navbar = ({ authUsers }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activeMenu = (e) => e === 'home' ? 'text-gray-800' : location.pathname === ("/" + e) ? 'text-gray-800' : "text-gray-300"

    const logoutAction = () => {
        dispatch(asyncUnsetAuthUser())
        navigate('/login')
    }

    return (
        <div>
            <nav className="bg-white shadow dark:bg-gray-800">
                <div className="container px-8 mx-auto">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between w-full">
                            <Link to={'/'} className="flex-shrink-0" >
                                <h1 className='font-bold'>Dicoding Forum<span className='text-3xl'>.</span></h1>
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    {
                                        menu
                                            .filter((e) => {
                                                if (authUsers) {
                                                    return e !== 'login'
                                                }

                                                return e
                                            })
                                            .map((e, index) => {
                                                return <Link to={`/${e === "home" ? '' : e}`} key={index} className={`${activeMenu(e)} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                                    {e.charAt(0).toUpperCase() + e.slice(1)}
                                                </Link>
                                            })
                                    }
                                    { authUsers && <span onClick={logoutAction} className='px-3 py-2 text-sm font-medium text-red-800 rounded-md cursor-pointer'>Logout</span> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

Navbar.propTypes = {
    authUsers: PropTypes.bool.isRequired
}

export default Navbar
