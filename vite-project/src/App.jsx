import { useState } from "react";
import "./App.css"
function App() {
   
  const [count, setcount]=useState(5);

  function addclickHandler(){
    if(count<20){
    setcount(count+1);
    }
  }

  function removeClickHandler(){
    if(count>0){
     setcount(count-1);
    }
  }

  
  return (
    <div id="countValue">
     <h1>counter value : {count}</h1>
     <button onClick={addclickHandler} class="btn" type="button"> add value</button>
     <br />
     <button onClick={removeClickHandler } class="btn" type="button"> remove  value</button>
    </div>
  )
}

export default App
