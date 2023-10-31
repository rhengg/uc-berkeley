import React from 'react'

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