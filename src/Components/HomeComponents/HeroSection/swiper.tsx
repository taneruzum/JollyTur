
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '@/Constants/swiper'
import { Autoplay } from 'swiper/modules'
import IconComponent from '@/Components/Icons/IconComponent'

export default function SwiperComp() {
  return (
    <div className='relative w-full xl:w-[640px] xl:order-2 '>
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
      <div className='absolute z-10 bottom-3 right-2 xl:bottom-5 xl:right-4 flex items-center gap-1 px-1.5 py-1 xl:px-3 xl:py-2 rounded-[5px] bg-white *:text-customBlue'>
        <IconComponent name='imageFill' alt='Resim İkonu' className='size-[11px] xl:size-5' />
        <span className='block xl:hidden font-semibold text-[8px]'>122+</span>
        <span className='hidden xl:block font-semibold text-xs'>Galeri (122)</span>
      </div>
    </div>
  )
}
