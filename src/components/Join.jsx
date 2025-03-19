import React from "react";

const Join = () => {
  return (
    <section className="mt-10 max-w-[1320px] min-w-auto mx-auto  rounded-[35px]  bg-gradient-to-t from-[#7713C5] to-[#AB2FFF] flex justify-between">
      <div className="flex flex-col gap-10  px-[40px] py-[50px]">
        <p className="font-manrope font-bold text-[25px] text-white max-w-[550px]">
          Build Your AI & ATS-Optimized Resume Today!
        </p>
        <button className="bg-black text-white px-[20px] py-[10px] rounded-4xl font-inter font-semibold w-fit">
          Get Started
        </button>
      </div>

      <div className="resume-animation">
        <div className="rb-1">
          <div className="resume-box1">
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
          </div>
          <div className="resume-box1">
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
          </div>
        </div>

        <div className="rb-2">
          <div className="resume-box2">
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
          </div>
          <div className="resume-box2">
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
            <img src="/img/resume.png" alt="" className="w-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
