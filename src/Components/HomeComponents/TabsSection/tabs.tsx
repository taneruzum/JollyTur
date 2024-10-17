import { useState } from 'react'
import { Tabs } from '@mantine/core';
import classes from './tabs.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { bar, beach, bell, date, person, pets, spa, star, waves } from '@/Constants/icons';


export default function TabsComponent() {
    const [activeTab, setActiveTab] = useState<string | null>('general');
    return (
        <>
            <Tabs
                value={activeTab}
                onChange={setActiveTab}
                classNames={{
                    tab: "!text-xs !px-2",
                    panel: "!mt-4 !flex !flex-col !gap-4"
                }}
            >
                <Tabs.List grow justify="space-between">
                    <Tabs.Tab value="general" className={classes.tab}>Genel Bakış</Tabs.Tab>
                    <Tabs.Tab value="possibilities" className={classes.tab}>Olanaklar</Tabs.Tab>
                    <Tabs.Tab value="rooms" className={classes.tab}>Odalar</Tabs.Tab>
                    <Tabs.Tab value="promotions" className={classes.tab}>Kampanyalar</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="general">
                    <section className='flex justify-around py-2 px-1 bg-customBlue4 rounded-[6px]'>
                        <img src={star} alt="Yıldız İkonu" className='size-3.5 text-black' />
                        <span className='font-semibold text-xs text-customBlue2'>Her şey dahil bu tatil ile kendinizi şımartın</span>
                        <img src={star} alt="Yıldız İkonu" className='size-3.5 text-black' />
                    </section>

                    <section className='w-full flex flex-col gap-3'>
                        <h3 className='font-semibold text-xs text-customBlue2'>Olanaklar</h3>
                        <div className='w-full grid grid-cols-2 gap-3 *:flex *:items-center *:text-xs *:text-customDark *:gap-3'>
                            <span>
                                <img src={waves} alt="Dalga İkonu" className='w-5 h-3' />
                                Denize Sıfır
                            </span>
                            <span>
                                <img src={bell} alt="Dalga İkonu" className='w-5 h-4' />
                                A La Carte Restorant
                            </span>
                            <span>
                                <img src={spa} alt="Dalga İkonu" className='w-4 h-4' />
                                Spa
                            </span>
                            <span>
                                <img src={beach} alt="Dalga İkonu" className='w-4 h-4' />
                                Özel Plaj
                            </span>
                            <span>
                                <img src={bar} alt="Dalga İkonu" className='w-4 h-4' />
                                Bar
                            </span>
                            <span>
                                <img src={pets} alt="Dalga İkonu" className='w-4 h-4' />
                                Evcil Hayvan
                            </span>
                        </div>
                        <button className='flex items-center gap-2 text-[10px] text-customBlue3'>
                            Daha Fazla <IoIosArrowForward className='size-2.5' />
                        </button>
                    </section>

                    <section className='flex flex-col gap-3'>
                        <h3 className='font-semibold text-xs text-customBlue2'>Otel Bilgileri</h3>
                        <p className='text-xs text-customDark font-light'>
                            Kemer’de aradığınız o mükemmel tatilin adresi Nirvana Mediterranean Excellence, Görkemli manzarası, denize sıfır plajı ve ayrıcalıklı Nirvana Mediterranean Excellence sedir evleri ile tatil hiç bu kadar güzel olmamıştı...
                        </p>
                        <button className='flex items-center gap-2 text-[10px] text-customBlue3'>
                            Daha Fazla <IoIosArrowForward className='size-2.5' />
                        </button>
                    </section>

                    <section className='flex flex-col gap-3'>
                        <h3 className='font-semibold text-sm text-customBlue2'>Odanı Seç</h3>
                        <div className='flex justify-between gap-3 *:w-full *:rounded-[6px] *:border *:border-customDark2 *:pl-4 *:pr-12 *:py-2'>
                            <div className='flex items-center gap-4'>
                                <img src={date} alt="" className='w-[18px] h-[20px]' />
                                <div className='flex flex-col gap-0 text-xs'>
                                    <span className='text-customBlue2'>Giriş Tarihi</span>
                                    <span className='text-customDark'>08/10/2024</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={date} alt="" className='w-[18px] h-[20px]' />
                                <div className='flex flex-col gap-0 text-xs'>
                                    <span className='text-customBlue2'>Çıkış Tarihi</span>
                                    <span className='text-customDark'>08/10/2024</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex items-center gap-4 rounded-[6px] border border-customDark2 pl-4 pr-12 py-2'>
                            <img src={person} alt="" className='w-[18px] h-[20px]' />
                            <div className='flex flex-col gap-0 text-xs'>
                                <span className='text-customBlue2'>Misafir</span>
                                <span className='text-customDark'>1 Oda 2 Kişi</span>
                            </div>
                        </div>
                        <button className='w-full text-white text-center uppercase font-semibold bg-customBlue3 py-3 rounded-[6px]' >Güncelle</button>
                    </section>
                </Tabs.Panel>
            </Tabs>
        </>
    )
}
