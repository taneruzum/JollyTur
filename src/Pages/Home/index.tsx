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
      {/**JollyTur Reviews Section */}
      <section className='flex justify-between gap-24'>
        <div className='flex flex-col gap-16 flex-shrink-0'>
          <section className='flex flex-col gap-2'>
            <h3 className='font-semibold text-sm text-customBlue2 xl:text-2xl'>Jollytur Değerlendirmeleri</h3>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-4 font-semibold text-customBlue2'>
                <span className='text-[32px] xl:text-[60px]'>4.5</span>
                <div className='flex flex-col justify-center gap-0'>
                  <span className='text-xs xl:text-base'>Mükemmel</span>
                  <span className='text-[10px] xl:text-sm'>+1200 Değerlendirme</span>
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
          <section className='max-w-[331px] w-full hidden xl:flex gap-6 text-customBlue2 *:flex *:flex-col *:items-center *:gap-2'>
            <div className=''>
              <div className='flex items-center justify-center size-[47px] bg-customBlue4 rounded-full '>
                <IconComponent name='businessOutline' alt='İş Çantası İkonu' className='size-6' />
              </div>
              <span className='text-xs font-bold'>İş</span>
              <span className='text-xs'>22%</span>
            </div>
            <div className=''>
              <div className='flex items-center justify-center size-[47px] bg-customBlue4 rounded-full '>
                <IconComponent name='family' alt='Aile İkonu' className='size-[29px]' />
              </div>
              <span className='text-xs font-bold'>Aile</span>
              <span className='text-xs'>30%</span>
            </div>
            <div className=''>
              <div className='flex items-center justify-center size-[47px] bg-customBlue4 rounded-full '>
                <IconComponent name='heart' alt='Kalp İkonu' className='size-[23px]' />
              </div>
              <span className='text-xs font-bold'>Çift</span>
              <span className='text-xs'>31%</span>
            </div>
            <div className=''>
              <div className='flex items-center justify-center size-[47px] bg-customBlue4 rounded-full '>
                <IconComponent name='group' alt='Grup İkonu' className='size-6' />
              </div>
              <span className='text-xs font-bold'>Grup</span>
              <span className='text-xs'>11%</span>
            </div>
            <div className=''>
              <div className='flex items-center justify-center size-[47px] bg-customBlue4 rounded-full '>
                <IconComponent name='personOutline' alt='Kişi İkonu' className='w-4 h-[18px]' />
              </div>
              <span className='text-xs font-bold'>Tek</span>
              <span className='text-xs'>22%</span>
            </div>
          </section>
        </div>
        <div className=' hidden xl:flex flex-col w-full gap-10'>
          <section className='flex flex-col gap-2 *:text-customBlue2'>
            <h3 className='font-semibold text-base'>Değerlendirme Özeti</h3>
            <div className='max-w-[669px] w-full grid grid-cols-2 gap-x-6 gap-y-3'>
              <div className='w-full flex flex-col gap-3'>
                <div className='w-full flex justify-between items-center'>
                  <span className='text-xs'>Olanaklar</span>
                  <span className='text-sm'>4.9</span>
                </div>
                <div className='relative w-full h-1.5 rounded-[20px] bg-customDark2/80'>
                  <div className='w-[98%] h-full rounded-[20px] bg-customBlue5' />
                </div>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <div className='w-full flex justify-between items-center'>
                  <span className='text-xs'>Hijyen</span>
                  <span className='text-sm'>4.0</span>
                </div>
                <div className='relative w-full h-1.5 rounded-[20px] bg-customDark2/80'>
                  <div className='w-[80%] h-full rounded-[20px] bg-customBlue5' />
                </div>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <div className='w-full flex justify-between items-center'>
                  <span className='text-xs'>Odalar</span>
                  <span className='text-sm'>4.5</span>
                </div>
                <div className='relative w-full h-1.5 rounded-[20px] bg-customDark2/80'>
                  <div className='w-[90%] h-full rounded-[20px] bg-customBlue5' />
                </div>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <div className='w-full flex justify-between items-center'>
                  <span className='text-xs'>Konum</span>
                  <span className='text-sm'>4.0</span>
                </div>
                <div className='relative w-full h-1.5 rounded-[20px] bg-customDark2/80'>
                  <div className='w-[80%] h-full rounded-[20px] bg-customBlue5' />
                </div>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <div className='w-full flex justify-between items-center'>
                  <span className='text-xs'>Yemekler</span>
                  <span className='text-sm'>4.0</span>
                </div>
                <div className='relative w-full h-1.5 rounded-[20px] bg-customDark2/80'>
                  <div className='w-[80%] h-full rounded-[20px] bg-customBlue5' />
                </div>
              </div>

            </div>
          </section>
          <section className='hidden xl:flex w-full max-w-[856px] flex-col gap-3 '>
            <h3 className='font-semibold text-base text-customBlue2'>Son Yorumlar</h3>
            <LastCommentsSwiper />
          </section>
        </div>
      </section>
      <section className='flex flex-col gap-3 xl:hidden'>
        <h3 className='font-semibold text-sm text-customBlue2'>Son Yorumlar</h3>
        <LastCommentsSwiper />
      </section>
      <section className='flex flex-col gap-3 xl:flex-row xl:gap-16'>
        <div className='flex flex-col gap-3 xl:w-full xl:max-w-[370px]'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-sm text-customBlue2 xl:text-2xl'>Otel Çevresini Keşfet</h3>
            <h4 className='text-xs text-customBlue2 xl:text-sm'>Antalya / Kemer / Beldibi</h4>
          </div>
          <div className='w-full overflow-hidden rounded-[10px] xl:hidden'>
            <img src={otel_area} alt="Otel'in Çevresinin Görüntüsü" className='aspect-[327/143] object-cover object-center' />
          </div>
          <button className='text-start text-[10px] text-customBlue3 xl:hidden'>
            Haritada Görüntüle
          </button>
          <div className='w-full flex flex-col gap-2 text-[11px] xl:text-sm text-customBlue2 *:w-full *:flex *:items-center *:justify-between'>
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
        </div>
        <div className='hidden xl:block w-full overflow-hidden rounded-[10px] '>
          <img src={otel_area} alt="Otel'in Çevresinin Görüntüsü" className='aspect-[327/143] object-cover object-center' />
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
