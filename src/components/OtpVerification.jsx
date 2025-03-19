import React, { useState, useRef, useEffect } from "react";

const OtpVerification = () => {
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
    alert(`OTP Submitted: ${otpValue}`);
  };

  const handleResend = () => {
    alert("OTP Resent!");
  };

  return (
    <div className="w-full mx-auto text-center  sm:px-8 py-10 rounded-xl border-2 border-[#DCDCDC]">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>
      </header>

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
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          ))}
        </div>

        <div className="max-w-[260px] mx-auto mt-6">
          <button
            type="submit"
            className="cursor-pointer w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>

      <div className="text-sm text-slate-500 mt-4">
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

export default OtpVerification;
