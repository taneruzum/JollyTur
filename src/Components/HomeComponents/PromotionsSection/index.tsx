import IconComponent from '@/Components/Icons/IconComponent'
import { IoIosArrowForward } from 'react-icons/io'

export default function PromotionsSection() {

    return (
        <section className="relative flex flex-col gap-3 ">
            <h3 className='font-semibold text-sm text-customBlue2 xl:text-2xl'>Kampanyalar</h3>
            <div className="w-full flex flex-row xl:flex-col items-center justify-between gap-4 *:w-full *:flex *:flex-col *:xl:flex-row *:xl:items-center  *:gap-1.5 *:xl:gap-12 *:pl-4 *:p-2 *:xl:px-4 *:border *:border-customDark2/85 *:rounded-[6px]">
                <div className=" min-w-[157px] min-h-[100px] *:xl:px-5 xl:py-6">
                    <section className='flex-shrink-0 flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-10'>
                        <IconComponent name="discountBlue" alt="Mavi İndirim Görseli" className='size-[17px] xl:size-9' />
                        <div className='flex flex-col gap-2'>
                            <div className=' flex flex-col xl:flex-row xl:gap-1 font-semibold text-xs xl:text-xl text-customBlue3 text-nowrap'>
                                <span>%20 Erken</span>
                                <span>Rezervasyon İndirimi</span>
                            </div>
                            <div className='w-full flex items-center justify-between text-[10px] xl:text-xs text-customBlue2'>
                                <span>25.04.2024 - 02.11.2024</span> <IoIosArrowForward className='xl:hidden size-3 text-customDark' />
                            </div>
                            <span className='hidden xl:block text-xs text-customDark/85'>1 gece ve üzeri konaklamalarda geçerlidir.</span>
                        </div>
                    </section>
                    {/**Diver */}
                    <div className='hidden xl:block !w-px h-32 bg-customDark2/85 !p-0 ' />
                    <section className='hidden xl:flex flex-col gap-2 min-w-[300px]'>
                        <span className='text-xs text-customBlue3'>
                            Geçerli Oda Tipleri
                        </span>
                        <div className='flex flex-col gap-1 *:text-xs *:text-customDark'>
                            <span>Villa Nirvana</span>
                            <span>Suite Royal - Ortak Havuz & Bahçe Kullanımlı</span>
                            <span>Villa Royal</span>
                            <span>Villa Sedir</span>
                            <span>Suite Roal - Özel Havuz & Bahçe Kullanımlı</span>
                            <span>Villa Royal - Özel Havuzlu</span>
                        </div>
                    </section>
                    <div className='hidden xl:block !w-px h-32 bg-customDark2/85 !p-0 ' />
                    <section className='hidden xl:flex flex-col gap-2'>
                        <span className='text-xs text-customBlue3'>
                            Geçerli Olan Konseptler
                        </span>
                        <div className='flex flex-col gap-1 *:text-xs *:text-customDark'>
                            <span>Ultimate Her Şey Dahil</span>
                            <span>Yöresel & Sağlıklı Ultra Her Şey Dahil</span>
                            <span>Sağlıklı & Lokal Her Şey Dahil</span>
                        </div>
                    </section>
                </div>

                <div className="min-w-[157px] min-h-[100px] *:xl:px-5 xl:py-6">
                    <section className="flex-shrink-0 flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-10">
                        <IconComponent name="discountBlue" alt="Mavi İndirim Görseli" className="size-[17px] xl:size-9" />
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col xl:flex-row xl:gap-1 font-semibold text-xs xl:text-xl text-customBlue3 text-nowrap">
                                <span>%20 Erken</span>
                                <span>Rezervasyon İndirimi</span>
                            </div>
                            <div className="w-full flex items-center justify-between text-[10px] xl:text-xs text-customBlue2">
                                <span>17.01.2024 - 02.11.2024</span>
                                <IoIosArrowForward className="xl:hidden size-3 text-customDark" />
                            </div>
                            <span className="hidden xl:block text-xs text-customDark/85">1 gece ve üzeri konaklamalarda geçerlidir.</span>
                        </div>
                    </section>
                    <div className="hidden xl:block !w-px h-48 bg-customDark2/85 !p-0"></div>
                    <section className="hidden xl:flex flex-col gap-2  min-w-[300px]">
                        <span className="text-xs text-customBlue3">Geçerli Oda Tipleri</span>
                        <div className="flex flex-col gap-1 *:text-xs *:text-customDark">
                            <span>Standart Oda</span>
                            <span>Aile Odası</span>
                            <span>Superior Oda</span>
                            <span>Family Suite</span>
                            <span>Lagoon Family Suites Tek Banyolu</span>
                            <span>Lagoon Family Deluxe Suites</span>
                            <span>Sedir Evleri Forest View</span>
                            <span>Sedir Evleri Lagoon View</span>
                            <span>Lagoon Family Suites Çift Banyolu</span>
                        </div>
                    </section>
                    <div className="hidden xl:block !w-px h-48 bg-customDark2/85 !p-0"></div>
                    <section className="hidden xl:flex flex-col gap-2">
                        <span className="text-xs text-customBlue3">Geçerli Olan Konseptler</span>
                        <div className="flex flex-col gap-1 *:text-xs *:text-customDark">
                            <span>Ultimate Her Şey Dahil</span>
                            <span>Yöresel & Sağlıklı Ultra Her Şey Dahil</span>
                            <span>Sağlıklı & Lokal Her Şey Dahil</span>
                        </div>
                    </section>
                </div>
            </div>
            <button className='flex items-center gap-1 text-xs text-customBlue3'>
                Tüm Kampanyaları İncele <IoIosArrowForward className='size-3' />
            </button>
        </section>
    )
}
