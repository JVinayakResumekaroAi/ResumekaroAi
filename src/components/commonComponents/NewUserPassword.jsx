import React from "react";

const NewUserPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // Handle password input
  const handlePasswordInput = (e) => {
    const value = e.target.value;
    setPassword(value);
    // setSteps("phone");
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
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
  );
};

export default NewUserPassword;
