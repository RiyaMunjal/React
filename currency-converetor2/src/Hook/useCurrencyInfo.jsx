import React, { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
    console.log('message1')
    const [data, setData]=useState({});
    
  useEffect(()=>{ 
   fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  .then((res) => {
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
  })
  .then((res) => {
      setData(res[currency]);
      console.log('Data fetched:', res[currency]);
  })
  .catch((err) => {
      console.error(`Error: ${err.message}`);
  });
}, [currency])
       

    console.log(data);
    return data;
  
}

export default useCurrencyInfo;