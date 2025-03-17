import React from "react";

const Check = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-[11.49px] px-[20px] py-[4.75px] border border-[#05DF72] rounded-4xl">
      <img src="/img/Check.svg" alt="check" className="w-[15.98px]" />
      <p className=" text-nowrap font-manrope font-extrabold text-[13.68px] leading-[130%] text-[#151515]">
        {title}
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <header className="max-w-[1440px] min-w-auto flex gap-[50px] flex-col  mx-auto px-[50px] pt-[130px] pb-[60px]">
      {/* top section */}
      <section className="mx-auto w-fit flex items-center justify-center flex-col gap-[20px]">
        <div>
          <p className="flex items-center gap-[8px] px-[12px] py-[2.4px] border-1 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-[13.68px]">
            <img
              src="/img/crown.svg"
              alt="crown"
              className="w-[16px] h-[16px]"
            />
            India’s Most Affordable AI Resume Builder
          </p>
        </div>
        <h1 className="text-[#151515] max-w-[1032px] min-w-auto font-manrope font-extrabold text-[52px] text-center">
          One Step Closer To Your{" "}
          <span className="purpleGradient"> Dream Career</span> With
          <span className="blueGradient"> AI-Powered </span>
          Resume.
        </h1>
        <div className="flex items-center gap-[9.5px] relative  py-[9.5px]  max-w-[924px] min-w-full overflow-hidden   ">
          <span className="z-1 h-[57px] w-[167px]  absolute bg-gradient-to-r from-[#ffffff] to-[#ffffff00]  "></span>
          <div className=" z-0 loopScroll flex items-center gap-[9.5px]">
            <Check title={"Ai Cover Letter"} />
            <Check title={"LinkedIn Optimization"} />
            <Check title={"Ai Resume"} />
            <Check title={"Ai Specified Job Resume"} />
            <Check title={"Ai Resume Optimization"} />
          </div>
          <div className="z-0 loopScroll flex items-center gap-[9.5px]">
            <Check title={"Ai Cover Letter"} />
            <Check title={"LinkedIn Optimization"} />
            <Check title={"Ai Resume"} />
            <Check title={"Ai Specified Job Resume"} />
            <Check title={"Ai Resume Optimization"} />
          </div>
          <span className="h-[57px] w-[167px]  right-0 absolute bg-gradient-to-r from-[#ffffff00] to-white "></span>
        </div>
      </section>

      {/* button */}
      <button className="font-inter text-white px-[20px] py-[10px] rounded-lg bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer font-bold text-[22px] mx-auto block">
        Build Your AI Resume
      </button>
    </header>
  );
};

export default HeroSection;
