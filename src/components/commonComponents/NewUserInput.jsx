import React, { useState, useRef, useEffect } from "react";
import NewUserOtp from "./NewUserOtp";

const NewUserInput = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [steps, setSteps] = useState("phone");

  const [showPwdInputAfterVer, setShowPwdInputAfterVer] = useState(false);

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
    setShowPwdInputAfterVer(true);
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
    <>
      {/* input form */}
      {steps === "phone" && (
        <div className="relative ">
          <label
            htmlFor="text"
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
        <div className=" -mt-5 space-y-3">
          {/* OTP Component */}
          <NewUserOtp
            handleVerifyClick={handleVerifyClick}
            handleEditPhoneClick={handleEditPhoneClick}
            phoneNumber={phoneNumber}
          />

          {/* Password Form */}
          {showPwdInputAfterVer && (
            <div className="relative flex flex-col items-end  ">
              <label
                htmlFor="password"
                className="w-full block mb-2 text-sm font-medium text-gray-900"
              >
                Create Password
              </label>

              <div className="relative w-full flex gap-2   ">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="flex items-center justify-center bg-white border border-gray-300 rounded-full w-full h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
                  placeholder="Enter your password here"
                  required
                  value={password}
                  onChange={handlePasswordInput}
                />
                <button
                  onClick={handleCreateAccountClick}
                  className="bg-white border border-gray-300 rounded-full w-fit h-12 px-6 text-gray-900 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer hover:bg-blue-50 text-nowrap"
                >
                  Next{" "}
                </button>

                {/* Eye icon for toggling password visibility */}
                <img
                  src={
                    showPassword ? "/Icons/eyeOpen.svg" : "/Icons/eyeClose.svg"
                  }
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  className="w-5 opacity-70 absolute right-28 top-3.5 cursor-pointer hover:opacity-100"
                  onClick={togglePasswordVisibility}
                />
              </div>

              {errorMessage && (
                <div className="absolute -bottom-9 left-2 text-red-500 text-sm w-full -mt-3 mb-3 ml-3">
                  {errorMessage}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* create password */}
      {steps === "password" && (
        <div className="relative flex flex-col items-end">
          <label
            htmlFor="password"
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
            src={showPassword ? "/Icons/eyeOpen.svg" : "/Icons/eyeClose.svg"} // Toggle icon
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
    </>
  );
};

export default NewUserInput;
