import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommentCard from "./CommentCard";
import { LastComments } from "@/Mock/Comments";
import { useEffect, useState } from "react";


export default function LastCommentsSwiper() {
    const [slidesPerView, setSlidesPerView] = useState<number>(1.3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1280) {
                setSlidesPerView(1.3);
            } else {
                setSlidesPerView(2.5);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='relative w-full'>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={slidesPerView}
            >
                {LastComments.map((comm, index) => (
                    <SwiperSlide key={index}>
                        <CommentCard data={comm} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hidden xl:block absolute z-10 right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent" />
        </div>
    )
}
