import type { Image, PortableTextBlock } from "sanity"

export interface PriceItem {
    serviceName: string;
    approvalFee?: string;
    centerFee?: string;
    totalPrice?: string;
    onayKurulusuFee?: string;
    muayeneMerkeziFee?: string;
    totalFee?: string;
    price?: string;
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
    facebookUrl?: string;
    instagramUrl?: string;
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
    heroSlides?: Array<{
        title: string;
        subtitle?: string;
        image: Image;
    }>;
    stats?: Array<{
        label: string;
        value: string;
    }>;
}

export interface Service {
    title: string;
    slug: { current: string };
    icon?: string;
    iconName?: string;
    iconImage?: Image;
    color?: string;
    shortDescription?: string;
    description?: PortableTextBlock[];
    features?: string[];
    steps?: Array<{
        title: string;
        description: string;
    }>;
    requiredDocuments?: string[];
    mainImage?: Image;
}

export interface CorporatePageData {
    heroTitle: string;
    heroSubtitle?: string;
    mainHistoryTitle?: string;
    mainHistoryContent?: PortableTextBlock[];
    mainImage?: Image;
    quoteText?: string;
    missionTitle?: string;
    missionContent?: string;
    visionTitle?: string;
    visionContent?: string;
    coreValues?: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
}

export interface InspectionPageData {
    heroBadge?: string;
    heroTitle: string;
    heroSubtitle?: string;
    whyChooseUs?: {
        title: string;
        description: string;
        points: string[];
    };
    mainImage?: Image;
    features?: Array<{
        icon: string;
        title: string;
        description: string;
        color: string;
    }>;
    adrGuide?: {
        badge: string;
        title: string;
    };
    technicalSupport?: {
        heading: string;
        description: string;
        scopeLabel: string;
        scopeContent: string;
    };
    operations?: {
        badge: string;
        title: string;
        items: Array<{
            number: string;
            title: string;
            description: string;
            subItems: string[];
        }>;
    };
    operationAlertText?: string;
    requiredDocsBadge?: string;
    requiredDocsTitle?: string;
    requiredDocsSection?: {
        badge: string;
        title: string;
        content: PortableTextBlock[];
    };
}

export interface PriceListPageData {
    badge: string;
    headerTitle: string;
    description: string;
}
