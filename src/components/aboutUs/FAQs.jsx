"use client";
import Image from "next/image";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const generalData = [
    {
      title: "What is the purpose of this website?",
      content:
        "This website provides information about health and medical topics, including symptoms, treatment options, and medication usage.",
    },
    {
      title: " How can I find the right doctor?",
      content:
        "Use our search filters to narrow down doctors by specialty, location, patient reviews, and available appointment times.​",
    },
    {
      title: "Can I book a same-day appointment?",
      content:
        "Yes, same-day appointments are available depending on the doctor's schedule.",
    },
    {
      title: "How do I create an account?",
      content:
        "Charges vClick on the 'Sign Up' button and fill in the required details such as your name, email, and phone number.ary based on truck type, distance, cargo size, and other factors, with costs shown before booking.​",
    },
    {
      title: "Can I reschedule or cancel my appointment?",
      content:
        "Yes, log in to your account, go to 'My Appointments,' and select the option to reschedule or cancel. Make sure to check the doctor's cancellation policy.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-white p-8">
      {/* FAQ Image Section */}
      {/* <div className="flex justify-center">
        <Image
          alt="FAQ Illustration"
          src={faqImage}
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div> */}
      <p className="sm:text-5xl font-semibold text-[#111032]">
        frequently asked questions
      </p>

      {/* FAQ Accordion Section */}
      <div className="w-full md:w-2/3">
        {generalData.map((item, index) => (
          <Accordion
            key={index}
            className="shadow-lg border border-[#32D596] my-4 rounded-lg"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className="bg-[#F9FAFB] hover:bg-[#F3F4F6] transition duration-300"
            >
              <span className="text-xs md:text-lg font-medium text-[#111032]">
                {item.title}
              </span>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
              <span className="text-xs md:text-base text-[#111032]">
                {item.content}
              </span>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
