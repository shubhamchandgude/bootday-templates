import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Templates() {
  return (
    <div style={{textAlign:"center"}}>
      <Header />
      <h1>Templetes</h1>
      <Link to={"/"}> Home</Link>
      <Footer />
    </div>
  )
}

export default Templates
