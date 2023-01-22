import React from 'react'
import { ThumbDownIcon } from '../app/icons/Dislike'
import { ThumbUpIcon } from '../app/icons/Like'
import PropTypes from 'prop-types'
import HTMLReactParser from 'html-react-parser'
import { showFormattedDate } from '../app/utils/formatDate'

const DetailCardComments = ({ owner, content, upVotesBy, downVotesBy, createdAt }) => {
    return (
        <>
            <div className=''>
                <div className='container px-8 py-5 mx-auto'>
                    <div className='flex items-center justify-start gap-3'>
                        <div>
                            <img alt="profil" src={owner.avatar} className="object-cover mx-auto rounded-full w-11 h-11 " />
                        </div>
                        <div className='flex flex-col '>
                            <h3 className='-mb-2 text-lg font-bold'>@{owner.name}</h3>
                            <p className='font-semibold text-slate-400'><small>Dibuat pada tanggal, {showFormattedDate(createdAt)}</small></p>
                        </div>
                    </div>
                    <div className='py-10 font-serif text-slate-500'>
                        <div>
                            {HTMLReactParser(content)}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

DetailCardComments.propTypes = {
    owner: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired
}

export default DetailCardComments
