import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loading from './components/LoadingBar'
import { asyncPreloadProcess } from './shared/LoadingAction'
import { authRoutes, routes } from './routes'
import Layout from './widgets/Layout'

const App = () => {
  const { isPreload = false, authUsers } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  if (isPreload) {
    return null
  }

  if (authUsers === null) {
    return (
      <>
        <Loading />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              {routes
                .map((route, index) => (
                  <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Route>
            {authRoutes
              .map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}

            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

  return (
    <>
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {routes
              .map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
          </Route>

          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
