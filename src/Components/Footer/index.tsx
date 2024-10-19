import footer1 from '/Footer/footerImage1.png'
import footer2 from '/Footer/footerImage2.png'
import footer3 from '/Footer/footerImage3.png'
import footerDesktop from '/Footer/footerImageDesktop.png'
import brands from '/Footer/brandsImage.png'
import subs from '/Footer/subscribeImage.png'

export default function Footer() {
    return (
        <footer className="w-full ">
            <section className='px-6 xl:px-[54px] xl:hidden flex flex-col gap-1 *:w-full'>
                <img src={footer1} alt="Detaylar" />
                <img src={footer2} alt="Kampanyalar için bildirim" />
                <img src={footer3} alt="Ödeme ve bilgilendirmeler" />
            </section>
            <section className='hidden xl:flex flex-col gap-1 *:w-full'>
                <img src={subs} alt="Haberdar Olmak için" />
                <img src={footerDesktop} alt="Laptop+ Footer" />
                <img src={brands} alt="Markalar" />
            </section>
        </footer>
    )
}
