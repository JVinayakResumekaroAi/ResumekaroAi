import React from "react";

const WhyResumeKaro = () => {
  return (
    <section className="max-w-[1440px] min-w-auto mx-auto flex flex-col gap-[40px] justify-center items-center py-[80px] px-[50px]">
      <div className="relative">
        <p className="absolute -top-4 -left-4 font-rainbow text-[30px] text-[#151515]">
          Why
        </p>
        <p className="font-onest font-bold  text-[50px]">
          <span className="purpleGradient">ResumeKaro</span>
          <span className="blueGradient font-outfit font-black"> AI</span>
        </p>
      </div>

      <div className="flex  w-full  justify-between">
        {/* 1 */}
        <div className=" flex flex-col justify-between py-7 ">
          <div className="relative  w-fit cursor-pointer -right-14 bg-white">
            <div className="flex flex-col gap-[5px]  w-fit h-fit rounded-[10px] border-[4px] border-[#0A84FF] px-[20px] py-[10px] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#FFFFFF_25%)]">
              <div className="flex gap-[5px]">
                <img src="/Icons/1.svg" alt="" />
                <p className="font-manrope font-extrabold text-[20px] text-[#151515]">
                  AI-Powered Resume Optimization
                </p>
              </div>
              <p className="font-manrope font-semibold text-[14px] text-[#151515]">
                Get smart suggestions to improve your resume.
              </p>
            </div>
            <div className="w-[10px] h-[10px] bg-[#0A84FF] rounded-full absolute -right-2"></div>
          </div>
          {/*  */}
          <div className="relative w-fit cursor-pointer -right-36 -top-10 bg-white">
            <div className="flex flex-col gap-[5px]  w-fit h-fit rounded-[10px] border-[4px] border-[#0A84FF] px-[20px] py-[10px] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#FFFFFF_25%)]">
              <div className="flex gap-[5px]">
                <img src="/Icons/3.svg" alt="" />
                <p className="font-manrope font-extrabold text-[20px] text-[#151515]">
                  Smooth & Fast Processing
                </p>
              </div>
              <p className="font-manrope font-semibold text-[14px] text-[#151515]">
                Create a professional resume in minutes.
              </p>
            </div>
            <div className="w-[10px] h-[10px] bg-[#0A84FF] rounded-full absolute -right-2"></div>
          </div>
          {/*  */}
          <div className="relative w-fit cursor-pointer  -right-20 -top-14 bg-white">
            <div className="flex flex-col gap-[5px]  w-fit h-fit rounded-[10px] border-[4px] border-[#0A84FF] px-[20px] py-[10px] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#FFFFFF_25%)]">
              <div className="flex gap-[5px]">
                <img src="/Icons/2.svg" alt="" />
                <p className="font-manrope font-extrabold text-[20px] text-[#151515]">
                  ATS-Friendly Formatting
                </p>
              </div>
              <p className="font-manrope font-semibold text-[14px] text-[#151515]">
                Designed to pass applicant tracking systems easily.
              </p>
            </div>
            <div className="w-[10px] h-[10px] bg-[#0A84FF] rounded-full absolute -right-2"></div>
          </div>
        </div>

        {/* 2 */}

        <img src="/img/ResumeFrame.png" alt="" />
        {/* 3 */}

        <div className=" flex flex-col justify-between py-7 ">
          <div className="relative  w-fit cursor-pointer -left-20 -top-10 bg-white">
            <div className="flex flex-col gap-[5px]  w-fit h-fit rounded-[10px] border-[4px] border-[#0A84FF] px-[20px] py-[10px] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#FFFFFF_25%)]">
              <div className="flex gap-[5px]">
                <img src="/Icons/4.svg" alt="" />
                <p className="font-manrope font-extrabold text-[20px] text-[#151515]">
                  Affordable Pricing
                </p>
              </div>
              <p className="font-manrope font-semibold text-[14px] text-[#151515]">
                Just ₹9 per download, no hidden costs.
              </p>
            </div>
            <div className="w-[10px] h-[10px] bg-[#0A84FF] rounded-full absolute -left-2"></div>
          </div>
          {/*  */}
          <div className="relative w-fit cursor-pointer -left-20 -top-5 bg-white">
            <div className="flex flex-col gap-[5px]  w-fit h-fit rounded-[10px] border-[4px] border-[#0A84FF] px-[20px] py-[10px] hover:bg-[linear-gradient(to_top_left,#b0d7ff_1%,#FFFFFF_25%)]">
              <div className="flex gap-[5px]">
                <img src="/Icons/5.svg" alt="" />
                <p className="font-manrope font-extrabold text-[20px] text-[#151515]">
                  AI Skill & Content Suggestions
                </p>
              </div>
              <p className="font-manrope font-semibold text-[14px] text-[#151515]">
                Automatically recommends relevant skills and content.
              </p>
            </div>
            <div className="w-[10px] h-[10px] bg-[#0A84FF] rounded-full absolute -left-2"></div>
          </div>
          {/*  */}
          <div className="relative w-fit cursor-pointer -left-20 -top-14 bg-white">
            <div className="flex flex-col gap-[5px]  w-fit h-fit rounded-[10px] border-[4px] border-[#0A84FF] px-[20px] py-[10px] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#FFFFFF_25%)]">
              <div className="flex gap-[5px]">
                <img src="/Icons/6.svg" alt="" />
                <p className="font-manrope font-extrabold text-[20px] text-[#151515]">
                  LinkedIn Optimization
                </p>
              </div>
              <p className="font-manrope font-semibold text-[14px] text-[#151515]">
                Enhance your LinkedIn profile with AI insight
              </p>
            </div>
            <div className="w-[10px] h-[10px] bg-[#0A84FF] rounded-full absolute -left-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyResumeKaro;
