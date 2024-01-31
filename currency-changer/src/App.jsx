import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {

  const [from, setFrom]=useState("USD");
  const [to, setTo]=useState("INR");
  const[amount, setAmount]=useState(0);
  const[convertedAmount, setConvertedAmount]=useState(0);

    const data=useCurrencyInfo(from);
    console.log(data)
    const Currarr=Object.keys(data);

  const convert=()=>{
    setConvertedAmount(amount * data.to);
  }

  function OnSubmitHandler(e){
    e.preventDefault();
    convert();

  }

  return (
    <>
      <div className='parent'>
        <form onSubmit={OnSubmitHandler}>
          <div className="child">      
            <InputBox amount={amount} setAmount={setAmount} Currarr={Currarr} from={from} setFrom={setFrom}></InputBox>
            <button>Swap</button>
            <InputBox amount={convertedAmount} setAmount={setConvertedAmount} Currarr={Currarr} from={to} setFrom={setTo}></InputBox>
          </div>

          <div>
            <button type="submit" id="btn" >
              Convert {from.toUpperCase() } to {to.toUpperCase()}
            </button>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
