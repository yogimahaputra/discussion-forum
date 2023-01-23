import React from 'react'
import { ChatBubbleLeftEllipsisIcon } from '../app/icons/Chat'
import { ThumbDownIcon } from '../app/icons/Dislike'
import { ThumbUpIcon } from '../app/icons/Like'
import PropTypes from 'prop-types'
import HTMLReactParser from 'html-react-parser'
import { showFormattedDate } from '../app/utils/formatDate'

import loadable from '@loadable/component'

const DetailFormComments = loadable(() => import('./DetailFormComments'))
const DetailCardComments = loadable(() => import('./DetailCardComments'))

const DetailListComponent = ({ owner, id, title, category, comments, body, createdAt, downVotesBy, upVotesBy }) => {
    return (
        <>
            <div className='py-20 lg:px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <div className='container px-8 mx-auto'>
                    <div>
                        <h1 className='inline-block px-3 py-1 text-xs font-normal text-white bg-white border border-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20'>#{category}</h1>
                    </div>
                    <h1 className='mt-6 text-4xl font-extrabold text-white'>{title}</h1>
                    <p className='mt-3 font-sans text-slate-200'><small>Dibuat pada tanggal, {showFormattedDate(createdAt)}</small></p>
                </div>
            </div>
            <div className='container px-8 py-10 mx-auto border-b'>
                <div className='flex items-center justify-start gap-3'>
                    <div>
                        <img alt="profil" src={owner.avatar} className="object-cover mx-auto rounded-full w-11 h-11 " />
                    </div>
                    <div className='flex flex-col '>
                        <h3 className='-mb-2 text-lg font-bold'>@{owner.name}</h3>
                        <p className='font-semibold text-slate-400'><small>{owner.id}</small></p>
                    </div>
                </div>
                <div className='py-10 font-serif text-slate-500'>
                    <div>
                        {HTMLReactParser(body)}
                    </div>
                </div>
                <div>
                    <div className='flex flex-wrap items-start justify-start gap-5'>
                        <div className='flex flex-wrap items-center justify-center gap-2 text-slate-500'>
                            <button><ThumbUpIcon /></button>
                            <p>{upVotesBy.length}</p>
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-2 text-slate-500'>
                            <button><ThumbDownIcon /></button>
                            <p>{downVotesBy.length}</p>
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-2 text-slate-500'>
                            <button><ChatBubbleLeftEllipsisIcon /></button>
                            <p>{comments.length} Comments</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container px-8 mx-auto py-7'>
                <h2 className='text-xl'>Komentar {comments.length}</h2>
            </div>
            {comments.length === 0 && <p className='container px-8 pt-5 mx-auto'>Belum ada Komentar</p>}
            {
                comments.length !== 0 && comments.map((e, index) => <DetailCardComments key={index} {...e} commentslengths={comments.length} />)
            }
            <div className='mt-10'>
                <DetailFormComments id={id}/>
            </div>
        </>
    )
}

DetailListComponent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    owner: PropTypes.object.isRequired
}

export default DetailListComponent
