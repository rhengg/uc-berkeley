import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation'

const Index = () => {

    return (
        <div style={{ width: "100%" }}>
            <Navigation />
            <div className='home-layout-body'>
                <Outlet />
            </div>
        </div>
    )
}

export default Index