import { defineField, defineType } from 'sanity'

export const corporatePageType = defineType({
    name: 'corporatePage',
    title: 'Kurumsal Sayfası',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Başlık',
            type: 'string',
            initialValue: 'Hakkımızda',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Alt Başlık',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'mainHistoryTitle',
            title: 'Tarihçe Başlığı',
            type: 'string',
        }),
        defineField({
            name: 'mainHistoryContent',
            title: 'Tarihçe İçeriği',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'mainImage',
            title: 'Ana Görsel',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'quoteText',
            title: 'Alıntı/Slogan',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'missionTitle',
            title: 'Misyon Başlığı',
            type: 'string',
            initialValue: 'MİSYONUMUZ',
        }),
        defineField({
            name: 'missionContent',
            title: 'Misyon İçeriği',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'visionTitle',
            title: 'Vizyon Başlığı',
            type: 'string',
            initialValue: 'VİZYONUMUZ',
        }),
        defineField({
            name: 'visionContent',
            title: 'Vizyon İçeriği',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'coreValues',
            title: 'Temel Değerlerimiz',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'icon', type: 'string', title: 'İkon Adı (Lucide)' },
                        { name: 'title', type: 'string', title: 'Başlık' },
                        { name: 'description', type: 'text', title: 'Açıklama', rows: 2 },
                    ],
                },
            ],
        }),
    ],
})
