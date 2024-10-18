import iconsPack from "@/Components/Icons/icon";


export interface IFeature {
    text: string;
    included: boolean;
}

export interface IRoomPricingCard {
    title: string;
    features: IFeature[];
    info: string;
    originalPrice: number;
    discountedPrice: number;
    discountRate: number;
    nights: number;
    installmentInfo: string;
    taxIncluded: string;
    buttonText: string;
}
export interface IRoomDetail {
    title: string;
    bedType: string;
    view: string;
    features: {
        icon:  keyof typeof iconsPack;
        text: string;
    }[];
    additionalFeaturesText: string;
}
export interface IRoomDetails{
    details:IRoomDetail
    pricings:IRoomPricingCard[]
}
