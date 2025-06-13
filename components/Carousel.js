"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsctzrmng/image/upload/v1749762243/cosmetic-skincare-dropper-bottle-face-cream-packaging-beauty-product-mock-up-lbeige-background-with-natural-light-shadow_105596-5122_ynzngk.jpg",
    topLine: "Radiant Skincare Essentials",
    bottomLine: "Reveal your natural glow with every drop",
    link: "/shop",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsctzrmng/image/upload/v1749764377/brown-glass-dropper-bottle-with-white-box-product-mockup_53876-143026_tb1h42.jpg",
    topLine: "Glow Naturally, Every Day",
    bottomLine: "Nurture your skin with clean, mindful care",
    link: "/shop",
  },
];

const MyCarousel = () => {
  return (
    <div className="relative w-full mb-20">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        className="h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative overflow-hidden">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.topLine}
                className="w-full h-screen object-cover transition-transform duration-[4000ms] ease-in-out scale-110"
              />

              {/* Radial gradient overlay (on top of image, below text) */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_40%,rgba(255,255,255,0)_80%)]" />

              {/* Text content */}
              {/* Text content */}
              <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-black text-left z-20">
                <h1 className="text-black text-5xl font-bold uppercase animate-slideInLeft myGray">
                  {slide.topLine}
                </h1>
                <p className="text-3xl mt-2 uppercase animate-slideInLeft delay-200 myBB font-bold">
                  {slide.bottomLine}
                </p>
                <a
                  href={slide.link}
                  style={{ padding: "1em" }}
                  className="mt-10 px-6 py-2 bg-[#a17778] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now!
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
