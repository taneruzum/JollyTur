import { IRoomCard } from "@/types/RoomCard";

const RoomCardData:IRoomCard[] = [
    {
        title: "Sadece Oda",
        features: [
            { text: "İptal Politikası", included: true },
            { text: "Yemek dahil değildir", included: false },
        ],
        info:"Misafirler bu odada temizliği beğendi",
        originalPrice: "87.004",
        discountedPrice: "70.243",
        discountRate: 20,
        nights: 6,
        installmentInfo: "Bonus Kart ile 9 Taksit x 1183,33 TL imkan",
        taxIncluded: "Tüm vergiler dahildir",
        buttonText: "Oda Seç"
    },
    {
        title: "Kahvaltı Dahil Oda",
        features: [
            { text: "İptal Politikası", included: true },
            { text: "Kahvaltı", included: true },
        ],
        info:"Misafirler bu odada temizliği beğendi",
        originalPrice: "94.657",
        discountedPrice: "75.643",
        discountRate: 20,
        nights: 6,
        installmentInfo: "Bonus Kart ile 9 Taksit x 1260,72 TL imkan",
        taxIncluded: "Tüm vergiler dahildir",
        buttonText: "Oda Seç"
    },
    {
        title: "Kahvaltı & Akşam Yemeği Dahil Oda",
        features: [
            { text: "İptal Politikası", included: true },
            { text: "Kahvaltı & Akşam Yemeği", included: true },
        ],
        info:"Misafirler bu odada temizliği beğendi",
        originalPrice: "94.900",
        discountedPrice: "76.112",
        discountRate: 20,
        nights: 6,
        installmentInfo: "Bonus Kart ile 9 Taksit x 1268,53 TL imkan",
        taxIncluded: "Tüm vergiler dahildir",
        buttonText: "Oda Seç"
    }
];

export default RoomCardData;
