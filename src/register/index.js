import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { asyncRegisterUsers } from './RegisterAction'
import RegsisterFormComponent from './RegsisterFormComponent'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        dispatch(asyncRegisterUsers(e))
        navigate('/login')
    }

    return (
        <div className='flex items-center justify-center h-screen layer-main sub-title'>
            <div className="w-full px-4 mx-auto lg:w-1/2">
                <div className="md:p-12 md:mx-6">
                    <Link to={'/'} className="text-xs text-blue-600">
                        Home
                    </Link>
                    <RegsisterFormComponent register={handleRegister} />
                    <div className="flex items-center justify-start pb-6">
                        <p className="mb-0 mr-2">Already have an account ?</p>
                        <Link to={'/login'} className="text-blue-600">
                            Login Here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
