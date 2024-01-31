import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './Hook/useCurrencyInfo';

function App() {
  

  const [from , setFrom]=useState("usd");
  const [to , setTo]=useState("inr");
  const [amount, setAmount]=useState(0);
  const[convertedAmount, setConvertedAmount]=useState(0);
  const data=useCurrencyInfo(from);
  const currArr=Object.keys(data);

  function convert(amount){
     setConvertedAmount(amount * data[to])
  }


  function submitHandler(){
    convert(amount)
  }

  function swapHandler(){
     setTo(from);
     setFrom(to);
     setAmount(convertedAmount);
     setConvertedAmount(amount);
  };



  return (
    <>
     <div className="parent">
   
      <div className="child1">
        <InputBox value="From" from={from} setFrom={setFrom} amount={amount} setAmount={setAmount} currArr={currArr}></InputBox>
      
      </div >

      <div className="swapButton"><button type="button" onClick={swapHandler}>Swap</button></div>
      
      <div className="child1">
      <InputBox value="To" from={to} setFrom={setTo} amount={convertedAmount} setAmount={setConvertedAmount} currArr={currArr}></InputBox> 
      </div >
     
      <button id="Submitbtn" type="submit" onClick={submitHandler} >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
     
     
  
     </div>

    </>
  )
}

export default App
