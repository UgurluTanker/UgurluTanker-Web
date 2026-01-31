import type { Image } from "sanity"

export interface PriceItem {
    serviceName: string;
    onayKurulusuFee?: string;
    muayeneMerkeziFee?: string;
    totalFee: string;
    category?: string;
    order?: number;
}

export interface Regulation {
    title: string;
    category: string;
    content: Array<{
        itemTitle: string;
        itemDescription?: string;
        isCritical?: boolean;
    }>;
    order?: number;
}

export interface SiteSettings {
    companyName: string;
    address?: string;
    phone1?: string;
    phone2?: string;
    mobile?: string;
    fax?: string;
    email?: string;
    taxInfo?: string;
    logo?: Image;
    socialLinks?: Array<{
        platform: string;
        url: string;
    }>;
    aboutUs?: Image;
    mission?: string;
    vision?: string;
    history?: string;
}

export interface HomepageData {
    heroTitle: string;
    heroSubtitle?: string;
    heroImages: Image[];
    stats?: Array<{
        label: string;
        value: string;
    }>;
}
