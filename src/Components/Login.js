import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignIn,setIsSignIn]= useState(true);

    const toggleSignInForm=()=>{
      setIsSignIn(!isSignIn);
    }
  return (
    <div>
      <Header />
    
        <div className="absolute">
          <img
            alt="netflix-bg"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_medium.jpg"
          />
        </div>
        
          <form className=" absolute w-4/12 p-12 bg-black flex flex-col mx-auto my-32 opacity-80 right-0 left-0 ">
            <h1 className="font-bold text-white text-2xl py-4">{isSignIn ? "Sign In": "Sign Up"}</h1>
            {!isSignIn &&
            <input
              type="text"
              placeholder="Full Name"
              className="border border-black my-2 p-4 w-full rounded-lg bg-slate-700"
            />}
            <input
              type="text"
              placeholder="Email Address"
              className="border border-black my-2 p-4 w-full rounded-lg bg-slate-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-black my-2 p-4 w-full rounded-lg bg-slate-700"
            />
            <button className="bg-red-700 w-full font-bold text-xl my-6 p-4 rounded-lg ">{isSignIn ? "Sign In": "Sign Up"}</button>
            <p className="my-6 text-white cursor-pointer " onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up": "Already Registered? Sign In"} Now.</p>
          </form>
        
      </div>
    
  );
};

export default Login;
