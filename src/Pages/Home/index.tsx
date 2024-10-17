import { discount, jakuzi, knife_spoon, snow } from '@/Constants/icons'
import SwiperComp from '../../Components/HomeComponents/HeroSection/swiper'
import TabsComponent from '../../Components/HomeComponents/TabsSection/tabs'
import standartImage from '/HeroSection/Standart/standart_room.png'
import RoomCard from '@/Components/CardComponents/RoomCard'
import RoomCardData from '@/Mock/RoomCard'
import { IRoomCard } from '@/types/RoomCard'
import { persons, date_thin, like } from '@/Constants/icons';
import LastCommentsSwiper from '@/Components/HomeComponents/LastComments'
import otel_area from '/OtelArea/otel_area.png'
import { location, airplane, lifebuoy, question_mark } from '@/Constants/icons';
import PromotionsSection from '@/Components/HomeComponents/PromotionsSection'
import LastViewedHotels from '@/Components/HomeComponents/LastViewedHotels'

export default function HomePage() {


  return (
    <div className='relative w-full min-h-[3000px] py-2 flex flex-col gap-6 *:w-full'>
      <div className='fixed z-50 left-0 bottom-0 w-full flex items-center justify-between bg-white shadow-inner px-5 py-3'>
        <section className='flex flex-col gap-1'>
          <span className='text-sm text-customBlue2 font-semibold'>70.243 TL</span>
          <span className='text-xs text-customDark'>6 Gece</span>
        </section>
        <button className='px-6 py-2 bg-customBlue3 text-xs text-white font-semibold rounded-md'>
          Oda Seç
        </button>
      </div>
      <SwiperComp />
      <section className='w-full flex flex-col gap-2'>
        <h2 className='text-customBlue2 text-base font-semibold'>Nirvana Mediterranean Excellence</h2>
        <div className='flex items-center gap-2'>
          <div className='px-2 py-1 bg-customGreen2 rounded-[3px] text-customGreen text-xs'>
            4.5
          </div>
          <span className='text-customBlue2 text-xs font-semibold'>
            +1200 Değerlendirme
          </span>
        </div>
      </section>
      <section className=''>
        <TabsComponent />
      </section>
      <section className='flex flex-col gap-4'>
        <h3 className='font-semibold text-sm text-customBlue2' >Standart Oda</h3>
        <div className='flex items-center gap-4 text-[11px] text-customDark font-semibold'>
          <span>Çift Kişilik Yatak</span>
          <div className='size-[4.75px] rounded-full bg-customDark' />
          <span>Bahçe Manzaralı</span>
        </div>
        <div className='relative w-full overflow-hidden rounded-[9.75px]'>
          <img src={standartImage} alt="Standart Oda Resmi" className='w-full object-cover object-center aspect-[327/160]' />
        </div>
        <div className='w-full grid grid-cols-2 gap-x-28 gap-y-4 text-xs font-semibold *:flex *:gap-2.5 *:text-customBlue2'>
          <div className='text-nowrap'>
            <img src={knife_spoon} alt="Bıçak&Kaşık İkonu" className='size-4' />
            <span>Sağlıklı & Local Her Şey Dahil</span>
          </div>
          <div>
            <img src={jakuzi} alt="Jakuzi İkonu" className='size-4' />
            <span>Jakuzi</span>
          </div>
          <div className='text-nowrap'>
            <img src={discount} alt="İndirim İkonu" className='size-4' />
            <span>Erken Rezervasyon İndirimi</span>
          </div>
          <div>
            <img src={snow} alt="Kar İkonu" className='size-4' />
            <span>Klima</span>
          </div>
        </div>
        <button className='text-start font-light text-xs text-customBlue3'>
          Tüm Özellikler
        </button>
        <div className="w-full flex flex-col gap-6">
          {RoomCardData.map((room: IRoomCard, index: number) => (
            <RoomCard key={index} data={room} />
          ))}
        </div>
        <button
          className='w-full py-2 border border-customBlue3 rounded-[6px] text-sm text-customBlue3 font-semibold'
        >
          + 4 Oda Tipi Daha Gör
        </button>
      </section>
      <section className='flex flex-col gap-2'>
        <h3 className='font-semibold text-sm text-customBlue2' >Jollytur Değerlendirmeleri</h3>
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
              <img src={persons} alt="İnsan İkonu" className='size-4' />
              4.9 son 10 misafirin ortalama puanıdır
            </div>
            <div>
              <img src={date_thin} alt="Tarih İkonu" className='size-4' />
              <p><span className='text-customGreen'>Sürekli olarak mükemmel</span> son 6 ayın reytingleri</p>
            </div>
            <div>
              <img src={like} alt="Beğeni İkonu" className='size-4' />
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
        <h4 className='text-xs text-customBlue2' >Antalya / Kemer / Beldibi</h4>
        <div className='w-full overflow-hidden rounded-[10px] '>
          <img src={otel_area} alt="Otel'in Çevresinin Görüntüsü" className='aspect-[327/143] object-cover object-center' />
        </div>
        <button className='text-start text-[10px] text-customBlue3'>
          Haritada Görüntüle
        </button>
        <div className='w-full flex flex-col gap-2 text-[11px] text-customBlue2 *:w-full *:flex *:items-center *:justify-between'>
          <div>
            <div className='flex items-center gap-4'><img src={location} alt="Konum İkonu" className='w-[11px] h-3.5' />Kemer</div>
            <span>15km</span>
          </div>
          <div>
            <div className='flex items-center gap-4'><img src={location} alt="Konum İkonu" className='w-[11px] h-3.5' />Antalya</div>
            <span>30km</span>
          </div>
          <div>
            <div className='flex items-center gap-2.5'><img src={airplane} alt="Uçak İkonu" className='size-4' />Antalya Havalimanı</div>
            <span>45km</span>
          </div>
          <div>
            <div className='flex items-center gap-2.5'>
              <img src={airplane} alt="Uçak İkonu" className='size-4' />Gazipaşa Havalimanı
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
          <img src={lifebuoy} alt="Can Simidi İkonu" className='size-7' />
          <div className='flex flex-col gap-1 -ml-6'>
            <span className='text-xs text-black font-semibold'>İptal Güvence Paketi</span>
            <span className='text-[11px] text-customBlue3'>72 saat kala iptal veya değişiklik hakkı</span>
          </div>
          <img src={question_mark} alt="Soru İşareti Baloncuk İkonu" className='size-5' />
        </div>
      </section>
      <div className='w-full h-px bg-customDark2/80' />
    </div>
  )
}
