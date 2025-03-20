import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section
      className="max-w-[1440px] min-w-auto mx-auto py-[70px]  flex flex-col gap-[50px]
    items-center justify-center "
    >
      <p className="font-lexend font-semibold text-[30px]">
        <span className="blueGradient"> AI-Powered </span>
        Features for a <span className="purpleGradient">Winning</span> Resume
      </p>

      <div className=" flex flex-wrap gap-[40px] px-[50px] items-center justify-center">
        <Link to={"/templates"}>
          <div className="w-[517px] h-[306px] flex rounded-[24px] gap-3 bg-[#F0FDF4] border border-[#B9F8CF] px-[17.6px] py-[40px]  transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:shadow-2xl shadow-green-50">
            <div className="  w-[240px]  h-full flex flex-col justify-between">
              <div>
                <p className="text-[22px] text-[#151515] font-manrope font-semibold">
                  Ai Resume Builder
                </p>
                <p className="font-lexend font-semibold text-[#008236] text-[24px]">
                  Craft a Job- Winning Resume In Minutes !
                </p>
              </div>
              <button className="w-fit font-outfit text-white text-bold text-[14.4px] p-[8px] rounded-[8px] border  bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer">
                Start Building Your Resume
              </button>
            </div>
            <div className=" relative">
              <img
                src="/img/feature1.png"
                alt=""
                className="relative -bottom-8"
              />
            </div>
          </div>
        </Link>
        {/*  */}
        <div className="w-[517px] h-[306px] flex rounded-[24px] gap-3 bg-[#FEFCE8] border border-[#FFF085] px-[17.6px] py-[40px] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:shadow-2xl shadow-yellow-50">
          <div className="  w-[240px]  h-full flex flex-col justify-between">
            <div>
              <p className="text-[22px] text-[#151515] font-manrope font-semibold">
                AI Resume Optimization{" "}
              </p>
              <p className="font-lexend font-semibold text-[#c4930e] text-[24px]">
                Make Your Existing Resume Stand Out!
              </p>
            </div>
            <button className="w-fit font-outfit text-white text-bold text-[14.4px] p-[8px] rounded-[8px] border  bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer">
              Start Building Your Resume
            </button>
          </div>
          <div className=" relative">
            <img
              src="/img/feature2.png"
              alt=""
              className="relative -bottom-8"
            />
          </div>
        </div>
        {/*  */}
        <div className="w-[517px] h-[306px] flex rounded-[24px] gap-3 bg-[#F0F9FF] border border-[#B8E6FE] px-[17.6px] py-[40px] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:shadow-2xl shadow-blue-50">
          <div className="  w-[240px]  h-full flex flex-col justify-between">
            <div>
              <p className="text-[22px] text-[#151515] font-manrope font-semibold">
                AI LinkedIn Optimization
              </p>
              <p className="font-lexend font-semibold text-[#0078D4] text-[24px]">
                Make Your Profile Shine!
              </p>
            </div>
            <button className="w-fit font-outfit text-white text-bold text-[14.4px] p-[8px] rounded-[8px] border  bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer">
              Start Building Your Resume
            </button>
          </div>
          <div className=" relative">
            <img
              src="/img/feature3.png"
              alt=""
              className="relative -bottom-8"
            />
          </div>
        </div>
        {/*  */}

        <Link to={"/templates"}>
          <div className="w-[517px] h-[306px] flex rounded-[24px] gap-3 bg-[#F5F3FF] border border-[#DDD6FF] px-[17.6px] py-[40px] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:shadow-2xl shadow-purple-50">
            <div className="  w-[240px]  h-full flex flex-col justify-between">
              <div>
                <p className="text-[22px] text-[#151515] font-manrope font-semibold">
                  AI - Skill Recomomdation{" "}
                </p>
                <p className="font-lexend font-semibold text-[#7F22FE] text-[24px]">
                  Find the Best Skills to Boost Your Resume!{" "}
                </p>
              </div>
              <button className="w-fit font-outfit text-white text-bold text-[14.4px] p-[8px] rounded-[8px] border  bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer">
                Start Building Your Resume
              </button>
            </div>
            <div className=" relative">
              <img
                src="/img/feature1.png"
                alt=""
                className="relative -bottom-8"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Features;
