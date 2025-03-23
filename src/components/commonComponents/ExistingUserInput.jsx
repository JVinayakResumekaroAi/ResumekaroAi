import React, { useState } from "react";
import VerificationOtp from "./VerificationOtp";

const ExistingUserInput = () => {
  const [steps, setSteps] = useState("loginPhone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // Handle phone input
  const handlePhoneInput = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
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

  // toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle login with otp btn
  const handleContinueWithOtp = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please fill in a valid 10-digit mobile number");
    } else {
      setSteps("loginOtp");
    }
  };

  // Handle login with password btn
  const handleContinueWithPassword = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please fill in a valid 10-digit mobile number");
    } else {
      setSteps("loginPassword");
    }
  };

  // Handle "next" button click for forgot password
  const handleNextClick = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please fill in a valid 10-digit mobile number");
    } else {
      setErrorMessage("");
      setPassword("");
      setSteps("otp");
    }
  };

  // Handle "verify account btn" button click
  const handleVerifyClick = () => {
    setSteps("createPassword");
  };

  // handle edit phone number
  const handleEditPhoneClick = () => {
    setSteps("phone");
  };

  // handle edit phone number for login
  const handleEditPhoneClickForLogin = () => {
    setSteps("loginPhone");
  };

  // Handle "login" button click
  const handleLoginClick = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please fill in a valid 10-digit mobile number");
    } else if (password === "") {
      setErrorMessage("Please enter your password");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
    } else {
      setErrorMessage("");
      alert(`Phone: ${phoneNumber}\nPassword: ${password}`);
    }
  };
  // Handle "login" button click
  const handleForgotLoginClick = () => {
    if (password === "") {
      setErrorMessage("Please enter your password");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
    } else {
      setErrorMessage("");
      alert(`Phone: ${phoneNumber}\nPassword: ${password}`);
    }
  };

  return (
    <>
      {steps === "loginPhone" && (
        <div className="relative flex flex-col gap-2.5 -mt-5 ">
          <div>
            <label
              htmlFor="number"
              className="block  text-sm font-medium text-gray-900"
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
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className=" ml-5 text-red-500 text-sm ">{errorMessage}</div>
          )}

          <div className="w-full flex mt-5 items-center gap-1 flex-col ">
            <p className="text-[14px] text-gray-500 mb-5 text-nowrap">
              Continue With
            </p>

            <div className="flex gap-5 ">
              <button
                onClick={handleContinueWithOtp}
                className=" -mt-3 bg-white border border-gray-300 rounded-full w-fit h-12 px-13 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 "
              >
                OTP
              </button>
              <p className="text-[14px] text-gray-500 mb-5 text-nowrap">or </p>
              <button
                onClick={handleContinueWithPassword}
                className=" -mt-3 bg-white border border-gray-300 rounded-full w-fit h-12 px-10 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 "
              >
                Password
              </button>
            </div>
          </div>
        </div>
      )}

      {steps === "loginPassword" && (
        <div className="relative flex flex-col gap-2.5 ">
          <p
            className="text-[14px] text-indigo-500 mb-5 hover:underline cursor-pointer flex gap-1 items-center"
            onClick={() => setSteps("loginPhone")}
          >
            +91 {phoneNumber}
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
              <path d="M16 5l3 3"></path>
            </svg>
          </p>
          <div className="relative">
            <label
              htmlFor="password"
              className="w-full block text-sm font-medium text-gray-900"
            >
              Password
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
              src={showPassword ? "/Icons/eyeOpen.svg" : "/Icons/eyeClose.svg"} // Toggle icon
              alt={showPassword ? "Hide Password" : "Show Password"}
              className="w-5 opacity-70 absolute right-5 top-11 transform -translate-y-1/2 cursor-pointer hover:opacity-100"
              onClick={togglePasswordVisibility}
            />
          </div>
          {/* Error message */}
          {errorMessage && (
            <div className="-mt-3 text-red-500 text-sm ">{errorMessage}</div>
          )}

          <div className="w-full flex justify-between px-5 ">
            <button
              onClick={() => setSteps("phone")}
              className="cursor-pointer font-small text-slate-500 hover:text-indigo-600 transition"
            >
              Forgot Password?
            </button>
            <button
              onClick={handleLoginClick}
              className="  bg-white border border-gray-300 rounded-full w-fit h-12 px-10 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 "
            >
              LogIn
            </button>
          </div>
        </div>
      )}

      {steps === "loginOtp" && (
        <VerificationOtp
          handleEditPhoneClickForLogin={handleEditPhoneClickForLogin}
          phoneNumber={phoneNumber}
        />
      )}

      {/* for forgot password */}
      {steps === "phone" && (
        <div className="relative flex flex-col items-end gap-2 ">
          <label
            htmlFor="number"
            className="w-full block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Phone Number
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
          {/* Error message */}
          {errorMessage && (
            <div className="w-full text-red-500 text-sm">{errorMessage}</div>
          )}
          <button
            onClick={handleNextClick}
            className="bg-white border border-gray-300 rounded-full w-fit h-12 px-8 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 "
          >
            Next{" "}
          </button>
        </div>
      )}
      {/* for forgot password */}
      {steps === "otp" && (
        <VerificationOtp
          handleVerifyClick={handleVerifyClick}
          handleEditPhoneClick={handleEditPhoneClick}
          phoneNumber={phoneNumber}
        />
      )}
      {/* for forgot password */}
      {steps === "createPassword" && (
        <div className="relative flex flex-col items-end gap-2 ">
          <label
            htmlFor="password"
            className="w-full block mb-2 text-sm font-medium text-gray-900"
          >
            Create New Password
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
            src={showPassword ? "/Icons/eyeOpen.svg" : "/Icons/eyeClose.svg"} // Toggle icon
            alt={showPassword ? "Hide Password" : "Show Password"}
            className="w-5 opacity-70 absolute right-5 top-15 transform -translate-y-1/2 cursor-pointer hover:opacity-100"
            onClick={togglePasswordVisibility}
          />

          {/* Error message */}
          {errorMessage && (
            <div className="w-full text-red-500 text-sm">{errorMessage}</div>
          )}
          <button
            onClick={handleForgotLoginClick}
            className="bg-white border border-gray-300 rounded-full w-fit h-12 px-8 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 "
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default ExistingUserInput;
