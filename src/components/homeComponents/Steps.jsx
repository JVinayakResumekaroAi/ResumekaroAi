import React from "react";

const Steps = () => {
  return (
    <section className="max-w-[1320px] min-w-auto mx-auto border-1 border-[#FAF5FF]  bg-[#FAF5FF] flex flex-col justify-center items-center gap-[70px] px-[20px] py-[40px] rounded-[35px]">
      <p className="font-lexend font-semibold text-[30px]">
        Build Your Resume{" "}
        <span className="blueGradient"> In Just 5 Simple Steps </span>
      </p>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[15px] w-[200px] ">
          <div className="px-[15px] py-[8px] rounded-[10px] bg-[#5691E9] w-fit">
            <p className="font-outfit font-bold text-[40px] text-white ">01</p>
          </div>
          <p className="font-manrope font-bold text-[20px] text-center">
            Choose a Resume Template
          </p>
        </div>
        <img src="/img/Arc.png" alt="Arc" />
        <div className="flex flex-col justify-center items-center gap-[15px] w-[200px] ">
          <div className="px-[15px] py-[8px] rounded-[10px] bg-[#E6723F] w-fit">
            <p className="font-outfit font-bold text-[40px] text-white ">02</p>
          </div>
          <p className="font-manrope font-bold text-[20px] text-center">
            AI-Powered Resume Generation
          </p>
        </div>
        <img src="/img/Arc.png" alt="Arc" className="transform scale-y-[-1]" />
        <div className="flex flex-col justify-center items-center gap-[15px] w-[200px] ">
          <div className="px-[15px] py-[8px] rounded-[10px] bg-[#36A582] w-fit">
            <p className="font-outfit font-bold text-[40px] text-white ">03</p>
          </div>
          <p className="font-manrope font-bold text-[20px] text-center">
            Customize & Optimize
          </p>
        </div>
        <img src="/img/Arc.png" alt="Arc" />
        <div className="flex flex-col justify-center items-center gap-[15px] w-[200px] ">
          <div className="px-[15px] py-[8px] rounded-[10px] bg-[#EA5A9F] w-fit">
            <p className="font-outfit font-bold text-[40px] text-white ">04</p>
          </div>
          <p className="font-manrope font-bold text-[20px] text-center">
            Review & Finalize
          </p>
        </div>
        <img src="/img/Arc.png" alt="Arc" className="transform scale-y-[-1]" />
        <div className="flex flex-col justify-center items-center gap-[15px] w-[200px] ">
          <div className="px-[15px] py-[8px] rounded-[10px] bg-[#6871B9] w-fit">
            <p className="font-outfit font-bold text-[40px] text-white ">05</p>
          </div>
          <p className="font-manrope font-bold text-[20px] text-center">
            Download & Apply
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
