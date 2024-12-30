"use client";

import Pricing from "@/components/MainComponents/Pricing";
import AboutUs from "@/components/MainComponents/AboutUs";
import ContactUs from "@/components/MainComponents/ContactUs";
import UpcomingSchedule from "@/components/MainComponents/Schedule";
import Hero from "@/components/landingPage/Hero";
import Reviews from "@/components/landingPage/Reviews";
import Values from "@/components/landingPage/Values";
import FindADoctor from "@/components/MainComponents/FindADoctor";

export default function dashboard() {
  return (
    <div>
      <Hero />
      <UpcomingSchedule />
      <FindADoctor />
      <Values />
      <AboutUs />
      <ContactUs />
      <Pricing />
      <Reviews />
    </div>
  );
}
