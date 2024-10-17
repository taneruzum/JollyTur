import { LastViewedHotelsData } from "@/Mock/LastViewed";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ViewedCard from "./ViewedCard";


export default function LastViewedHotels() {
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1.3}
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
