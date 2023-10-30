import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Snippets() {
  return (
    <div style={{textAlign:"center"}}>
      <Header />
      <h1>Snippets</h1>
      <Link to={"/"}> Home</Link>
      <Footer />
    </div>
  )
}

export default Snippets
