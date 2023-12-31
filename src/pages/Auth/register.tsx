import React from 'react'
import { useNavigate } from 'react-router-dom'

type FormDataType = {
    title: string,
    placeholder: string,
    name: string,
    value?: string,
    type: string,
    error: boolean
}

/** 
    * Returns the register page.
    * Renders four input fields(i.e name,email, password and confirmPassword)
    * Renders two buttons(i.e signin and signup)
*/
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
            },
            {
                title: "Email",
                placeholder: "abc@email.com",
                name: "email",
                value: "",
                type: "email",
                error: false,
            },
            {
                title: "Password",
                placeholder: "********",
                name: "password",
                value: "",
                type: "password",
                error: false,
            },
            {
                title: "Re-enter Password",
                placeholder: "********",
                name: "confirmPassword",
                value: "",
                type: "password",
                error: false,
            }
        ]
    )

    /**    
     * If "value" key is empty then returns the "error" key value of each object of as true.
     * Otherwise it returns "error" key value as false.
    */
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

    // function runs on change in input value and stores the value in a useState hook called "formData"
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const filteredData = formData.map((item) => {
            if (item.name === event.target.name) {
                item.value = event.target.value
                return item
            } else {
                return item
            }
        })
        setFormData(filteredData)
    }

    /** 
     * Validates the user input.
     * After validation, stores(registers) the user data in localStorage for later login flows.
     * If Validation fails, sets respective useState hooks with its respective error.  
    */
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

    // redirects the user to login page
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
                                margin: "2rem 0"
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