import { LastViewedHotelsData } from "@/Mock/LastViewed";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ViewedCard from "./ViewedCard";
import { useEffect, useState } from "react";


export default function LastViewedHotels() {

    const [slidesPerView, setSlidesPerView] = useState<number>(1.3);
    const [slideGap, setSlideGap] = useState<number>(10);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1280) {
                setSlidesPerView(1.3);
            } else {
                setSlidesPerView(4);
                setSlideGap(20)
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                // autoplay={{
                //     delay: 8000,
                //     disableOnInteraction: false,
                // }}
                spaceBetween={slideGap}
                slidesPerView={slidesPerView}
            >
                {LastViewedHotelsData.map((vis, index) => (
                    <SwiperSlide key={index}>
                        <ViewedCard data={vis} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
