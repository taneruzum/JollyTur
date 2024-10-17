import { discount_blue } from '@/Constants/icons'
import { IoIosArrowForward } from 'react-icons/io'

export default function PromotionsSection() {

    return (
        <section className="flex flex-col gap-3">
            <h3 className='font-semibold text-sm text-customBlue2'>Kampanyalar</h3>
            <div className="w-full flex flex-row items-center justify-between gap-4 *:w-full">
                <div className=" min-w-[164px] flex flex-col gap-1.5 pl-4 p-2 py border border-customDark2/85 rounded-[6px]">
                    <img src={discount_blue} alt="Mavi İndirim Görseli" className='size-[17px]' />
                    <div className='flex flex-col font-semibold text-xs text-customBlue3'>
                        <span>%20 Erken</span>
                        <span>Rezervasyon İndirimi</span>
                    </div>
                    <div className='w-full flex items-center justify-between text-[10px] text-customBlue2'>
                        <span>25.04.2024 - 02.11.2024</span> <IoIosArrowForward className='size-3 text-customDark'/>
                    </div>
                </div>

                <div className=" min-w-[158px] flex flex-col gap-1.5 pl-4 p-2 py border border-customDark2/85 rounded-[6px]">
                    <img src={discount_blue} alt="Mavi İndirim Görseli" className='size-[17px]' />
                    <div className='flex flex-col font-semibold text-xs text-customBlue3'>
                        <span>%35 Erken</span>
                        <span>Rezervasyon İndirimi</span>
                    </div>
                    <div className='w-full flex items-center justify-between text-[10px] text-customBlue2'>
                        <span>17.10.2024 - 02.11.2024</span> <IoIosArrowForward className='size-3 text-customDark'/>
                    </div>
                </div>
            </div>
            <button className='flex items-center gap-1 text-xs text-customBlue3'>
                Tüm Kampanyaları İncele <IoIosArrowForward className='size-3' />
            </button>
        </section>
    )
}
