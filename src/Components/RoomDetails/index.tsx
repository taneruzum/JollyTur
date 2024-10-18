import standartImage from '/HeroSection/Standart/standart_room.png'
import RoomPricingCard from '@/Components/CardComponents/RoomPricingCard'
import { IRoomDetails, IRoomPricingCard } from '@/types/RoomCard';
import IconComponent from '../Icons/IconComponent';

interface IRoomDetailsProps {
    data: IRoomDetails;
}

export default function RoomDetails({ data }: IRoomDetailsProps) {
    return (
        <div className='w-full flex flex-col gap-8'>
            <section className='flex flex-col gap-4 xl:flex-row'>
                <div className='hidden xl:block relative max-w-[306px] overflow-hidden rounded-[9.75px]'>
                    <img src={standartImage} alt="Standart Oda Resmi" className='w-full object-cover object-center aspect-auto' />
                </div>
                <section className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 '>
                        <h3 className='font-semibold text-sm xl:text-xl text-customBlue2'>{data.details.title}</h3>
                        <div className='flex items-center gap-4 text-[11px] xl:text-xs text-customDark font-semibold'>
                            <span>{data.details.bedType}</span>
                            <div className='size-[4.75px] rounded-full bg-customDark' />
                            <span>{data.details.view}</span>
                        </div>
                    </div>
                    <div className='xl:hidden relative w-full overflow-hidden rounded-[9.75px]'>
                        <img src={standartImage} alt="Standart Oda Resmi" className='w-full object-cover object-center aspect-[327/160]' />
                    </div>
                    <div className='xl:mt-4 w-full grid grid-cols-2 xl:grid-cols-3 gap-x-28 xl:gap-x-20 gap-y-4 text-xs font-semibold'>
                        {data.details.features.map((feature, index) => {
                            // Bell ikonu için durum
                            if (feature.icon === 'bell') {
                                return (
                                    <div key={index} className='xl:flex gap-2.5 text-customBlue2 text-nowrap hidden'>
                                        <IconComponent name={feature.icon} alt={`${feature.text} İkonu`} className='size-4' />
                                        <span>{feature.text}</span>
                                    </div>
                                );
                            }

                            // Discount ikonu için durum
                            if (feature.icon === 'discount') {
                                return (
                                    <div key={index} className={`flex gap-2.5 text-customBlue2 text-nowrap col-start-1 row-start-2 xl:col-start-2 xl:row-start-1 `}>
                                        <IconComponent name={feature.icon} alt={`${feature.text} İkonu`} className='size-4' />
                                        <span>{feature.text}</span>
                                    </div>
                                );
                            }

                            // Diğer özellikler için durum
                            return (
                                <div key={index} className='flex gap-2.5 text-customBlue2 text-nowrap'>
                                    <IconComponent name={feature.icon} alt={`${feature.text} İkonu`} className='size-4' />
                                    <span>{feature.text}</span>
                                </div>
                            );
                        })}
                        <button className='hidden xl:flex text-start font-semibold text-xs !text-customBlue3'>
                            + 8 Özellik
                        </button>
                    </div>
                    <button className='xl:hidden block text-start font-light text-xs text-customBlue3'>
                        Tüm Özellikler
                    </button>
                </section>
            </section>
            <div className="w-full flex flex-col gap-6 xl:flex-row">
                {data.pricings.map((room: IRoomPricingCard, index: number) => (
                    <RoomPricingCard key={index} data={room} />
                ))}
            </div>
        </div>
    );
}

