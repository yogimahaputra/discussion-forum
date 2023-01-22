import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../app/utils/formatDate'
import HTMLReactParser from 'html-react-parser'
import { turncateString } from '../app/utils/turncateString'
import { ThumbUpIcon } from '../app/icons/Like'
import { ThumbDownIcon } from '../app/icons/Dislike'
import { ChatBubbleLeftEllipsisIcon } from '../app/icons/Chat'
import { Link } from 'react-router-dom'

const CardComponent = ({ id, users, category, body, createdAt, title, totalComments, upVotesBy, downVotesBy }) => {
    return (
        <div className='w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='flex flex-col w-full gap-4 p-8 '>
                <div>
                    <h1 className='inline-block px-3 py-1 text-xs font-normal text-white bg-white border border-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20'>#{category}</h1>
                </div>
                <div>
                    <Link to={`/detail/${id}`} className='text-3xl font-extrabold text-white underline'>{title}</Link>
                    <p className='font-sans text-slate-200 '><small>By {users.name} | {showFormattedDate(createdAt)}</small></p>
                </div>
                <div>
                    <div className='text-base text-white'>{HTMLReactParser(turncateString(body, 80))}</div>
                </div>
                <div>
                    <div className='flex flex-wrap items-start justify-start gap-5'>
                        <div className='flex flex-wrap items-center justify-center gap-2 text-white'>
                            <button><ThumbUpIcon /></button>
                            <p>{upVotesBy.length}</p>
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-2 text-white'>
                            <button><ThumbDownIcon /></button>
                            <p>{downVotesBy.length}</p>
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-2 text-white'>
                            <button><ChatBubbleLeftEllipsisIcon /></button>
                            <p>{totalComments} Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

CardComponent.propTypes = {
    category: PropTypes.string.isRequired,
    users: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    totalComments: PropTypes.number.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired
}

export default CardComponent
