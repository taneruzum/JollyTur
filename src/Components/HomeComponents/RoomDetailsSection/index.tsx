import RoomDetails from "@/Components/RoomDetails";
import RoomDetailsData from '@/Mock/RoomDetails';
import { IRoomDetails } from "@/types/RoomCard";

export default function RoomDetailsSection() {
    return (
        <section className='flex flex-col gap-10 xl:max-w-[966px]'>
            {RoomDetailsData.map((roomDetails: IRoomDetails, index: number) => (
                <RoomDetails key={index} data={roomDetails} />
            ))}
            <button
                className='xl:w-fit w-full px-12 py-2 border border-customBlue3 rounded-[6px] text-sm text-customBlue3 font-semibold'
            >
                + 4 Oda Tipi Daha Gör
            </button>
        </section>
    )
}
