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
        <div className='auth-form'>
            <p className='auth-header'>
                Create an Account
            </p>
            <div style={{ maxHeight: "35rem" }}>
                {
                    accountCreated &&
                    <>
                        <p className='register-success-heading'>Account Created</p>
                        <button
                            className='large-primary-btn'
                            style={{
                                width: "100%",
                            }}
                            onClick={handleSignInClick}
                        >
                            Sign In
                        </button>
                    </>
                }
                {
                    !accountCreated &&
                    <form onSubmit={handleSignUp}>

                        {formData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className='input-title'>
                                        {item.title}
                                    </p>
                                    <input
                                        className='input-main'
                                        autoComplete={item.type === "password" ? "off" : "on"}
                                        type={item.type}
                                        defaultValue={item?.value}
                                        onChange={handleInputChange}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                    />
                                    <div className='error-container'>
                                        {item.error &&
                                            <p className='error-text required-error-text-space'>Required field!</p>

                                        }
                                    </div>
                                </div>
                            )
                        })}

                        <div className='error-container'>
                            {incorrectPassword &&
                                <p className='error-text'>Password doesn't match</p>

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
                            Sign Up
                        </button>
                        <button
                            className='large-secondary-btn'
                            style={{
                                width: "100%",
                            }}
                            onClick={handleSignInClick}
                        >
                            Sign In
                        </button>
                    </form>
                }
            </div>
        </div>
    )
}

export default Register