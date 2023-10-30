import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function ReactNative() {
  return (
    <div style={{textAlign:"center"}}>
      <Header />
      <h1>React Native</h1>
      <Link to={"/"}> Home</Link>
      <Footer />
    </div>
  )
}

export default ReactNative
