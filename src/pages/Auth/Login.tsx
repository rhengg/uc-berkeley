import Cookies from 'js-cookie'
import React from 'react'
// import { Box, Heading, useTheme, Text, Input, Button, Flex } from '@chakra-ui/react'
// import { FaArrowRight } from 'react-icons/fa'
// import axios, { AxiosError } from 'axios'
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
        <div>
            <form onSubmit={handleLoginApiCall}>
                <p style={{
                    display: "block",
                    fontSize: "1.25rem",
                    marginBottom: "1rem"
                }}>
                    Sign in
                </p>
                <p style={{ display: "block", color: "red", fontSize: "0.75rem", marginBottom: "0.25rem" }}
                >
                    Email
                </p>
                <input
                    type='email'
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    name='email'
                    placeholder='abc@email.com'
                />
                <div style={{ minHeight: "1rem" }}>
                    {inputError === "email" &&
                        <p style={{ fontSize: "0.5rem", paddingTop: "0.25rem", margin: 0, color: "red" }}>Required field!</p>

                    }
                </div>

                <p style={{ display: "block", color: "red", fontSize: "0.75rem", marginBottom: "0.25rem" }}
                >
                    Password
                </p>
                <input
                    autoComplete='off'
                    type='password'
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    name='password'
                    placeholder='********'
                />
                <div style={{ minHeight: "1rem" }}>
                    {inputError === "password" &&
                        <p style={{ fontSize: "0.5rem", paddingTop: "0.25rem", margin: 0, color: "red" }}>Required field!</p>

                    }
                </div>

                <div style={{ minHeight: "1rem" }}>
                    {
                        unRegisteredEmail &&
                        <p style={{ fontSize: "0.75rem", color: "red" }}>Unregistered email!</p>
                    }
                    {
                        invalidPassword &&
                        <p style={{ fontSize: "0.75rem", color: "red" }}>Invalid Password!</p>

                    }
                </div>

                <div style={{ display: "flex", flexDirection: 'column' }} >
                    <div style={{ marginTop: "2rem" }}>
                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                height: "3rem",
                                background: "green",
                                color: "yellow"
                            }}
                        >
                            Sign In
                        </button>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <button
                            style={{
                                width: "100%",
                                height: "3rem",
                                background: "green",
                                color: "yellow"
                            }}
                            onClick={handleAccountCreateClick}
                        >
                            I don't have an account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login