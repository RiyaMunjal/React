import React from 'react'
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
         <Header/>
         <Outlet/>
         <Footer/> 
        </>
      )
    }

export default Layout