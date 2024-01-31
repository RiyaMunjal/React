import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params=useParams();
  
    const [info, setInfo]=useState({});

    console.log(params);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.org/users/${params.id}`)
        .then((res)=>(res.json()))
        .then((res)=>setInfo(res))
}, [])
    const obj={
        "name":{
            "add":"riya Munjal"
        }
    }

    return (
        <>
       <div>UserDetails</div>
       <div> Address: {info.address?.street}</div>
       <div className="phone"> PhoneNumber: {info.phone}</div>
       </>
    )
}

export default UserDetails