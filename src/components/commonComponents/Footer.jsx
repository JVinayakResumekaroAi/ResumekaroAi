import React from "react";

const Footer = () => {
  return (
    <footer className=" max-w-[1440px] min-w-auto mx-auto bg-[#12141D] font-inter pt-20">
      <section className="flex justify-between max-w-[1240px] min-w-auto mx-auto">
        <div className=" flex gap-[32px] flex-col  w-[308px]">
          <img src="/img/Logopng.png" alt="Logo" className="w-[308px]" />
          <p className="text-[14px] text-[#B9B3B3]">
            The purpose of a FAQ is generally to provide information on frequent
            questions or concerns.
          </p>
          <div className="flex gap-1 ">
            <img src="/img/x.png" alt="" />
            <img src="/img/facebook.png" alt="" />
            <img src="/img/insta.png" alt="" />
          </div>
        </div>
        <div className="flex gap-[140px] ">
          <div className="flex flex-col gap-[32px]">
            <p className="text-[18px] text-[#fafafa] font-semibold">Tools</p>
            <ul className="flex flex-col gap-[18px] text-[14px] text-[#B9B3B3]">
              <li>AI Resume</li>
              <li>AI Cover Letter</li>
              <li>AI Specified Job Resume</li>
              <li>AI Resume Optimization</li>
              <li>LinkedIn Optimization</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[32px]">
            <p className="text-[18px] text-[#fafafa] font-semibold">Company</p>
            <ul className="flex flex-col gap-[18px] text-[14px] text-[#B9B3B3]">
              <li>Blogs</li>
              <li>Resources</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[32px]">
            <p className="text-[18px] text-[#fafafa] font-semibold">Help</p>
            <ul className="flex flex-col gap-[18px] text-[14px] text-[#B9B3B3]">
              <li>Customer Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" mt-10 w-full mx-auto border-t-2 border-[#8A8A8A] pt-11 p-5">
        <p className=" text-[14px] text-[#B9B3B3] text-center">
          © Copyright 2024, All Rights Reserved by Resumekaro,Ai
        </p>
      </section>
    </footer>
  );
};

export default Footer;
