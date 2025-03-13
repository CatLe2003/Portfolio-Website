import React from 'react'
import PreLoader from '../components/PreLoader'
import NavBar from '../components/NavBar'
import {Outlet} from "react-router-dom"
import Footer from '../components/Footer'
const RootLayout = () => {
  return (
    <>
        <PreLoader/>
        <NavBar />
        <Outlet />
        <Footer/>
    </>
  )
}

export default RootLayout