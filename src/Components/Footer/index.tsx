import footer1 from '/Footer/footerImage1.png'
import footer2 from '/Footer/footerImage2.png'
import footer3 from '/Footer/footerImage3.png'

export default function Footer() {
    return (
        <footer className="w-full flex flex-col gap-1 *:w-full px-6 xl:px-[54px]">
            <img src={footer1} alt="Detaylar" />
            <img src={footer2} alt="Kampanyalar için bildirim" />
            <img src={footer3} alt="Ödeme ve bilgilendirmeler" />
        </footer>
    )
}
