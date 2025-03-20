import React, { useState, useRef, useEffect } from "react";
import VerificationOtp from "./VerificationOtp";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [steps, setSteps] = useState("phone");

  // Handle phone input
  const handlePhoneInput = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    // setSteps("phone");
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // Handle name input
  const handleNameInput = (e) => {
    const value = e.target.value;
    setName(value);
    // setSteps("phone");
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // Handle password input
  const handlePasswordInput = (e) => {
    const value = e.target.value;
    setPassword(value);
    // setSteps("phone");
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // Handle "get otp" button click
  const handleNextClick = () => {
    if (name == "") {
      setErrorMessage("Please Enter Your Name");
    } else if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please fill in a valid 10-digit mobile number");
    } else {
      setErrorMessage("");
      setSteps("otp");
    }
  };

  // Handle "verify account btn" button click
  const handleVerifyClick = () => {
    setSteps("password");
  };

  // handle edit phone number
  const handleEditPhoneClick = () => {
    setSteps("phone");
  };

  // handle create account btn
  const handleCreateAccountClick = () => {
    if (password === "") {
      setErrorMessage("Please enter your password");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
    } else {
      alert(`Name: ${name}\nPhone: ${phoneNumber}\nPassword: ${password}`);
    }
  };

  // toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center   backdrop-blur-sm z-50    bg-[rgba(0,0,0,0.27)] transition-all ">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg min-w-[900px] p-5 items-center gap-3">
        <div className="border bg-red-500 w-1/2 h-[600px] rounded-2xl"></div>

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
            <button className="cursor-pointer group w-full h-12 px-6 border-2 border-gray-300 rounded-full hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 ">
              <div className="relative flex items-center justify-center space-x-4">
                <span className="block font-semibold tracking-wide text-gray-700 text-sm group-hover:text-blue-600 sm:text-base">
                  Already have an Account
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

          {/* input form */}
          {steps === "phone" && (
            <div className="relative ">
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="flex items-center justify-center bg-white border border-gray-300 rounded-full w-full h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 mb-5"
                placeholder="Enter you name here"
                required=""
                value={name}
                onChange={handleNameInput}
              />
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                value={phoneNumber}
                onChange={handlePhoneInput}
                className="flex items-center justify-center bg-white border border-gray-300 rounded-full w-full h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
                placeholder="eg: 9988776655"
                required=""
              />

              {phoneNumber.length > 0 && (
                <button
                  onClick={handleNextClick}
                  className="absolute right-2 top-[23px] mt-[108px] cursor-pointer group w-fit py-1  px-6 border-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-500 text-white  "
                >
                  Get OTP
                </button>
              )}
              {/* Error message */}
              {errorMessage && (
                <div className="text-red-500 text-sm mt-5 -mb-5 ml-5">
                  {errorMessage}
                </div>
              )}
            </div>
          )}

          {/* OTP Verification */}
          {steps === "otp" && (
            <VerificationOtp
              handleVerifyClick={handleVerifyClick}
              handleEditPhoneClick={handleEditPhoneClick}
            />
          )}

          {/* create password */}
          {steps === "password" && (
            <div className="relative flex flex-col items-end">
              <label
                htmlFor="number"
                className="w-full block mb-2 text-sm font-medium text-gray-900"
              >
                Create Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="flex items-center justify-center bg-white border border-gray-300 rounded-full w-full h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 mb-5"
                placeholder="Enter you password here"
                required=""
                value={password}
                onChange={handlePasswordInput}
              />

              <img
                src={
                  showPassword ? "/Icons/eyeOpen.svg" : "/Icons/eyeClose.svg"
                } // Toggle icon
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="w-5 opacity-70 absolute right-5 top-13 transform -translate-y-1/2 cursor-pointer hover:opacity-100"
                onClick={togglePasswordVisibility}
              />

              {/* Error message */}
              {errorMessage && (
                <div className="text-red-500 text-sm w-full -mt-3 mb-3 ml-3">
                  {errorMessage}
                </div>
              )}
              <button
                onClick={handleCreateAccountClick}
                className="bg-white border border-gray-300 rounded-full w-fit h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 "
              >
                Create Account
              </button>
            </div>
          )}

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
