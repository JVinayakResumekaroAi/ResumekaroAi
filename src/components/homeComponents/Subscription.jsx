import React from "react";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <section className="my-16 max-w-[1320px] min-w-auto mx-auto  px-[40px] py-[50px]  rounded-[30px]   bg-gradient-to-t from-[#336EE7] to-[rgb(76,149,251)] flex justify-between items-center">
      <div className="flex flex-col gap-3  ">
        <p className="font-manrope font-bold text-[25px] text-white max-w-[750px]">
          No Monthly or Yearly Subscription
        </p>
        <p className="font-inter font-bold text-[35px] text-white max-w-[750px]">
          Just Pay{" "}
          <span className="font-extrabold text-5xl font-manrope"> ₹9</span> ,
          Edit and Download
        </p>
      </div>
      <Link to={"/templates"}>
        <button className=" text-[20px]  w-fit h-fit  px-[20px] py-[10px] rounded-4xl font-inter font-semibold   bg-gradient-to-b from-[#336EE7] to-[rgb(76,149,251)]  cursor-pointer hover:scale-95 hover:shadow-2xl transition-all border-white border-3  text-white">
          Build Your ATS Friendly Resume Now
        </button>
      </Link>
    </section>
  );
};

export default Subscription;
{
  /* <button className="bg-black text-white px-[20px] py-[10px] rounded-4xl font-inter font-semibold w-fit">
Get Started
</button> */
}
