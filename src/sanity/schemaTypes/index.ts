import { type SchemaTypeDefinition } from 'sanity'
import { homepageType } from './homepage'
import { serviceType } from './service'
import { priceItemType } from './priceItem'
import { siteSettingsType } from './siteSettings'
import { galleryType } from './gallery'
import { regulationType } from './regulation'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [homepageType, serviceType, priceItemType, siteSettingsType, galleryType, regulationType],
}
