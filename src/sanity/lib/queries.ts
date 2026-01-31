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
  iconImage,
  shortDescription,
  description,
  features,
  steps,
  requiredDocuments,
  mainImage
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
