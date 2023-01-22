import React, { useState } from 'react'
import PropTypes from 'prop-types'

const RegsisterFormComponent = ({ register }) => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value })

    const registerAction = (e) => {
        e.preventDefault()
        register(input)
    }
    return (
        <form onSubmit={registerAction} method='post' >

            <p className="mb-4">Create your account here!</p>
            <div className="mb-4">
                <input onChange={handleChange} value={input.name} required name='name' type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="name" />
            </div>
            <div className="mb-4">
                <input onChange={handleChange} value={input.email} required name='email' type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Email" />
            </div>
            <div className="mb-4">
                <input onChange={handleChange} value={input.password} required name='password' type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Password" />
            </div>
            <div className="pt-1 pb-1 mb-5 text-center">
                <button className="inline-block px-6 py-2.5 text-white bg-blue-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3" type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light"
                >
                    Register
                </button>
            </div>
        </form>
    )
}

RegsisterFormComponent.propTypes = {
    register: PropTypes.func.isRequired
}

export default RegsisterFormComponent
