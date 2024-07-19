import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/Store/userSlice";
import { netflix_Logo } from "../Utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <div className=" bg-gradient-to-b from-black absolute z-10 w-full flex justify-between">
      <img
        alt="netflix-logo"
        className="py-4 px-32 w-96 "
        src={netflix_Logo}
      />
      {user && (
        <div className="flex justify-between text-center p-4">
          <img alt="profile-icon" className="w-12 h-12" src={user?.photoURL} />
          <button className="text-white font-bold pl-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
