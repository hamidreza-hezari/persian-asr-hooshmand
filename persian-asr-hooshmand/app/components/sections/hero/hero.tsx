import HeroImage from "../../../../assets/icons/hero-image";

export default function HeroSection() {
  return (
    <section className="py-8">
      <div className="max-w-width mx-auto w-full px-6">
        <div className="border-border flex flex-col-reverse items-center rounded-md border bg-white px-2 pt-2 pb-5 md:flex-row md:border-none md:bg-transparent md:px-1 md:pt-0 md:pb-0">
          <div className="flex flex-col items-center text-center md:mb-8 md:flex-1 md:items-start md:text-right">
            <h1 className="text-text-primary max-w-xs text-lg font-extrabold md:text-2xl md:font-black">
              کمپین‌های بازاریابی و تبلیغاتی
            </h1>
            <p className="text-text-secondary mt-3 max-w-sm text-center text-sm leading-[180%] font-semibold md:mt-4 md:max-w-120 md:text-justify md:text-lg md:leading-[200%] md:font-bold">
              آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان
              ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم
              اول را بردارید!
            </p>
            <p className="text-text-tertiary mt-3 max-w-md text-justify text-xs font-medium md:mt-4 md:text-base md:font-semibold">
              جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
            </p>
            <button className="mt-4 h-auto max-w-sm items-center justify-center rounded-md bg-[linear-gradient(90deg,#6D28D9_0%,#8B5CF6_100%)] px-8 py-3 text-sm font-bold text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:outline-none md:mt-6 md:text-base">
              دریافت مشاوره
            </button>
          </div>

          <div className="w-full shrink-0 md:flex-1">
            <HeroImage className="h-auto w-full max-w-md md:max-w-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
