import Pricing from "@/components/MainComponents/Pricing";
import AboutUs from "@/components/landingPage/AboutUs";
import Hero from "@/components/landingPage/Hero";
import Reviews from "@/components/landingPage/Reviews";
import Values from "@/components/landingPage/Values";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Values />
      <AboutUs />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
