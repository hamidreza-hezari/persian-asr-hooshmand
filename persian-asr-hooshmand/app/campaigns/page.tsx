import Navbar from "@/app/components/layout/nav-bar/nav-bar";
import HeroSection from "@/app/components/sections/hero/hero";
import CarouselSection from "@/app/components/sections/carousel/carousel";
import ConsultationForm from "@/app/components/sections/consultation/consultation";
import FAQSection from "@/app/components/sections/faqs/faqs";
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
      <footer
        className={
          "bg-text-secondary align-center flex h-72 items-center justify-center"
        }
      >
        <p className={"text-center text-white"}>(: HAMIDREZA HEZARI &copy;</p>
      </footer>
    </>
  );
}
