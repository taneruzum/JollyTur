
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '@/Constants/swiper'
import { Autoplay } from 'swiper/modules'

export default function SwiperComp() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
          >
            <div className='relative w-full  overflow-hidden rounded-[6px]'>
              <img src={image} alt={`Swiper Image ${index}`} className='w-full aspect-[336/218] object-cover' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
