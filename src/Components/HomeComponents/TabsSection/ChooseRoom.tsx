import IconComponent from "@/Components/Icons/IconComponent";



export default function ChooseRoomSection() {
    return (
        <section className='xl:mt-10 flex flex-col gap-3'>
            <h3 className='font-semibold text-sm text-customBlue2 xl:text-2xl'>Odanı Seç</h3>
            <div className='w-full flex flex-wrap justify-between gap-3 xl:flex-nowrap xl:gap-6 *:rounded-[6px] *:border *:border-customDark2 *:pl-4 *:pr-10 *:py-2 xl:*:py-3.5'>
                <div className='xl:w-full flex items-center gap-4'>
                    <IconComponent name="date" alt="Takvim İkonu" className='w-[18px] h-[20px] xl:w-[19px] xl:h-[21px]' />
                    <div className='flex flex-col gap-0 text-xs'>
                        <span className='text-customBlue2'>Giriş Tarihi</span>
                        <span className='text-customDark xl:text-sm'>08/10/2024</span>
                    </div>
                </div>
                <div className='xl:w-full flex items-center gap-4'>
                    <IconComponent name="date" alt="Takvim İkonu" className='w-[18px] h-[20px] xl:w-[19px] xl:h-[21px]' />
                    <div className='flex flex-col gap-0 text-xs'>
                        <span className='text-customBlue2'>Çıkış Tarihi</span>
                        <span className='text-customDark xl:text-sm'>08/10/2024</span>
                    </div>
                </div>
                <div className='w-full flex items-center gap-4 rounded-[6px] border border-customDark2 pl-4 pr-12'>
                <IconComponent name="person" alt="Kişi İkonu" className='w-[18px] h-[20px] xl:w-[19px] xl:h-[21px]' />
                    <div className='flex flex-col gap-0 text-xs'>
                        <span className='text-customBlue2'>Misafir</span>
                        <span className='text-customDark xl:text-sm'>1 Oda 2 Kişi</span>
                    </div>
                </div>
                <button className='w-full text-white text-center uppercase font-semibold bg-customBlue3 !py-3 rounded-[6px]' >Güncelle</button>
            </div>
        </section>
    )
}
