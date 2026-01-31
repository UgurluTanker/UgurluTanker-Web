import { type SchemaTypeDefinition } from 'sanity'
import { homepageType } from './homepage'
import { serviceType } from './service'
import { priceItemType } from './priceItem'
import { siteSettingsType } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [homepageType, serviceType, priceItemType, siteSettingsType],
}
