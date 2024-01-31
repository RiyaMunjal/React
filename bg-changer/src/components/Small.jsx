import React from 'react'
import "./Small.css"

const Small = ({value, color, onColourChange }) => {
const ClickHandler=()=>{
      onColourChange(color)
}
    return (
    <>
        <button onClick={ClickHandler} id="btn" type="button" style={{
              backgroundColor: color,
              width:" 100px",
              height: "50%",
              cursor: "pointer"
        }}>
           {value}
        </button>
    </>
  )
}

export default Small;

