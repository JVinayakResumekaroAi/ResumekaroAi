import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExperienceResume = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the content is expanded

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle between true/false
  };

  const [popupImage, setPopupImage] = useState(null);
  const [popupBtn, setPopupBtn] = useState(null);

  // Array of images and their corresponding URLs
  const expResumes = [
    { img: "/expResume/expResume1.png", url: "/template/1" },
    { img: "/expResume/expResume2.png", url: "/template/2" },
    { img: "/expResume/expResume3.png", url: "/template/3" },
    { img: "/expResume/expResume4.png", url: "/template/4" },
    { img: "/expResume/expResume5.png", url: "/template/5" },
    { img: "/expResume/expResume1.png", url: "/template/1" },
    { img: "/expResume/expResume2.png", url: "/template/2" },
    { img: "/expResume/expResume3.png", url: "/template/3" },
    { img: "/expResume/expResume4.png", url: "/template/4" },
    { img: "/expResume/expResume5.png", url: "/template/5" },
    { img: "/expResume/expResume1.png", url: "/template/1" },
    { img: "/expResume/expResume2.png", url: "/template/2" },
    { img: "/expResume/expResume3.png", url: "/template/3" },
    { img: "/expResume/expResume4.png", url: "/template/4" },
    { img: "/expResume/expResume5.png", url: "/template/5" },
  ];

  // Show only the first 10 expResumes when not expanded
  const visibleexpResumes = isExpanded ? expResumes : expResumes.slice(0, 10);

  const openPopup = (img, url) => {
    setPopupImage(img);
    setPopupBtn(url);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };
  return (
    <div className="flex flex-col items-center gap-[30px] w-full bg-[#F2F7FF] border border-[#E2E8F0] rounded-[30px] px-[50px] py-[30px] ">
      <p className="font-manrope font-extrabold text-[30px] text-center">
        Experience
      </p>

      <div className="w-full flex flex-wrap gap-[43px] items-center justify-center">
        {/* Resume Cards */}
        {visibleexpResumes.map((resume, index) => (
          <div
            key={index}
            className="group relative hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => openPopup(resume.img, resume.url)}
          >
            {/* Resume Image */}
            <img src={resume.img} alt={`Resume ${index + 1}`} />

            {/* Black Fade */}
            <div className="w-full h-full transition duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.27)] absolute top-0 rounded-[5px]"></div>

            {/* Select Button with Router Link */}
            <Link
              to={resume.url}
              className="absolute bottom-3 left-1.5 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10"
              onClick={(e) => e.stopPropagation()} // Prevents popup trigger
            >
              Select This Template
            </Link>

            {/* Zoom Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <img src="/Icons/zoom.svg" className="w-10" alt="Zoom Icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Popup */}
      {/* {popupImage && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.27)] z-50 flex items-center justify-center cursor-pointer"
          onClick={closePopup}
        >
          <div
            className="relative max-h-screen w-full max-w-1/2 "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popupImage}
              alt="Expanded Resume"
              className="w-full h-auto max-h-screen object-contain rounded-lg cursor-default"
            />
            <Link
              to={popupBtn}
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-xl font-bold hover:bg-blue-600 transition z-10"
              onClick={(e) => e.stopPropagation()}
            >
              Select This Template
            </Link>

            <div
              className="w-12 absolute -top-4 -right-4 z-10 cursor-pointer text-red-500 bg-red-50 p-1 rounded-full hover:scale-110 transition"
              onClick={closePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                stroke="currentColor"
                className="w-full h-full"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      )} */}

      {popupImage && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] transform transition-all duration-300 scale-100 hover:scale-[1.02]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition-transform duration-300 hover:rotate-90 shadow-lg cursor-pointer"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="max-h-[80vh] overflow-y-auto custom-scrollbar p-4">
              <img
                src={popupImage}
                alt="Expanded Resume"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Select Button */}
            <div className="p-6 text-center bg-gray-50">
              <Link
                to={popupBtn}
                className="bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                Select This Template
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* "See More" Button */}
      <div className="flex justify-center mt-6">
        <p
          onClick={toggleContent}
          className="flex items-center gap-[8px] px-[12px] py-[2.4px] border-3 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-[13.68px] cursor-pointer transition hover:bg-[#3367E7] hover:text-white"
        >
          {isExpanded ? "See Less" : "See More"}
          <img
            src="/img/toolsDownArr.svg"
            className={`w-[12px] transition-transform transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            alt="arrow"
          />
        </p>
      </div>
    </div>
  );
};

export default ExperienceResume;
