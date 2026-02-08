import { type SchemaTypeDefinition } from 'sanity'
import { homepageType } from './homepage'
import { serviceType } from './service'
import { priceItemType } from './priceItem'
import { siteSettingsType } from './siteSettings'
import { galleryType } from './gallery'
import { regulationType } from './regulation'

import { corporatePageType } from './corporatePage'
import { inspectionPageType } from './inspectionPage'
import { priceListPageType } from './priceListPage'

import { certificateType } from './certificate'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [homepageType, serviceType, priceItemType, siteSettingsType, galleryType, regulationType, corporatePageType, inspectionPageType, priceListPageType, certificateType],
}
