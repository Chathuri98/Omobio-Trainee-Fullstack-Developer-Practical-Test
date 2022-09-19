import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import loginImg from '../assets/login.jpg';
import { startsession } from "../session/Session";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  async function loginexp() {
    axios
      .get(
        "http://localhost/omobio/login.php?email=" +
          userName +
          "&password=" +
          password
      )
      .then((res) => {
        const message = res.data.message;
        const flag = res.data.flag;
        console.log(message);
        if (flag == 1) {
          startsession(userName, res.data.flag);
          window.location = "/user";
        }
      });
  }

  return (

    <div className='w-full mt-10 flex'>
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
            <img className='w-full h-full' src={loginImg} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
            <form>
                <h2 className='text-4xl font-bold text-center mb-8'>Comfy</h2>

        <div>
        <label for="email" className="">Email</label>
        <input name="email" className="w-full px-4 py-2 mt-2 text-gray-700 rounded border" type="email" 
        onChange={(e) => setuserName(e.target.value)}
        />
        </div>

        <div className="mt-4">
        <div className="flex items-center justify-between">
            <label for="password" className="">Password</label>
        </div>

        <input name="password"  type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
  
         onChange={(e) => setpassword(e.target.value)}
        />
        <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
        </div>

        <div className="mt-6">
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform  bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-gray-600"  onClick={loginexp}>
            Login
        </button>
        </div>
        </form>

        <p className='text-center '>Or</p>

            <div className="flex items-center -mx-2">
        <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
            </path>
        </svg>

        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>

       </div>
            <p className="mt-8 text-xs font-light text-center text-gray-500"> Don't have an account? <a href="#" class="font-medium text-gray-600 dark:text-gray-800 hover:underline">Create One</a></p>
        </div>
       </div>
</div>   

  );
}
