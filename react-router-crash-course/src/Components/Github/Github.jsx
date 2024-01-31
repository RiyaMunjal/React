import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData]= useState({});
    useEffect(()=>{
        fetch("https://api.github.com/users/riyamunjal")
        .then((res)=>(res.json()))
        .then(data=> setData(data))
        .catch((err)=>{
            throw new Error(err);
        })
    }, [])

  return (
   <>
   
   <div className="flex flex-col items-center p-4 m-4">
   <h1 className="tect-black-800 text-xl p-2 ">Followers : {data.followers}</h1>
   <img src={data.avatar_url} alt="image" />
   </div>

   </>
  )
}

export default Github