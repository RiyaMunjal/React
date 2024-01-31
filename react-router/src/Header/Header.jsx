import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    const style={
        margin:"20px",
        padding:"10px",
        backgroundColor: "#f8b8b8",
        color:"black"
     }
  return (
    <div className="nav-bar">
        <NavLink style={({isActive, isPending})=>(
            {
              color: isActive ? "red":"gray",
              margin:"20px",
              padding:"10px",
              backgroundColor: "#f8b8b8",
        
            }
        )

        } to="/home">Home</NavLink>
        <NavLink style={({isActive, isPending})=>(
            {
              color: isActive ? "red":"gray",
              margin:"20px",
              padding:"10px",
              backgroundColor: "#f8b8b8",
        
            }
        )

        } to="/about"> About Page </NavLink>
        <NavLink style={({isActive, isPending})=>(
            {
              color: isActive ? "red":"gray",
              margin:"20px",
              padding:"10px",
              backgroundColor: "#f8b8b8",
        
            }
        )

        } to="/contact">Contact Page</NavLink>
    </div>
  )
}

export default Header