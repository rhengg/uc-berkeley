import React from 'react'

/** 
    * This layout returns two spaces divided vertically.
    * South Asian Musicians along with a default profile photo is rendered in left space.
    * Dynamic pages (i.e signin and signup page) will be rendered in right space. 
*/
const AuthLayout = ({ children }: any) => {
    return (
        <div className='auth-layout-main' >
            <div className='auth-layout-container'>
                <div className='auth-layout-content-circle'></div>
                <p className='auth-layout-content-text'>South Asian Musicians</p>
            </div>
            <div className='auth-layout-children-container'>
                {children}
            </div>
        </div>


    )
}

export default AuthLayout