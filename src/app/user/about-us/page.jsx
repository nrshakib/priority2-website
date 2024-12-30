import AboutReviews from "@/components/aboutUs/AboutReviews";
import Appointment from "@/components/aboutUs/Appointment";
import FAQ from "@/components/aboutUs/FAQs";
import HealthcareSection from "@/components/aboutUs/HealthcareSection";
import WhyChooseUs from "@/components/aboutUs/WhyChooseUs";

export default function page() {
  return (
    <div>
      <HealthcareSection />
      <WhyChooseUs />
      <AboutReviews />
      <FAQ />
      <Appointment />
    </div>
  );
}
