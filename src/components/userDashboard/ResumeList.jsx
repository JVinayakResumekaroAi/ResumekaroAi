import React from "react";

const ResumeCard = () => {
  const resumes = [
    {
      img: "/expResume/expResume1.png",
      name: "Syed Talha Ahmed",
      industry: "IT & Software Development",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "25/05/2020",
    },
    {
      img: "/expResume/expResume2.png",
      name: "Syed Talha Ahmed",
      industry: "IT & Software Development",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "18/03/2025",
    },
  ];

  return (
    <div className="flex flex-col gap-[30px] ">
      {resumes.map((resume, index) => (
        <div
          key={index}
          className="bg-white rounded-[10px] border border-[#DCDCDC] p-6 flex items-center justify-between w-[811px] max-w-full"
        >
          {/* Image Section */}
          <div className="w-52 h-auto">
            <img
              src={resume.img}
              alt="Resume"
              className="rounded-md shadow-md w-full h-auto"
            />
          </div>

          {/* Resume Details */}
          <div className="flex flex-col gap-[20px]">
            <p className="text-[16px] ">
              <span className=" font-bold font-inter">Name:</span> {resume.name}
            </p>
            <p className="text-[16px] ">
              <span className=" font-bold font-inter">Industry:</span>{" "}
              {resume.industry}
            </p>
            <p className="text-[16px] ">
              <span className=" font-bold font-inter">Job Role:</span>{" "}
              {resume.jobRole}
            </p>
            <p className="text-[16px] ">
              <span className=" font-bold font-inter">Experience:</span>{" "}
              {resume.experience}
            </p>
            <p className="text-[16px] ">
              <span className=" font-bold font-inter">Creation Date:</span>{" "}
              {resume.creationDate}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-[25px]">
            <button className="w-[237px] py-2 border-2 border-gray-300 rounded-full text-[#151515] font-semibold font-manrope text-[18px] cursor-pointer hover:bg-gray-100 transition duration-300">
              Edit
            </button>
            <button className="w-[237px] py-2 border-2 border-gray-300 rounded-full text-[#151515] font-semibold font-manrope text-[18px] cursor-pointer hover:bg-gray-100 transition duration-300">
              View
            </button>
            <button className="w-[237px] py-2 border-2 border-gray-300 rounded-full text-[#151515] font-semibold font-manrope text-[18px] cursor-pointer hover:bg-gray-100 transition duration-300">
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeCard;
