import React from 'react'
import { Outlet } from 'react-router-dom'

const Index = () => {

    return (
        <>
            <div className="nav-container">
                <div className="nav-left">
                    <div className='auth-layout-content-circle'></div>
                    <p className="subtitle-two">South Asian Musicians</p>
                </div>
                <div className="nav-right">
                    <p className="subtitle-two">John Doe</p>
                    <button className="large-secondary-btn"> Sign Out </button>
                </div>
            </div>
            <div className='home-layout-body'>
                <Outlet />
            </div>
        </>
    )
}

export default Index