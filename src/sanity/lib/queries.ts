import { groq } from 'next-sanity'

export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroImages,
  heroSlides[] {
    title,
    subtitle,
    image
  },
  quickActions[] {
    title,
    link,
    icon
  },
  stats[] {
    label,
    value
  },
  "featuredServices": featuredServices[]-> {
    title,
    slug,
    iconName,
    shortDescription
  }
}`

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]{
  companyName,
  address,
  phone1,
  phone2,
  mobile,
  fax,
  email,
  taxInfo,
  facebookUrl,
  instagramUrl,
  logo,
  workingHours,
  socialLinks,
  aboutUs,
  mission,
  vision,
  history,
  authorizationCertificate
}`

export const SERVICES_QUERY = groq`*[_type == "service"] | order(title asc) {
  title,
  slug,
  icon,
  iconName,
  iconImage,
  color,
  shortDescription,
  description,
  features,
  steps,
  requiredDocuments,
  mainImage
}`

export const CORPORATE_PAGE_QUERY = groq`*[_type == "corporatePage"][0]{
  heroTitle,
  heroSubtitle,
  mainHistoryTitle,
  mainHistoryContent,
  mainImage,
  quoteText,
  missionTitle,
  missionContent,
  visionTitle,
  visionContent,
  coreValues[] {
    icon,
    title,
    description
  }
}`

export const INSPECTION_PAGE_QUERY = groq`*[_type == "inspectionPage"][0]{
  heroBadge,
  heroTitle,
  heroSubtitle,
  whyChooseUs {
    title,
    description,
    points
  },
  mainImage,
  features[] {
    icon,
    title,
    description,
    color
  },
  adrGuide {
    badge,
    title
  },
  technicalSupport {
    heading,
    description,
    scopeLabel,
    scopeContent
  },
  operations {
    badge,
    title,
    items[] {
      number,
      title,
      description,
      subItems
    }
  },
  operationAlertText,
  requiredDocsBadge,
  requiredDocsTitle,
  requiredDocsSection {
    badge,
    title,
    content
  }
}`

export const GALLERY_QUERY = groq`*[_type == "gallery"] | order(order asc, _createdAt desc) {
  title,
  category,
  image,
  description
}`

export const PRICE_LIST_QUERY = groq`*[_type == "priceItem"] | order(order asc, serviceName asc) {
  serviceName,
  approvalFee,
  centerFee,
  totalPrice,
  onayKurulusuFee,
  muayeneMerkeziFee,
  totalFee,
  price,
  category,
  order
}`

export const PRICE_LIST_PAGE_QUERY = groq`*[_type == "priceListPage"][0]{
  badge,
  headerTitle,
  description,
  "pdfUrl": pdfFile.asset->url
}`

export const REGULATION_QUERY = groq`* [_type == "regulation"] | order(order asc) {
  title,
    category,
    content[] {
    itemTitle,
      itemDescription,
      isCritical
  },
  order
} `
