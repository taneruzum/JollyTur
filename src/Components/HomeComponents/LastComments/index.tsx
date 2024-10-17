import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommentCard from "./CommentCard";
import { LastComments } from "@/Mock/Comments";


export default function LastCommentsSwiper() {
    return (
        <div className='w-full'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                slidesPerView={1.3}
            >
                {LastComments.map((comm, index) => (
                    <SwiperSlide key={index}>
                        <CommentCard data={comm} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
