import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, Providers } from "../config/firebase";
import "./../index.css";

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkSignInStatus = () => {
      const signedIn = localStorage.getItem("isSignedIn") === "true";
      setIsSignedIn(signedIn);
    };

    checkSignInStatus();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("isSignedIn", "false");
        setIsSignedIn(false);

        
        window.location.href = '/'
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const handleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, Providers.google);
      if (response.user) {
        localStorage.setItem("isSignedIn", "true");
        setIsSignedIn(true); // Update the state to reflect sign-in
      }
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  return (
    <div className="flex">
      <aside className="w-16 h-full flex flex-col items-center justify-between fixed top-0 left-0 bg-gray-800 text-white">
        <div className="mt-5">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
            <Link to='/'> 
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
          {isSignedIn && (
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white mt-4">
              <Link to='/dashboard'>
                <i className="fa-solid fa-table-columns"></i>
              </Link>
            </div>
          )}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white mt-4">
            <Link to='/weather'>
              <i className="fa-solid fa-cloud"></i>
            </Link>
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white mt-4">
            <Link to='/about'>
              <i className="fa-solid fa-question"></i>
            </Link>
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white mt-4">
            {isSignedIn ? (
              <button onClick={handleSignOut}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            ) : (
              <button onClick={handleSignIn}>
                <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center mb-5">
          <img src="./logo.png" alt="double V" />
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
