import React from 'react'
import "./InputBox.css"

const InputBox = ({
  value,
  from,
  setFrom,
  amount,
  setAmount,
  currArr


}) => {
  return (
    <>
    <div className="Box">

      <div className="one">
        <label >{value}</label>
        <input type="number" value={amount} onChange={(e)=>(setAmount(Number(e.target.value)))} ></input>
      </div>

      <div className="two">
        <label htmlFor="select">Currency Type</label>
        <select id="select" value={from} onChange={(e)=>(setFrom(e.target.value))}>
          
          {
            currArr.map((curr)=>{
              return (
                  <option key={curr} value={curr}>
                  {curr}
                  </option> 
              );
            })
          }
        </select>
      </div>

    </div>
    </>
  )
}

export default InputBox