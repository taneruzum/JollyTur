export interface IFeature {
    text: string;
    included: boolean;
}

export interface IRoomCard {
    title: string;
    features: IFeature[];
    info: string;
    originalPrice: string;
    discountedPrice: string;
    discountRate: number;
    nights: number;
    installmentInfo: string;
    taxIncluded: string;
    buttonText: string;
}