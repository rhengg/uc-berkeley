import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation'

/** 
    * This layout returns two spaces divided horizontally.
    * Navigation component is used which will render the topbar in top space.
    * Dynamic pages (i.e list view page and detail page) will be rendered in bottom space. 
*/
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