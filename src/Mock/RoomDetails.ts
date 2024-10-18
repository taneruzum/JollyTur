import { IRoomDetails } from "@/types/RoomCard";


const RoomDetailsData: IRoomDetails[] = [
    {
        details: {
            title: "Standart Oda",
            bedType: "Çift Kişilik Yatak",
            view: "Bahçe Manzaralı",
            features: [
                { icon: "knife_spoon", text: "Sağlıklı & Local Her Şey Dahil" },
                { icon: "discount", text: "Erken Rezervasyon İndirimi" },
                { icon: "bell", text: "Oda Servisi" },
                { icon: "jakuzi", text: "Jakuzi" },
                { icon: "snow", text: "Klima" }
            ],
            additionalFeaturesText: "+ 8 Özellik"
        },
        pricings: [
            {
                title: "Sadece Oda",
                features: [
                    { text: "İptal Politikası", included: true },
                    { text: "Yemek dahil değildir", included: false }
                ],
                info: "Misafirler bu odada temizliği beğendi",
                originalPrice: 87.004,
                discountedPrice: 70.243,
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
                    { text: "Kahvaltı", included: true }
                ],
                info: "Misafirler bu odada temizliği beğendi",
                originalPrice: 87.960,
                discountedPrice: 70.643,
                discountRate: 20,
                nights: 6,
                installmentInfo: "Bonus Kart ile 9 Taksit x 1183,33 TL imkan",
                taxIncluded: "Tüm vergiler dahildir",
                buttonText: "Oda Seç"
            },
            {
                title: "Kahvaltı ve Akşam Yemeği Dahil Oda",
                features: [
                    { text: "İptal Politikası", included: true },
                    { text: "Kahvaltı & Akşam Yemeği", included: true }
                ],
                info: "Misafirler bu odada yemekleri beğendi",
                originalPrice: 88.456,
                discountedPrice: 71.004,
                discountRate: 20,
                nights: 6,
                installmentInfo: "Bonus Kart ile 9 Taksit x 1183,33 TL imkan",
                taxIncluded: "Tüm vergiler dahildir",
                buttonText: "Oda Seç"
            }
        ]
    },
    {
        details: {
            title: "Superior Oda",
            bedType: "Çift Kişilik Yatak",
            view: "Deniz Manzaralı",
            features: [
                { icon: "knife_spoon", text: "Sağlıklı & Local Her Şey Dahil" },
                { icon: "discount", text: "Erken Rezervasyon İndirimi" },
                { icon: "bell", text: "Oda Servisi" },
                { icon: "jakuzi", text: "Jakuzi" },
                { icon: "snow", text: "Klima" }
            ],
            additionalFeaturesText: "+ 8 Özellik"
        },
        pricings: [
            {
                title: "Sadece Oda",
                features: [
                    { text: "İptal Politikası", included: true },
                    { text: "Yemek dahil değildir", included: false }
                ],
                info: "Misafirler bu odada temizliği beğendi",
                originalPrice: 93.657,
                discountedPrice: 74.925,
                discountRate: 20,
                nights: 6,
                installmentInfo: "Bonus Kart ile 9 Taksit x 1248,75 TL imkan",
                taxIncluded: "Tüm vergiler dahildir",
                buttonText: "Oda Seç"
            },
            {
                title: "Kahvaltı Dahil Oda",
                features: [
                    { text: "İptal Politikası", included: true },
                    { text: "Kahvaltı", included: true }
                ],
                info: "Misafirler bu odada temizliği beğendi",
                originalPrice: 94.657,
                discountedPrice: 75.643,
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
                    { text: "Kahvaltı & Akşam Yemeği", included: true }
                ],
                info: "Misafirler bu odada yemekleri beğendi",
                originalPrice: 94.900,
                discountedPrice: 76.112,
                discountRate: 20,
                nights: 6,
                installmentInfo: "Bonus Kart ile 9 Taksit x 1268,53 TL imkan",
                taxIncluded: "Tüm vergiler dahildir",
                buttonText: "Oda Seç"
            }
        ]
    }
];

export default RoomDetailsData;
