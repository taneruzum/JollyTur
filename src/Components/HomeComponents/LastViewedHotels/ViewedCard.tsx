import { IHotelData } from "@/types/LastViewed";
import { location_outline } from '@/Constants/icons'

export default function ViewedCard({ data }: { data: IHotelData }) {
    return (
        <div className="h-[360px] flex flex-col justify-between gap-5 p-2.5 border border-customDark2/85 rounded-lg">
            <section className="flex flex-col gap-2">
                <img src={data.imageUrl} alt={data.name} className="aspect-[246/153] rounded-lg object-cover object-center" />
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm text-customBlue2 font-semibold">{data.name}</h4>
                    <span className="flex items-center gap-2 text-[11px] text-customBlue">
                        <img src={location_outline} alt="Konum İkonu" className="w-2 h-3 mb-0.5" /> {data.location}</span>
                    <span className="text-[11px] text-customBlue2">{data.packageType}</span>
                </div>
            </section>
            <section className="w-full pl-2 pr-6 py-2 flex items-center justify-between bg-customDark4 rounded-md">
                <div className="flex flex-col">
                    <span className="text-[8px]">{data.dateRange}</span>
                    <span className="text-[10px]">{data.nightCount}</span>
                </div>
                <span className="text-sm text-customGreen font-semibold">{data.price}</span>
            </section>
        </div>
    )
}
