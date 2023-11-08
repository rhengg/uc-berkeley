import React from 'react'
import './error.css'

type ErrorProps = {
  errorMessage: string
}

const Error = (props: ErrorProps) => {
  const { errorMessage } = props
  return (
    <div className='error-container'>
      <div style={{ padding: '1rem', background: '#ffffff' }}>
        <p className='subtitle-two' >{errorMessage}</p>
      </div>
    </div>
  )
}

export default Error