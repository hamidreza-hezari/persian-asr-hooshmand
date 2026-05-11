import Container from "@/app/components/ui/container";
import Navbar from "@/app/components/layout/nav-bar/nav-bar";

export default function CampaignsPage() {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-text-primary max-w-xs text-2xl font-bold">
          کمپین‌های بازاریابی و تبلیغاتی
        </h1>
        <p className="text-text-secondary mt-4 max-w-md text-justify text-lg">
          آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما
          به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را
          بردارید!
        </p>
      </Container>
    </>
  );
}
