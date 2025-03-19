{
  /* Resume Cards */
}
{
  resumes.map((resume, index) => (
    <div
      key={index}
      className="group relative hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
      onClick={() => openPopup(resume.img)}
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
  ));
}

{
  /* Full-Screen Popup */
}
{
  popupImage && (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.27)] z-50 flex items-center justify-center"
      onClick={closePopup}
    >
      <div
        className="relative max-h-screen w-full max-w-1/2 "
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={popupImage}
          alt="Expanded Resume"
          className="w-full h-auto max-h-screen object-contain rounded-lg"
        />
      </div>
    </div>
  );
}

<p
  onClick={toggleContent}
  className="flex items-center gap-[8px] px-[12px] py-[2.4px] border-3 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-[13.68px] cursor-pointer"
>
  {isExpanded ? "See Less" : "See More"} {/* Toggle text */}
  <img
    src="/img/toolsDownArr.svg"
    className={`w-[12px] transition-transform transform ${
      isExpanded ? "rotate-180" : ""
    }`}
    alt="arrow" // Added alt for accessibility
  />
</p>;

{
  /* Search Input */
}
{
  /* <div className="relative">
          <img
            src="/Icons/search.svg"
            alt="search"
            className="absolute top-3.5 left-4"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-64 pl-10 pr-4  py-[10px]   rounded-full ring-2 ring-[#E2E8F0] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div> */
}
