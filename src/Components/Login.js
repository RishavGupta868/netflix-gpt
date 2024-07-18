import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/Store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  const handleSubmit = () => {
    // validate
    // setErrorMessage(null);
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const fullNameValue = fullName?.current?.value || "";

    const messages = checkValidation(emailValue, passwordValue, fullNameValue);
    setErrorMessage(messages);
    if (messages) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameValue, photoURL: "https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL }))
            navigate("/browse");
            // Profile updated!
            
          }).catch((error) => {
            setErrorMessage(error.message)
            // ...
          });
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          alt="netflix-bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_medium.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-4/12 p-12 bg-black flex flex-col mx-auto my-32 opacity-80 right-0 left-0 "
      >
        <h1 className="font-bold text-white text-2xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="border border-black my-2 p-4 w-full rounded-lg bg-slate-700 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="border border-black my-2 p-4 w-full rounded-lg bg-slate-700 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border border-black my-2 p-4 w-full rounded-lg bg-slate-700 text-white"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleSubmit}
          className="bg-red-700 w-full font-bold text-xl my-6 p-4 rounded-lg "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-6 text-white cursor-pointer "
          onClick={toggleSignInForm}
        >
          {isSignIn ? "New to Netflix? Sign Up" : "Already Registered? Sign In"}{" "}
          Now.
        </p>
      </form>
    </div>
  );
};

export default Login;
