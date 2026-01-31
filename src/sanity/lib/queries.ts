import { groq } from 'next-sanity'

export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroImages,
  quickActions[] {
    title,
    link,
    icon
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
  socialLinks
}`

export const SERVICES_QUERY = groq`*[_type == "service"] | order(title asc) {
  title,
  slug,
  icon,
  iconImage,
  description,
  mainImage
}`

export const PRICE_LIST_QUERY = groq`*[_type == "priceItem"] | order(category asc, serviceName asc) {
  serviceName,
  price,
  category
}`
