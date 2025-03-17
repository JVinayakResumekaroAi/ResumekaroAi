import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is an ATS and why is it important?",
      answer:
        "An ATS (Applicant Tracking System) is software used by companies to filter and rank resumes. Without ATS optimization, your resume might get rejected before a recruiter sees it.",
    },
    {
      question: "How can I make my resume ATS-friendly?",
      answer:
        "An ATS-friendly resume uses proper structure, relevant keywords, and avoids complex formatting to pass through ATS screening without errors.",
    },
    {
      question: "How does Resume Karo AI improve my resume?",
      answer:
        "Our AI analyzes job descriptions, enhances keywords, optimizes formatting, and improves your ATS score to increase your chances of getting shortlisted.",
    },
    {
      question: "What is AI resume optimization?",
      answer:
        "AI-powered resume optimization fine-tunes your resume’s content, structure, and keywords to match job requirements and improve its ATS score.",
    },
    {
      question: "Can I create different resumes for different jobs?",
      answer:
        "Yes! Resume Karo AI allows you to generate customized resumes tailored for specific job roles, improving your chances of success.",
    },
    {
      question: "How does LinkedIn optimization help in job search?",
      answer:
        "LinkedIn optimization ensures your profile is well-structured, keyword-rich, and attractive to recruiters, increasing job opportunities.",
    },
    {
      question: "Why is an AI-generated cover letter important?",
      answer:
        "An AI-generated cover letter is personalized for a job, highlighting key skills and experiences to better match the job role and improve your selection chances.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="max-w-3xl mx-auto py-16 px-6 md:px-12 flex flex-col items-center space-y-8 ">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-manrope font-bold text-gray-900 text-center">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="w-full">
        {visibleFaqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-gray-300 rounded-lg p-5 mb-4 bg-white  transition-all duration-300 hover:shadow-lg"
          >
            <summary className="flex justify-between items-center text-lg font-semibold cursor-pointer text-gray-800 group-open:text-blue-500">
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className=" cursor-pointer px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        {showAll ? "Show Less" : "Load More"}
      </button>
    </section>
  );
};

export default FAQ;
