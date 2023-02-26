import { useState } from 'react';
import axiosClient from './../public/axios';
import { userStateContext } from '@/context/context-provider'
import { useRouter } from 'next/router';
export default function Registration() {

  const [error, setError] = useState({__html: ''});
  const [userData, setUserData] = useState({name: '', email: '', password: ''});
  const { currentUser, setCurrentUser, setUserToken } = userStateContext();
  const router = useRouter();

  const onSubmit = (e:any) =>{
    e.preventDefault();
    setError({__html: ''});
    axiosClient.post('/signup', userData)
      .then(({data}) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        router.push('/account');
      })
      .catch((error) =>{
        if(error.response){
          // const finalErrors = Object.values(error.response.data.errors).reduce((accum, next)=>[...accum, ...next],[] );
          // console.log(finalErrors);
          console.log('error');
        }
        console.log(error);
      })
  }
  return (<>
  <form onSubmit={onSubmit} method="post" encType="multipart/form-data">
    <div>
      <label>Name</label>
      <input className="square border border-black" type="text" name ="name" id="name" onChange={(e)=> setUserData({...userData, name: e.target.value})}></input>
    </div>
    <div>
      <label>Email address</label>
      <input className="square border border-black" type="text" name ="email" id="email"  onChange={(e)=> setUserData({...userData, email: e.target.value})}></input>
    </div>
    <div>
      <label>Password</label>
      <input className="square border border-black" type="text" name ="password" id="password"  onChange={(e)=> setUserData({...userData, password: e.target.value})}></input>
    </div>
    {/* <div>
      <label>Avater</label>
      <input className="square border border-black" type="file" name ="avatar" id="avatar"></input>
    </div> */}
    <button type="submit" value="Submit">submit</button>
  </form>
  </>);
}
