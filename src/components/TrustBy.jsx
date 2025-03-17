import React from "react";

const TrustBy = () => {
  return (
    <div className="max-w-[1320px] min-w-auto mx-auto px-7 bg-[#FAF5FF] rounded-[30px] ">
      <div className=" py-[70px] flex flex-col gap-[35px]">
        <p className="mx-auto font-manrope text-[25px] font-extrabold text-[#151515]">
          Trusted By Professionals From{" "}
          <span className="text-[30px] font-outfit purpleGradient ">
            Top Global Companies
          </span>
        </p>
        <div className="relative overflow-hidden inline-block">
          <span className="z-1 h-[57px] w-[200px]  absolute bg-gradient-to-r from-[#FAF5FF] to-[#faf5ff00]   "></span>
          <span className="z-1 h-[57px] w-[200px] right-0  absolute bg-gradient-to-l from-[#FAF5FF] to-[#faf5ff00]   "></span>
          <div className="z-0 flex items-center gap-[80px] w-full ">
            <img src="/companyLogo/1.png" alt="" />
            <img src="/companyLogo/2.png" alt="" />
            <img src="/companyLogo/3.png" alt="" />
            <img src="/companyLogo/4.png" alt="" />
            <img src="/companyLogo/5.png" alt="" />
            <img src="/companyLogo/6.png" alt="" />
            <img src="/companyLogo/7.png" alt="" />
            <img src="/companyLogo/8.png" alt="" />
            <img src="/companyLogo/9.png" alt="" />
          </div>
          {/* <div className="z-0 flex items-center gap-[80px] w-full  loopScroll">
            <img src="/companyLogo/1.png" alt="" />
            <img src="/companyLogo/2.png" alt="" />
            <img src="/companyLogo/3.png" alt="" />
            <img src="/companyLogo/4.png" alt="" />
            <img src="/companyLogo/5.png" alt="" />
            <img src="/companyLogo/6.png" alt="" />
            <img src="/companyLogo/7.png" alt="" />
            <img src="/companyLogo/8.png" alt="" />
            <img src="/companyLogo/9.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TrustBy;
