import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchstatusProcess } from '../app/shared/FetchstatusAction'
import { asyncGetAllThreads } from './HomeAction'
import loadable from '@loadable/component'

const CardComponent = loadable(() => import('./HomeCardComponent'))
const HomeFormThreads = loadable(() => import('./HomeFormThreads'))
const Skeleton = loadable(() => import('../app/components/Skeleton'))

const Home = () => {
  const { fetchstatus = false, authUsers, threads = [] } = useSelector((states) => states)
  const dispatch = useDispatch()
  useEffect(() => {
    if (fetchstatus) {
      dispatch(asyncGetAllThreads())
      dispatch(fetchstatusProcess())
    }
  }, [fetchstatus, dispatch])

  return (
    <div className='container px-8 py-10 mx-auto'>
      { fetchstatus && <Skeleton /> }
      { authUsers && <HomeFormThreads /> }
      <div className='flex flex-col flex-wrap items-start justify-center gap-5'>
        {
          !fetchstatus && threads.length !== 0 && threads.map((res, index) => <CardComponent key={index} {...res} />)
        }
      </div>
    </div>
  )
}

export default Home
