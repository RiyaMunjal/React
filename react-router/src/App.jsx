import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header/>
      <Outlet/>
     </div>
    </>
  )
}

export default App
