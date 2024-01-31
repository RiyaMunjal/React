import React, { useState } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData]=useState({});

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>(res.json()))
    .then((res)=> ( setData(res[currency])))
    .catch((err)=>{
        throw new Error(`Error : ${err}`)
    })
console.log(data);
    return data;
}

export default useCurrencyInfo;