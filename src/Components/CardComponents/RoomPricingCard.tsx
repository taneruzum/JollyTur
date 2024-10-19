import { IFeature, IRoomPricingCard } from '@/types/RoomCard';
import IconComponent from '../Icons/IconComponent';

interface IRoomCardProps {
    data: IRoomPricingCard;
}

export default function RoomPricingCard({ data }: IRoomCardProps) {

    return (
        <div className="w-full flex flex-col gap-6 xl:gap-4 border border-customDark2/85 rounded-[10px] p-6">
            <section className="flex flex-col gap-4 xl:gap-2">
                <h4 className="text-sm font-semibold xl:h-14 xl:text-xl">{data.title}</h4>
                <div className='flex flex-col gap-3'>
                    {data.features.map((feature: IFeature, i: number) => (
                        <div key={i} className='flex items-center gap-2'>
                            <IconComponent name={feature.included ? "check" : "redX"} className='size-2.5' />
                            <span className='text-customDark3 text-xs'>{feature.text}</span>
                        </div>
                    ))}
                    <div className='w-full rounded-[3px] px-5 py-2 bg-customBlue4 text-xs font-light'>
                        {data.info}
                    </div>
                </div>
            </section>
            <section className='w-full flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <span className='text-[10px] text-customDark'>{data.nights} Gece</span>
                    <div className='w-fit rounded-[2.5px] bg-customGreen3 text-center px-2 py-1 text-white text-[11px]'>
                        %{data.discountRate} İndirim
                    </div>
                    <span className='text-xs text-customDark font-light line-through'> {data.originalPrice.toLocaleString()} TL</span>
                </div>
                <span className='text-lg font-semibold text-customBlue2 xl:text-2xl'> {data.discountedPrice.toLocaleString()} TL</span>
                <span className='text-[10px] font-light'>Tüm vergiler dahildir</span>
                <span className='text-[10px] font-light'>Bonus Kart ile 9 Taksit x  {(data.discountedPrice / 9).toLocaleString()} TL imkan</span>
            </section>
            <button className="w-full py-2 bg-customBlue3 text-sm text-center text-white font-bold rounded-[6px]">
                {data.buttonText}
            </button>
        </div>
    )
}
