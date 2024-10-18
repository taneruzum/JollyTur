import { useState } from 'react'
import { Tabs } from '@mantine/core';
import classes from './tabs.module.css'
import { IoIosArrowForward } from "react-icons/io";
import SwiperComp from '../HeroSection/swiper';
import ChooseRoomSection from './ChooseRoom';
import IconComponent from '@/Components/Icons/IconComponent';


export default function TabsComponent() {
    const [activeTab, setActiveTab] = useState<string | null>('general');

    return (
        <section className='w-full flex flex-col gap-4 '>
            {/**For Mobile */}
            <section className='xl:hidden w-full flex flex-col gap-2'>
                <h2 className='text-customBlue2 text-base font-semibold'>Nirvana Mediterranean Excellence</h2>
                <div className='flex items-center gap-2'>
                    <div className='px-2 py-[1px] bg-customGreen2 rounded-[3px] text-customGreen text-xs'>
                        4.5
                    </div>
                    <span className='text-customBlue2 text-xs font-semibold'>
                        +1200 Değerlendirme
                    </span>
                </div>
            </section>
            <Tabs
                value={activeTab}
                onChange={setActiveTab}
                className='flex flex-col gap-2'
                classNames={{
                    tab: "!text-xs !px-2",
                    list: "",
                    panel: "!flex xl:!gap-7 xl:!justify-between"
                }}
            >
                <Tabs.List className='flex w-full grow xl:grow-0'>
                    <Tabs.Tab value="general" className={classes.tab}>Genel Bakış</Tabs.Tab>
                    <Tabs.Tab value="possibilities" className={classes.tab}>Olanaklar</Tabs.Tab>
                    <Tabs.Tab value="rooms" className={classes.tab}>Odalar</Tabs.Tab>
                    <Tabs.Tab value="promotions" className={classes.tab}>Kampanyalar</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="general">
                    <div className='mt-4 max-w-[632px] flex flex-col gap-4'>
                        <section className='hidden w-full xl:flex flex-col gap-2'>
                            <h2 className='text-customBlue2 text-base font-semibold xl:text-2xl'>Nirvana Mediterranean Excellence</h2>
                            <div className='flex items-center gap-2'>
                                <div className='px-2 py-1 bg-customGreen2 rounded-[3px] text-customGreen text-xs xl:text-sm'>
                                    4.5
                                </div>
                                <span className='font-semibold text-customBlue2 text-xs xl:text-sm'>
                                    +1200 Değerlendirme
                                </span>
                            </div>
                        </section>
                        <section className='max-w-[526px] w-full flex justify-around py-4 px-1 bg-customBlue4 rounded-[6px]'>
                            <IconComponent name="star" alt="Yıldız İkonu" className='size-3.5 text-black' />
                            <span className="font-semibold text-xs text-customBlue2 block xl:hidden">
                                Her şey dahil bu tatil ile kendinizi şımartın
                            </span>
                            <span className=" font-semibold text-xs text-customBlue2 hidden xl:block">
                                Her şey dahil bu tatil ile kendinizi şımartmanın büyülü dünyasını keşfedin.
                            </span>
                            <IconComponent name="star" alt="Yıldız İkonu" className='size-3.5 text-black' />
                        </section>

                        <section className='max-w-[440px] w-full flex flex-col gap-3'>
                            <h3 className='font-semibold text-customBlue2 text-xs xl:text-base '>Olanaklar</h3>
                            <div className='w-full grid grid-cols-2 gap-3 *:flex *:items-center *:text-xs *:text-customDark *:gap-3'>
                                <span>
                                    <IconComponent name="waves" className='w-5 h-3' />
                                    Denize Sıfır
                                </span>
                                <span>
                                    <IconComponent name="bell" className='w-5 h-4' />
                                    A La Carte Restorant
                                </span>
                                <span>
                                    <IconComponent name="spa" className='w-4 h-4' />
                                    Spa
                                </span>
                                <span>
                                    <IconComponent name="beach" className='w-4 h-4' />
                                    Özel Plaj
                                </span>
                                <span>
                                    <IconComponent name="bar" className='w-4 h-4' />
                                    Bar
                                </span>
                                <span>
                                    <IconComponent name="pets" className='w-4 h-4' />
                                    Evcil Hayvan
                                </span>
                            </div>
                            <button className='xl:hidden flex items-center gap-2 text-[10px] text-customBlue3'>
                                Daha Fazla <IoIosArrowForward className='size-2.5' />
                            </button>
                            <button className='hidden xl:flex items-center gap-2 text-[10px] text-customBlue3'>
                                Tüm Olanakları Gör <IoIosArrowForward className='size-2.5' />
                            </button>
                        </section>

                        <section className='flex flex-col gap-3'>
                            <h3 className='font-semibold text-customBlue2 text-xs xl:text-base'>Otel Bilgileri</h3>
                            <p className='text-xs text-customDark font-light'>
                                Kemer’de aradığınız o mükemmel tatilin adresi Nirvana Mediterranean Excellence, Görkemli manzarası, denize sıfır plajı ve ayrıcalıklı Nirvana Mediterranean Excellence sedir evleri ile tatil hiç bu kadar güzel olmamıştı...
                            </p>
                            <button className='flex items-center gap-2 text-[10px] xl:text-xs text-customBlue3'>
                                Daha Fazla <IoIosArrowForward className='size-2.5' />
                            </button>
                        </section>
                        <div className='block xl:hidden'>
                            <ChooseRoomSection />
                        </div>
                    </div>
                    <div className='hidden xl:block'>
                        <SwiperComp />
                    </div>
                </Tabs.Panel>
                <div className='hidden xl:block'>
                    <ChooseRoomSection />
                </div>
            </Tabs>
        </section>
    )
}
