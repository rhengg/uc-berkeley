import React from 'react'

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            height: 'calc(100vh - 220px)',
            padding: '1rem',
            background: '#f9f9f9',
        }}>
            <div style={{ padding: '1rem', background: '#ffffff' }}>
                <p className='subtitle-two' >Page Not Found</p>
            </div>
        </div>
    )
}

export default NotFound