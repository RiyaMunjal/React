import React, { useEffect, useState } from 'react'

const useUserInfo = () => {
    const[data, setData]=useState([])

    useEffect(()=>{
    fetch("https://jsonplaceholder.org/users")
    .then((res)=>(res.json()))
    .then((res)=>(setData(res)))

    },[])
    return data;
}

export default useUserInfo