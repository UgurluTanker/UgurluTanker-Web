import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'
import { projectId, dataset } from './src/sanity/env'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['homepage', 'siteSettings', 'corporatePage', 'inspectionPage', 'priceListPage'])

export default defineConfig({
    basePath: '/admin',
    projectId,
    dataset,

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('İçerik Yönetimi')
                    .items([
                        // Singleton: Ana Sayfa
                        S.listItem()
                            .title('Ana Sayfa')
                            .id('homepage')
                            .child(
                                S.document()
                                    .schemaType('homepage')
                                    .documentId('homepage')
                            ),
                        // Singleton: Site Ayarları
                        S.listItem()
                            .title('Site Ayarları')
                            .id('siteSettings')
                            .child(
                                S.document()
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                            ),
                        // Singleton: Kurumsal Sayfa
                        S.listItem()
                            .title('Kurumsal Sayfa')
                            .id('corporatePage')
                            .child(
                                S.document()
                                    .schemaType('corporatePage')
                                    .documentId('corporatePage')
                            ),
                        // Singleton: Muayene & Servis Sayfası
                        S.listItem()
                            .title('Muayene & Servis Sayfası')
                            .id('inspectionPage')
                            .child(
                                S.document()
                                    .schemaType('inspectionPage')
                                    .documentId('inspectionPage')
                            ),
                        // Singleton: Fiyat Listesi Sayfası
                        S.listItem()
                            .title('Fiyat Listesi Sayfası')
                            .id('priceListPage')
                            .child(
                                S.document()
                                    .schemaType('priceListPage')
                                    .documentId('priceListPage')
                            ),
                        S.divider(),
                        // Regular documents
                        ...S.documentTypeListItems().filter(
                            (listItem) => !singletonTypes.has(listItem.getId() as string)
                        ),
                    ]),
        }),
        visionTool(),
    ],

    schema: {
        types: schema.types,
        // Filter out singleton types from the global “New document” menu
        templates: (prev) =>
            prev.filter((template) => !singletonTypes.has(template.schemaType)),
    },

    document: {
        // For singleton types, filter out actions that are not explicitly allowed
        actions: (prev, { schemaType }) =>
            singletonTypes.has(schemaType)
                ? prev.filter(({ action }) => action && singletonActions.has(action))
                : prev,
    },
})
