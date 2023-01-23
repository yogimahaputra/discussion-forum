import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from './LoginAction'

import loadable from '@loadable/component'

const LoginFormComponent = loadable(() => import('./LoginFormComponent'))

const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    console.log(e)
    dispatch(asyncSetAuthUser(e))
  }

  return (
    <div className='flex items-center justify-center h-screen layer-main sub-title'>
      <div className="w-full px-4 mx-auto lg:w-1/2">
        <div className="md:p-12 md:mx-6">
          <Link to={'/'} className="text-xs text-blue-600">
            Home
          </Link>
          {/* Login */}
          <LoginFormComponent login={handleLogin} />
          <div className="flex items-center justify-start">
            <p className="mb-0 mr-2">Dont have an account?</p>
            <Link to={'/register'} className="text-blue-600">
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
