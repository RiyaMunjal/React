import { useState } from 'react'
import "./App.css"
import Big from './components/Big'


function App() {

 const [bgColor , setBgColor]= useState("#414141");

  function colourChanger(color){
     setBgColor(color);
   }
     
const appStyles={
    backgroundColor: bgColor, 
};

  return (
    <>
     <div style={appStyles}>
      
     </div>
     <Big colourChange={colourChanger}>
     </Big>
   
    </>
  )
}

export default App
