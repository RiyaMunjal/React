import React from 'react'
import { useParams } from 'react-router-dom'



const User = () => {
    const{ userid} = useParams();
  return (
    <>
        <h1 className=" p-4 text-center text-blue-800 m-4 text-xl">Hello , welcome { userid } to the page !!!</h1>

    </>
  )
}

export default User