import React, { useState } from "react"
import "./Big.css"
import Small from "./Small";




    const Big=(props)=>{
     
    const colourChanger=(color)=>{
        props.colourChange(color);
    }

    return (
       <>
          <div id="big">
            
         <Small onColourChange={colourChanger} value="Red" color="Red"></Small>   
         <Small onColourChange={colourChanger} value="orange" color="orange"></Small>   
         <Small onColourChange={colourChanger} value="yellow" color="yellow"></Small>   
         <Small onColourChange={colourChanger} value="green" color="green"></Small>   
         <Small onColourChange={colourChanger} value="pink" color="pink"></Small>   
          </div>
       </>
    )
}
export default Big;

