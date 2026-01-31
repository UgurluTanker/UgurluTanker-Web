import { groq } from 'next-sanity'

export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroImages,
  quickActions[] {
    title,
    link,
    icon
  },
  stats[] {
    label,
    value
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
  logo,
  socialLinks,
  aboutUs,
  mission,
  vision,
  history
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
  requiredDocsTitle
}`

export const GALLERY_QUERY = groq`*[_type == "gallery"] | order(order asc, _createdAt desc) {
  title,
  category,
  image,
  description
}`

export const PRICE_LIST_QUERY = groq`*[_type == "priceItem"] | order(order asc, serviceName asc) {
  serviceName,
  onayKurulusuFee,
  muayeneMerkeziFee,
  totalFee,
  price,
  category,
  order
}`

export const REGULATION_QUERY = groq`*[_type == "regulation"] | order(order asc) {
  title,
  category,
  content[] {
    itemTitle,
    itemDescription,
    isCritical
  },
  order
}`
