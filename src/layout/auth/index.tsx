import React from 'react'

const AuthLayout = ({ children }: any) => {
    return (
        <div style={{ display: "flex", width: '100%', minHeight: '100vh', padding: "0" }} >
            <div style={{
                width: "35%",
                backgroundColor: "#45474B",
            }}
            >
            </div>
            <div
                style={{
                    display: "flex",
                    width: '65%',
                    justifyContent: 'center',
                    alignItems: "center",
                }}
            >
                {children}
            </div>
        </div>


    )
}

export default AuthLayout