import { defineField, defineType } from 'sanity'

export const regulationType = defineType({
    name: 'regulation',
    title: 'Mevzuat & Kurallar',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Başlık',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'ADR Muayene Takvimi', value: 'adr_schedule' },
                    { title: 'Gerekli Evraklar', value: 'documents' },
                    { title: 'Genel Mevzuat', value: 'general' },
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'İçerik Listesi',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'itemTitle', type: 'string', title: 'Madde Başlığı' },
                        { name: 'itemDescription', type: 'text', title: 'Açıklama' },
                    ]
                }
            ]
        }),
        defineField({
            name: 'order',
            title: 'Görüntüleme Sırası',
            type: 'number',
        }),
    ],
})
