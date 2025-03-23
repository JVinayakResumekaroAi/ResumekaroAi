import React from "react";
import ResumeList from "../components/userDashboard/ResumeList";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <section className="max-w-[1340px] min-w-auto mx-auto flex flex-col justify-center items-center gap-[30px] py-[40px] px-2 ">
      <div className="flex flex-col  gap-[30px] w-full bg-[#F2F7FF] border border-[#E2E8F0] rounded-[30px] px-[50px] py-[30px] ">
        <div className="flex justify-between w-full">
          <p className="font-manrope font-extrabold text-[30px] text-center">
            My Resumes
          </p>
          <Link to={"/templates"}>
            <p className="flex items-center gap-[8px] px-[12px] py-[2.4px] border-3 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-[16px] cursor-pointer transition hover:bg-[#3367E7] hover:text-white">
              Create New Resume
              {/* <img
              src="/img/toolsDownArr.svg"
              className="w-[12px] transition-transform transform "
              alt="arrow"
            /> */}
            </p>
          </Link>
        </div>

        <ResumeList />
      </div>
    </section>
  );
};

export default UserDashboard;
