import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import loadable from '@loadable/component'

const Navbar = loadable(() => import('../components/Navbar'))

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
