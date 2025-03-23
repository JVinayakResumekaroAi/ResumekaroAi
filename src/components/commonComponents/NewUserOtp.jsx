import React, { useState, useRef, useEffect } from "react";
import NewUserPassword from "./NewUserPassword";

const NewUserOtp = ({
  handleVerifyClick,
  handleEditPhoneClick,
  phoneNumber,
}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (/^\d{4}$/.test(text)) {
      const digits = text.split("");
      setOtp(digits);
      inputRefs.current[3].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log(otpValue);
    handleVerifyClick();
    // alert(`OTP Submitted: ${otpValue}`);
  };

  const editPhone = () => {
    handleEditPhoneClick();
  };

  const handleResend = () => {
    alert("OTP Resent!");
  };

  return (
    <div className="w-full h-fit mx-auto text-center   rounded-xl    ">
      <p className="text-[14px] text-slate-500 mb-2">
        Verify Phone Number{" "}
        <span className="text-indigo-500 hover:underline cursor-pointer">
          +91 {phoneNumber}
        </span>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-3">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              maxLength="1"
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 ring-1 ring-[#dcdcdc]"
            />
          ))}
          <button
            type="submit"
            className="w-14 h-14  cursor-pointer rounded-lg bg-indigo-500 text-sm font-medium text-white shadow-md hover:bg-indigo-600 transition-colors duration-150"
          >
            Verify
          </button>
        </div>
      </form>

      <div className="text-sm text-slate-500 mt-5">
        Didn't receive code?{" "}
        <button
          onClick={handleResend}
          className="cursor-pointer font-medium text-indigo-500 hover:text-indigo-600 transition"
        >
          Resend
        </button>
      </div>
    </div>
  );
};

export default NewUserOtp;
