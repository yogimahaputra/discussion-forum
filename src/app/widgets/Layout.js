import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
    const { authUsers } = useSelector((states) => states)

    return (
        <>
            <Navbar authUsers={!!authUsers ?? null}/>
            <div >
                <Outlet />
            </div>
        </>
    )
}

export default Layout
