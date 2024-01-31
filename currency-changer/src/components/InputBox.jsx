import React from 'react'
import { useId } from 'react'
import "./InputBox.css"


const InputBox = ({
  amount,
  setAmount,
  Currarr,
  from,
  setFrom
})=>{
  
  const inputId=useId();
  return (
   <>
   <div classname="parent" >
    <div className="Box1">
       <label htmlFor={inputId}>From</label>
       <input id={inputId} type="number" value={amount} onChange={(e)=>(setAmount(e.target.value))}></input>
    </div>

    <div className="Box2">
      <label>Currency type</label>
      <select id="curr" onChange={(e)=>(setFrom(e.target.value))}>
        {
          Currarr.map((curr)=>(
            <option key={curr} value={curr}>
             curr
            </option>
          ))
        }
      </select>
    </div>
   
   </div>
   </>
  )
}

export default InputBox