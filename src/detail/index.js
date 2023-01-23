import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncGetOneThreads } from './DetailAction'
import loadable from '@loadable/component'

const DetailListComponent = loadable(() => import('./DetailListComponent'))

const Detail = () => {
  const {
    detailThreads = null
  } = useSelector((states) => states)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(asyncGetOneThreads(id))
  }, [id, dispatch])

  if (detailThreads === null) {
    return <p>Loading...</p>
  }

  return (
    <>
      {
        detailThreads.length !== 0 && <DetailListComponent {...detailThreads} />
      }
    </>
  )
}

export default Detail
