
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '@/Constants/swiper'
import { Autoplay } from 'swiper/modules'

export default function SwiperComp() {
  return (
    <div className='w-full xl:w-[640px] xl:order-2 '>
      <Swiper
        modules={[Autoplay]}
        loop={true}
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
            <div className='relative w-full  overflow-hidden'>
              <img src={image} alt={`Swiper Image ${index}`} className='w-full xl:w-[636px] aspect-[336/218] object-cover rounded-[6px]' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
