import React from 'react'
import Error from '../components/Error'

/**
 * This page will render if the user enter the wrong path name.
 */

const NotFound = () => {
    return (
        <Error errorMessage='Page Not Found' />
    )
}

export default NotFound