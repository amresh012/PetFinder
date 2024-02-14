// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/CommanComponent/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
          <Footer/>  
        </>
  )
}

export default Layout