import React from 'react'
import { useNavigate } from 'react-router-dom'

type FormDataType = {
    title: string,
    placeholder: string,
    name: string,
    value?: string,
    type: string,
    error: boolean
    valid: boolean
}

type InputErrorType = {
    name?: boolean,
    email?: boolean,
    password?: boolean,
    confirmPassword?: boolean,
    passwordValidation?: boolean
}

const Register = () => {
    const navigate = useNavigate()
    const [incorrectPassword, setIncorrectPassword] = React.useState(false)
    const [accountCreated, setAccountCreated] = React.useState(false)
    const [formData, setFormData] = React.useState<FormDataType[]>(
        [
            {
                title: "Name",
                placeholder: "Ex. John Doe",
                name: "name",
                value: "",
                type: "text",
                error: false,
                valid: false
            },
            {
                title: "Email",
                placeholder: "abc@email.com",
                name: "email",
                value: "",
                type: "email",
                error: false,
                valid: false
            },
            {
                title: "Password",
                placeholder: "********",
                name: "password",
                value: "",
                type: "password",
                error: false,
                valid: false
            },
            {
                title: "Re-enter Password",
                placeholder: "********",
                name: "confirmPassword",
                value: "",
                type: "password",
                error: false,
                valid: false
            }
        ]
    )

    function isAllPresent(str: string) {
        var pattern = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
        );
        if (!str || str.length === 0) {
            return false
        }
        if (pattern.test(str) && (str.length > 8 || str.length === 8)) {
            return true
        } else {
            return false
        }
    }

    const checkValidation = () => {
        const validateData = formData.map((item) => {
            if (item.value === "") {
                item.error = true
                return item
            } else {
                item.error = false
                return item
            }
        })
        return validateData
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const filteredData = formData.map((item) => {
            if (item.name === event.target.name) {
                item.value = event.target.value
                if (isAllPresent(event.target.value)) {
                    item.valid = true
                } else {
                    item.valid = false
                }
                return item
            } else {
                return item
            }
        })
        setFormData(filteredData)
    }

    const handleSignUp = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        const values = Object.fromEntries((new FormData(e.target as HTMLFormElement)).entries())
        if (values.name === '' || values.email === '' || values.password === '') {
            setFormData(checkValidation())
        } else if (values.password !== "" && values.password !== values.confirmPassword) {
            setFormData(checkValidation())
            setIncorrectPassword(true)
        }
        else {
            setFormData(checkValidation())
            setIncorrectPassword(false)
            localStorage.setItem("testUser", JSON.stringify({ name: values.name, email: values.email, password: values.password }))
            setAccountCreated(true)
        }
    }

    const handleSignInClick = () => {
        navigate({
            pathname: "/signin"
        })
    }

    return (
        <div style={{ maxWidth: "24rem" }}>
            <p style={{
                display: "block",
                fontSize: "1.25rem",
                marginBottom: "1rem"
            }}>
                Create an Account
            </p>
            <div style={{ maxHeight: "35rem" }}>
                {
                    accountCreated &&
                    <>
                        <p style={{ color: "green" }}>Account Created</p>
                        <div style={{ marginTop: "2rem" }}>
                            <button
                                style={{
                                    width: "100%",
                                    height: "3rem",
                                    background: "green",
                                    color: "yellow"
                                }}
                                onClick={handleSignInClick}
                            >
                                {/* <p style={{ fontSize: "1.0625rem" }}> */}
                                Sign In
                                {/* </p> */}
                            </button>
                        </div>
                    </>
                }
                {
                    !accountCreated &&
                    <form onSubmit={handleSignUp}>

                        {formData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p style={{ display: "block", color: "red", fontSize: "0.75rem", marginBottom: "0.25rem" }}
                                    >
                                        {item.title}
                                    </p>
                                    <input
                                        autoComplete={item.type === "password" ? "off" : "on"}
                                        type={item.type}
                                        defaultValue={item?.value}
                                        onChange={handleInputChange}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                    />
                                    <div style={{ minHeight: "1rem" }}>
                                        {item.error &&
                                            <p style={{ fontSize: "0.5rem", paddingTop: "0.25rem", margin: 0, color: "red" }}>Required field!</p>

                                        }
                                    </div>
                                </div>
                            )
                        })}

                        <div style={{ minHeight: "1rem" }}>
                            {incorrectPassword &&
                                <p style={{ fontSize: "0.75rem", color: "red" }}>Password doesn't match</p>

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
                                    {/* <p style={{ fontSize: "1.0625rem" }}> */}
                                    Sign Up
                                    {/* </p> */}
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
                                    onClick={handleSignInClick}
                                >
                                    {/* <p style={{ fontSize: "1.0625rem" }}> */}
                                    Sign In
                                    {/* </p> */}
                                </button>
                            </div>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}

export default Register