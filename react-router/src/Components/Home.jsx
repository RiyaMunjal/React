import React from 'react'
import { Link } from 'react-router-dom';
import useUserInfo from '../Hook/useUserInfo';
const Home = () => {
const userArr=useUserInfo();

  return (
    <>
    <div className="Home">Home</div>
    {
        userArr.map((userinfo)=>(
            <ul key={userinfo.id}>
              <li  ><Link to= {`/user/${userinfo.id}`}> {userinfo.firstname} </Link></li>
           </ul>

        ))
    }
    </>
  )
}

export default Home