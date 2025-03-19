import React from "react";
import { useState } from "react";
import LoginModal from "./LoginModel";

const Navbar = () => {
  const [isToolOpen, setIsToolOpen] = useState(false);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTool = () => {
    setIsToolOpen(!isToolOpen);
    if (!isToolOpen) {
      setIsOrgOpen(false); // Close the Org section when Tool section is opened
    }
  };

  const toggleOrg = () => {
    setIsOrgOpen(!isOrgOpen);
    if (!isOrgOpen) {
      setIsToolOpen(false); // Close the Tool section when Org section is opened
    }
  };

  return (
    <>
      <nav className=" relative max-w-[1440px] min-w-auto mx-auto px-[50px] py-[15px] border-b-[1.5px] border-[#E5E5E5] flex items-center justify-between text-[#151515] font-inter">
        <img
          src="/img/Logo.webp"
          alt="ResumeKaro.ai Logo"
          className="w-[214.65px]"
        />

        <section className="flex gap-[82px] text-[16px] font-medium">
          <p className="cursor-pointer hover:text-pink-600 transition-all hover:underline">
            Home
          </p>
          <div className="relative">
            {/* Tools Button */}
            <p
              className="flex gap-1 cursor-pointer hover:text-pink-600 transition-all hover:underline"
              onClick={toggleTool}
            >
              <img src="/img/Star.svg" className="w-[12px]" />
              Tools
              <img
                src="/img/toolsDownArr.svg"
                className={`w-[12px] transition-transform ${
                  isToolOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </p>

            {/* Dropdown Menu */}
            {isToolOpen && (
              <div className="absolute -bottom-[200px] -left-[400px] flex gap-[20px] bg-sky-200 p-[12px] rounded-[24px] ">
                <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className=" p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px]">
                      <span className="blueGradient"> AI</span> <br />
                      Resume
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/1.png"
                    alt=""
                    className="w-[99px] -rotate-[20deg] absolute right-[-15px] bottom-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
                  />
                </div>
                {/*  */}
                <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className=" relative z-10relative z-10 p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px]">
                      <span className="blueGradient"> AI</span> <br />
                      Cover Letter
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/2.png"
                    alt=""
                    className="w-[99px] -rotate-[8deg] absolute right-[-50px] bottom-[-10px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
                  />
                </div>{" "}
                <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className="relative z-10 p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px]">
                      <span className="blueGradient"> AI</span> Resume <br />
                      Optimization
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/3.png"
                    alt=""
                    className="w-[110px] -rotate-[8deg] absolute right-[-50px] bottom-[-10px]transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
                  />
                </div>{" "}
                <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className="relative z-10 p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px]">
                      <span className="blueGradient"> AI </span> Specified{" "}
                      <br />
                      Job Resume
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/4.png"
                    alt=""
                    className="w-[88px] absolute right-[-15px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:-rotate-12"
                  />
                </div>{" "}
                <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className="relative z-10 p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px]">
                      LinkedIn <br /> Optimization
                    </p>
                  </div>
                  <img
                    src="/ToolsImg/5.png"
                    alt=""
                    className="w-[109px] -rotate-[20deg] absolute right-[-15px] top-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:w-[120px]"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            {/* Org Button */}
            <p
              className="flex gap-1 cursor-pointer hover:text-pink-600 transition-all hover:underline"
              onClick={toggleOrg}
            >
              Organization
              <img
                src="/img/toolsDownArr.svg"
                className={`w-[12px] transition-transform ${
                  isOrgOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </p>

            {/* Dropdown Menu */}
            {isOrgOpen && (
              <div className="absolute -bottom-[220px] -left-[50px] flex flex-col gap-[20px] bg-sky-200 p-[12px] rounded-[24px] ">
                <div className="relative w-[250px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className=" p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px] ">
                      College / University
                    </p>
                  </div>
                  <img
                    src="/OrgImg/1.png"
                    className=" relative -bottom-8 w-[100px] h-fit"
                    alt=""
                  />
                </div>
                {/*  */}
                <div className="relative w-[250px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group">
                  <div className=" p-[15px] flex items-end">
                    <p className="font-manrope font-bold text-[20px] ">
                      Corporate
                    </p>
                  </div>
                  <img
                    src="/OrgImg/2.png"
                    className=" relative -bottom-3 -right-7 w-[100px] h-fit"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <p className="cursor-pointer hover:text-pink-600 transition-all hover:underline">
            Blogs
          </p>
        </section>

        <section className="flex items-center gap-[24px] text-[16px] font-medium">
          <p className="flex items-center gap-[10px] px-[10px] py-[5px] text-white font-semibold rounded-lg bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer ">
            Build Your Resume <img src="/img/BtnRightArr.svg" alt="" />
          </p>
          <div className="border-[1.5px] py-4 border-[#E5E5E5]"></div>
          <p
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer hover:text-blue-600 hover:underline"
          >
            Sign In
          </p>
        </section>
      </nav>
      {/* signin popup */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
