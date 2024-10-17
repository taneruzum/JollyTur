import { IHotelData } from "@/types/LastViewed";
import image1 from '/LastViewedHotels/image1.png'
import image2 from '/LastViewedHotels/image2.png'
import image3 from '/LastViewedHotels/image3.png'
import image4 from '/LastViewedHotels/image4.png'

export const LastViewedHotelsData: IHotelData[] = [
    {
        imageUrl:image1 ,
        name: "White City Resort Hotel & Spa",
        location: "Antalya / Alanya / Avsallar",
        packageType: "Ultra Her Şey Dahil",
        dateRange: "22 Eki - 27 Eki",
        nightCount: "5 Gece İçin",
        price: "98.340 TL",
    },
    {
        imageUrl:image2 ,
        name: "Serenity Queen Hotel",
        location: "Antalya / Alanya / Konaklı",
        packageType: "Ultra Her Şey Dahil",
        dateRange: "08 Tem - 11 Eki",
        nightCount: "3 Gece İçin",
        price: "39.137 TL",
    },
    {
        imageUrl:image3 ,
        name: "Selfie Cave Hotels Cappadocia",
        location: "Nevşehir / Kapadokya / Uçhisar",
        packageType: "Oda Kahvaltı",
        dateRange: "22 Eki - 27 Eki",
        nightCount: "5 Gece İçin",
        price: "98.340 TL",
    },
    {
        imageUrl:image4 ,
        name: "Concorde Luxury Resort & Casino & Convention & SPA",
        location: "Bafra",
        packageType: "Ultra Her Şey Dahil",
        dateRange: "14 Oca - 24 Oca",
        nightCount: "10 Gece İçin",
        price: "110.000 TL",
    },
];