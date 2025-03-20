import React, { useState } from "react";
import VerificationOtp from "./VerificationOtp";

const ExistingUserInput = () => {
  const [steps, setSteps] = useState("login");
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

  // Handle "next" button click for forgot password
  const handleNextClick = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please fill in a valid 10-digit mobile number");
    } else {
      setErrorMessage("");
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

  return (
    <>
      {steps === "login" && (
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

          <div className="w-full flex justify-between ">
            <button
              onClick={() => setSteps("phone")}
              className="cursor-pointer font-small text-slate-500 hover:text-indigo-600 transition"
            >
              Forgot Password?
            </button>
            <button
              onClick={handleLoginClick}
              className=" -mt-3 bg-white border border-gray-300 rounded-full w-fit h-12 px-10 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 "
            >
              LogIn
            </button>
          </div>
        </div>
      )}

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

      {steps === "otp" && (
        <VerificationOtp
          handleVerifyClick={handleVerifyClick}
          handleEditPhoneClick={handleEditPhoneClick}
        />
      )}

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
            onClick={handleNextClick}
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
