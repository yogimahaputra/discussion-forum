import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { asyncCreateComments } from './DetailAction'

const DetailFormComments = ({ id }) => {
    const { authUsers } = useSelector((states) => states)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [content, setContent] = useState('')

    const commentAction = (event) => {
        event.preventDefault()
        if (authUsers === null) {
            alert("Anda harus login dulu ya!")
            navigate('/login')
        } else {
            dispatch(asyncCreateComments({ id, content }))
        }
        setContent('')
    }

    const handleChange = (e) => setContent(e.target.value)

    return (
        <div className='container px-8 py-5 mx-auto'>
            <h2 className='mb-6 text-xl font-semibold'>Berikan Komentar :</h2>
            <form onSubmit={commentAction} method='post'>
                <textarea value={content} onChange={handleChange} placeholder='Ketik disini...' className='w-full h-32 p-2 border-2 resize-none' />
                <button type='submit' className='inline-block w-full px-6 py-2 mt-5 text-white bg-blue-800 border rounded-md lg:w-32'>Kirim</button>
            </form>
        </div>
    )
}

DetailFormComments.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailFormComments
