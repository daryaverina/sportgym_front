import { userStateContext } from "@/context/context-provider";
import axiosClient from "@/public/axios";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function Auth() {
  const [userData, setUserData] = useState({email: '', password: ''});
  const router = useRouter();
  const { currentUser, setCurrentUser, setUserToken } = userStateContext();
  const onSubmit = (e:any) =>{
    e.preventDefault();
    axiosClient.post('/login', userData)
      .then(({data}) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        router.push('/account');
      })
      .catch((error) =>{
        console.log(error);
      })
  }
    return (
      <>
        <div className="flex flex-col justify-center sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e)=> setUserData({...userData, email: e.target.value})}
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e)=> setUserData({...userData, password: e.target.value})}
                      id="password"
                      name="password"
                      type="text"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
  
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
  
                <div>
                  {/* <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button> */}
                  <button value="Submit" onClick={onSubmit}>submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  