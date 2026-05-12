"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

import { Card } from "../../ui/card";
import { CAROUSEL_DATA } from "@/app/constants/carousel.constants";
import { CarouselNavigationButton } from "@/app/components/sections/carousel/carousel-navigation-button";

export default function CarouselSection() {
  return (
    <section className="bg-(--background) pt-4 pb-20 md:pt-8 md:pb-30">
      <div className="relative h-60 w-full bg-[linear-gradient(180deg,#43217C_40%,#7A3DE2_100%)]">
        <div className="flex h-full flex-col pt-6">
          <h2 className="px-4 text-center text-lg leading-8 font-semibold text-white md:text-2xl">
            موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
          </h2>

          <div className="absolute top-24 right-0 left-0 md:px-6">
            <div className="max-w-width relative mx-auto w-full">
              <Swiper
                modules={[Autoplay, Navigation, A11y, Keyboard]}
                loop
                keyboard={true}
                grabCursor
                speed={800}
                spaceBetween={12}
                slidesPerView={1.15}
                centeredSlides={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".carousel-next",
                  prevEl: ".carousel-prev",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                a11y={{
                  enabled: true,
                  onlyInViewport: true,
                }}
                className="overflow-hidden!"
              >
                {CAROUSEL_DATA.map((item) => (
                  <SwiperSlide key={item.id} className="flex h-auto">
                    <Card.Root className="flex h-full min-h-55 flex-col">
                      <Card.Icon icon={item.icon} />
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Description>{item.description}</Card.Description>
                    </Card.Root>
                  </SwiperSlide>
                ))}
              </Swiper>
              <CarouselNavigationButton direction="prev" />
              <CarouselNavigationButton direction="next" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
