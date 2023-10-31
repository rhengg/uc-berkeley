import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [inputEmail, setInputEmail] = React.useState('')
    const [inputPassword, setInputPassword] = React.useState('')
    const [unRegisteredEmail, setUnRegisteredEmail] = React.useState<boolean>(false)
    const [invalidPassword, setInvalidPassword] = React.useState<boolean>(false)
    const [inputError, setInputError] = React.useState("")

    const handleLoginApiCall = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        setUnRegisteredEmail(false)
        setInvalidPassword(false)
        const localstorage = localStorage.getItem("testUser")
        const parsedData = JSON.parse(localstorage as string)

        if (inputEmail === "" || inputPassword === "") {
            if (inputEmail === "") {
                setInputError("email")
            } else {
                setInputError("password")
            }
        } else {
            if (inputEmail !== parsedData.email) {
                setUnRegisteredEmail(true)
            } else if (inputPassword !== parsedData.password) {
                setInvalidPassword(true)
            } else {
                Cookies.set("testUserAuthenticated", parsedData.name, { expires: 7, path: '/' })
                console.log("cookies set");
                window.location.replace("/home")
            }
        }
    }

    const handleAccountCreateClick = () => {
        navigate({
            pathname: "/register"
        })
    }

    return (
        <div className='auth-form'>
            <form onSubmit={handleLoginApiCall}>
                <p className='auth-header'>
                    Sign in
                </p>
                <p className='input-title'>
                    Email
                </p>
                <input
                    className='input-main'
                    type='email'
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    name='email'
                    placeholder='abc@email.com'
                />
                <div style={{ minHeight: "1rem" }}>
                    {inputError === "email" &&
                        <p className='error-text required-error-text-space'>Required field!</p>

                    }
                </div>

                <p className='input-title'>
                    Password
                </p>
                <input
                    className='input-main'
                    autoComplete='off'
                    type='password'
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    name='password'
                    placeholder='********'
                />
                <div className='error-container'>
                    {inputError === "password" &&
                        <p className='error-text required-error-text-space'>Required field!</p>

                    }
                </div>

                <div className='error-container'>
                    {
                        unRegisteredEmail &&
                        <p className='error-text'>Unregistered email!</p>
                    }
                    {
                        invalidPassword &&
                        <p className='error-text'>Invalid Password!</p>

                    }
                </div>


                <button
                    type="submit"
                    className='large-primary-btn'
                    style={{
                        width: "100%",
                        marginBottom: "2rem"
                    }}
                >
                    Sign In
                </button>

                <button
                    className='large-secondary-btn'
                    style={{
                        width: "100%",
                    }}
                    onClick={handleAccountCreateClick}
                >
                    I don't have an account
                </button>
            </form>
        </div>
    )
}

export default Login