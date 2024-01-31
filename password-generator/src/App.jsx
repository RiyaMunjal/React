import { useState, useEffect, useCallback , useRef} from "react";
import "./App.css"
function App() {
  const[password, setpassword]=useState('');
  const[length, setLength]=useState(8);
  const[numbersallowed, setNumbersallowed]=useState(false);
  const[charactersallowed, setcharactersallowed]=useState(false);

  const Inputref=useRef('');

  useEffect(()=>{
    passwordGenerator();
  },[length, numbersallowed, charactersallowed])
  
  const passwordGenerator=useCallback(()=>{
    let str="AQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numbersallowed) str+="1234567890";
    if(charactersallowed) str+="{}@#$%^&*";
    let pass="";
    for(let i=1;i<=length;i++){
      const char=Math.floor(Math.random()*str.length);
      pass+=str.charAt(char);
    }
    setpassword(pass);
  }
  ,[length, numbersallowed, charactersallowed, setpassword]);

  const ClickHandler=()=>{
    Inputref.current?.select();
    window.navigator.clipboard.writeText(password);
  }

return (
  <>
  <div className="parent">
    <h1>Password Generator</h1>
    <div className="child">
    <input ref={Inputref} className="input" type="text" value={password} readOnly />
    <button className="btn" type="button"onClick={ClickHandler} >copy</button>
  </div>

    <div className="child2">
    <div className="first"><input id="rangebar"  min={0} max={200} type="range" value={length} onChange={(e)=>setLength(e.target.value)}/>
    <label htmlFor="rangebar">Length{length}</label></div>

    <div className="second"><input id="num" type="checkbox" onChange={()=>setNumbersallowed((prev)=>!prev)}/>
    <label htmlFor="num">number</label></div>

    <div className="third"><input id="char" type="checkbox" onChange={()=>setcharactersallowed((prev)=>!prev) }/>
    <label htmlFor="char">Character</label></div>
   </div>

  </div>
 
  </>
);
}
export default App

