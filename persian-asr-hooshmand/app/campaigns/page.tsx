import Navbar from "@/app/components/layout/nav-bar/nav-bar";
import HeroSection from "@/app/components/sections/hero/hero";
import CarouselSection from "@/app/components/sections/carousel/carousel";
import ConsultationForm from "@/app/components/sections/consultation/consultation";

export default function CampaignsPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CarouselSection />
      <ConsultationForm />
    </>
  );
}
