import Navbar from "@/app/components/nav-bar/nav-bar";
import HeroSection from "@/app/components/sections/hero/hero";
import CarouselSection from "@/app/components/sections/carousel/carousel";
import ConsultationForm from "@/app/components/sections/consultation/consultation";
import FAQSection from "@/app/components/sections/faqs/faqs";
import Footer from "@/app/components/footer/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns - Persian Asr Hooshmand",
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
