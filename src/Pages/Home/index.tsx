import SwiperComp from '../../Components/HomeComponents/HeroSection/swiper';
import TabsComponent from '../../Components/HomeComponents/TabsSection/tabs';
import LastCommentsSwiper from '@/Components/HomeComponents/LastComments';
import otel_area from '/OtelArea/otel_area.png';
import PromotionsSection from '@/Components/HomeComponents/PromotionsSection';
import LastViewedHotels from '@/Components/HomeComponents/LastViewedHotels';
import RoomDetailsSection from '@/Components/HomeComponents/RoomDetailsSection';
import IconComponent from '@/Components/Icons/IconComponent';

export default function HomePage() {
  return (
    <div className='relative w-full min-h-[3000px] py-2 flex flex-col gap-6 *:w-full'>
      {/** Stick Info Section */}
      <div className='fixed z-50 left-0 bottom-0 w-full flex items-center justify-between bg-white shadow-inner px-5 py-3'>
        <section className='flex flex-col gap-1'>
          <span className='text-sm text-customBlue2 font-semibold'>70.243 TL</span>
          <span className='text-xs text-customDark'>6 Gece</span>
        </section>
        <button className='px-6 py-2 bg-customBlue3 text-xs text-white font-semibold rounded-md'>
          Oda Seç
        </button>
      </div>

      <section className='w-full flex flex-col xl:flex-row xl:justify-between gap-6'>
        {/** Hero Section Swiper */}
        <div className='w-full xl:hidden'>
          <SwiperComp />
        </div>
        <TabsComponent />
      </section>
      <RoomDetailsSection />
      <section className='flex flex-col gap-2'>
        <h3 className='font-semibold text-sm text-customBlue2'>Jollytur Değerlendirmeleri</h3>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-4 font-semibold text-customBlue2'>
            <span className='text-[32px]'>4.5</span>
            <div className='flex flex-col justify-center gap-0'>
              <span className='text-xs'>Mükemmel</span>
              <span className='text-[10px]'>+1200 Değerlendirme</span>
            </div>
          </div>
          <div className='flex flex-col gap-3 text-customDark3 text-xs *:flex *:items-center *:gap-3.5'>
            <div>
              <IconComponent name="persons" alt="İnsan İkonu" className='size-4' />
              4.9 son 10 misafirin ortalama puanıdır
            </div>
            <div>
              <IconComponent name="dateThin" alt="Tarih İkonu" className='size-4' />
              <p><span className='text-customGreen'>Sürekli olarak mükemmel</span> son 6 ayın reytingleri</p>
            </div>
            <div>
              <IconComponent name="like" alt="Beğeni İkonu" className='size-4' />
              <p><span className='text-customGreen'>%62</span> misafirler bu tesisi beğendi</p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-3'>
        <h3 className='font-semibold text-sm text-customBlue2'>Son Yorumlar</h3>
        <LastCommentsSwiper />
      </section>
      <section className='flex flex-col gap-3'>
        <h3 className='font-semibold text-sm text-customBlue2'>Otel Çevresini Keşfet</h3>
        <h4 className='text-xs text-customBlue2'>Antalya / Kemer / Beldibi</h4>
        <div className='w-full overflow-hidden rounded-[10px] '>
          <img src={otel_area} alt="Otel'in Çevresinin Görüntüsü" className='aspect-[327/143] object-cover object-center' />
        </div>
        <button className='text-start text-[10px] text-customBlue3'>
          Haritada Görüntüle
        </button>
        <div className='w-full flex flex-col gap-2 text-[11px] text-customBlue2 *:w-full *:flex *:items-center *:justify-between'>
          <div>
            <div className='flex items-center gap-4'>
              <IconComponent name="location" alt="Konum İkonu" className='w-[11px] h-3.5' />
              Kemer
            </div>
            <span>15km</span>
          </div>
          <div>
            <div className='flex items-center gap-4'>
              <IconComponent name="location" alt="Konum İkonu" className='w-[11px] h-3.5' />
              Antalya
            </div>
            <span>30km</span>
          </div>
          <div>
            <div className='flex items-center gap-2.5'>
              <IconComponent name="airplane" alt="Uçak İkonu" className='size-4' />
              Antalya Havalimanı
            </div>
            <span>45km</span>
          </div>
          <div>
            <div className='flex items-center gap-2.5'>
              <IconComponent name="airplane" alt="Uçak İkonu" className='size-4' />
              Gazipaşa Havalimanı
            </div>
            <span>45km</span>
          </div>
        </div>
      </section>
      <PromotionsSection />
      <section className='flex flex-col gap-3'>
        <h3 className='font-semibold text-sm text-customBlue2'>En Son Baktığınız Oteller</h3>
        <LastViewedHotels />
      </section>
      <section>
        <div className='w-full px-4 py-2 flex items-center justify-between border border-customDark2/80 rounded-[6px] bg-white'>
          <IconComponent name="lifebuoy" alt="Can Simidi İkonu" className='size-7' />
          <div className='flex flex-col gap-1 -ml-6'>
            <span className='text-xs text-black font-semibold'>İptal Güvence Paketi</span>
            <span className='text-[11px] text-customBlue3'>72 saat kala iptal veya değişiklik hakkı</span>
          </div>
          <IconComponent name="questionMark" alt="Soru İşareti Baloncuk İkonu" className='size-5' />
        </div>
      </section>
      <div className='w-full h-px bg-customDark2/80' />
    </div>
  );
}
