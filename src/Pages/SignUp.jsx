import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header'

function SignUp() {
  return (
    <div style={{textAlign:"center"}}>
      <Header />
      <h1>Sign Up Here</h1>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default SignUp
