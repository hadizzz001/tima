"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Karim El Khoury",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    stars: 5,
    text: "Outstanding service from start to finish. Proud it's in Lebanon!",
  },
  {
    name: "Nour Hamdan",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    text: "Everything was smooth and exceeded my expectations.",
  },
  {
    name: "Jad Hobeika",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    stars: 5,
    text: "Top-notch quality and attention to detail. Highly recommend!",
  },
  {
    name: "Layal Chidiac",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    stars: 5,
    text: "Professional, quick, and so friendly. Lebanon needs more like this!",
  },
  {
    name: "Ziad Moussawi",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    stars: 5,
    text: "Impressed by the level of care and service. 10/10!",
  },
  {
    name: "Rita Saliba",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    stars: 5,
    text: "Fantastic team and seamless process. Would gladly return!",
  },
  {
    name: "Elie Karam",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    stars: 5,
    text: "Absolutely loved the experience. True Lebanese excellence!",
  },
  {
    name: "Maya Fares",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    stars: 5,
    text: "Everything was handled with care and professionalism.",
  },
  {
    name: "George Maalouf",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    stars: 5,
    text: "Quick, efficient, and courteous. A gem in Lebanon!",
  },
  {
    name: "Sara Bou Nassif",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    stars: 5,
    text: "Couldn’t have asked for better. Truly outstanding service!",
  },
];



const ReviewsSwiper = () => {
  return (
    <div className="max-w-2xl mx-auto my-10"> 
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay , Navigation]}
        className="rounded-xl shadow-lg"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="bg-white p-5 rounded-lg   text-center">
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 mx-auto rounded-full mb-3"
            />
            <h3 className="font-semibold text-lg myGray">{review.name}</h3>
            <div className="flex justify-center my-2 myBB text-[20px]"  >
              {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
            </div>
            <p className=" myGray">{review.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSwiper;
