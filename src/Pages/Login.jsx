import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Login() {
  return (
    <div style={{textAlign:"center"}}>
      <Header />
      <h1>Login Form </h1>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Login
