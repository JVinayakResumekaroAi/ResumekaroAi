import React, { useState, useRef, useEffect } from "react";
import NewUserInput from "./NewUserInput";
import ExistingUserInput from "./ExistingUserInput";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [isExistingUser, setIsExistingUser] = useState(false);

  const toggleUser = () => {
    setIsExistingUser((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center   backdrop-blur-sm z-50    bg-[rgba(0,0,0,0.27)] transition-all ">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-[900px] p-5 items-center gap-3">
        <div className="  w-1/2 h-[600px] rounded-2xl  overflow-hidden">
          <img src="/img/LoginImage1.png" alt="img" className="w-full" />
        </div>

        {/* form */}

        <div className=" relative flex flex-col gap-10 border border-[#DCDCDC]  w-1/2 h-[600px] rounded-2xl  p-5 bg-white">
          <h1 className="text-3xl font-extrabold font-manrope ">Login</h1>

          {/* Google Login Button and already have an account */}
          <div className="space-y-3">
            <div className="grid ">
              <button className="cursor-pointer group h-12 px-6 border-2 border-gray-300 rounded-full hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 ">
                <div className="relative flex items-center justify-center space-x-4">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="absolute left-4 w-5"
                    alt="Google"
                  />
                  <span className="block font-semibold tracking-wide text-gray-700 text-sm group-hover:text-blue-600 sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </button>
            </div>
            <button
              onClick={toggleUser}
              className="cursor-pointer group w-full h-12 px-6 border-2 border-gray-300 rounded-full hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 "
            >
              <div className="relative flex items-center justify-center space-x-4">
                <span className="block font-semibold tracking-wide text-gray-700 text-sm group-hover:text-blue-600 sm:text-base">
                  {isExistingUser
                    ? "Create a new account"
                    : "Already have an account?"}
                </span>
              </div>
            </button>
          </div>

          {/* OR Separator with lines */}
          <div className="flex items-center justify-center space-x-2">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="text-gray-500">OR</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          {/* Render Components Conditionally */}
          {isExistingUser ? <ExistingUserInput /> : <NewUserInput />}

          {/* term and conditions */}
          <div className=" text-xs text-slate-500 leading-5 text-center">
            <p>
              By proceeding, you agree to our{" "}
              <a href="/privacy-policy/" className="underline">
                Terms of Use
              </a>{" "}
              and confirm you have read our{" "}
              <a href="/privacy-policy/" className="underline">
                Privacy and Cookie Statement
              </a>
              .
            </p>
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-13  -right-13 w-10 cursor-pointer  opacity-60 hover:opacity-100 hover:scale-110 transition-all"
          >
            <img src="/img/close.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
