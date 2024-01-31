import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import './index.css'
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import UserDetails from './Components/UserDetails.jsx';
import Me from './Components/Me.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="home" element={<Home/>}></Route>
      <Route path="home" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="user/:id" element={<UserDetails/>}></Route>
      <Route path="user/2" element={<Me/>}></Route>
      
      


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
