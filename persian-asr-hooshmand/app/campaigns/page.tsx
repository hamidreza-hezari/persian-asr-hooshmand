import Navbar from "@/app/components/sections/nav-bar/nav-bar";
import HeroSection from "@/app/components/sections/hero/hero-section";
import CarouselSection from "@/app/components/sections/carousel/carousel-section";
import ConsultationForm from "@/app/components/sections/consultation/consultation-form-section";
import FAQSection from "@/app/components/sections/faqs/faq-section";
import Footer from "@/app/components/sections/footer/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "Campaigns page Task By HamidReza Hezari",
};

export default function CampaignsPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CarouselSection />
      <ConsultationForm />
      <FAQSection />
      <Footer />
    </>
  );
}
