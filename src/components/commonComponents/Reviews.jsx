import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      name: "Benjamin Martinez",
      comment:
        "This resume builder made the process so simple! I just filled in my details, and within minutes, I had a professional-looking resume. The templates are clean, modern, and ATS-friendly. Highly recommended!",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Laura Simmons",
      comment:
        "I loved the variety of templates! The designs are elegant and professional, which helped my resume stand out. I got multiple interview calls after using this tool. Great job!",
      profileImg:
        "https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=",
    },
    {
      name: "John Davis",
      comment:
        "The AI suggestions helped me improve my resume by recommending strong action words and relevant skills. I feel more confident applying for jobs now. A must-have for job seekers!",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Emily Turner",
      comment:
        "The free version is already great, but the premium features take it to another level! The resume analysis tool gave me valuable feedback that helped me land my first interview!",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      name: "Michael Williams",
      comment:
        "I built my resume directly from my phone! The mobile-friendly design made it easy to edit and download my resume on the go. Highly impressed with the seamless experience!",
      profileImg:
        "https://media.istockphoto.com/id/1618846975/photo/smile-black-woman-and-hand-pointing-in-studio-for-news-deal-or-coming-soon-announcement-on.jpg?s=612x612&w=0&k=20&c=LUvvJu4sGaIry5WLXmfQV7RStbGG5hEQNo8hEFxZSGY=",
    },
    {
      name: "Sophia Lee",
      comment:
        "Whether you’re a fresher or an experienced professional, this resume builder has something for everyone. The customizable sections and industry-specific suggestions were very helpful!",
      profileImg:
        "https://media.istockphoto.com/id/1162414604/photo/african-american-business-woman-over-isolated-yellow-background-smiling-showing-both-hands.jpg?s=612x612&w=0&k=20&c=x_yVbRm7dyuz4tD3YGCOD-Luj9lFcRKtiUCYx53y7Es=",
    },
  ];

  return (
    <>
      <section className="max-w-[1440px] min-w-auto mx-auto border-1 border-[#D9D9D9]  bg-[#F8F8F8] justify-center items-center gap-[70px] px-[20px] py-[40px]">
        <p className="font-lexend font-semibold text-[30px] text-center mb-10">
          Job seekers <span className="blueGradient"> trust </span> and{" "}
          <span className="purpleGradient"> love </span> our resume builder.
        </p>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                key={index}
                name={review.name}
                comment={review.comment}
                profileImg={review.profileImg}
              />
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;
