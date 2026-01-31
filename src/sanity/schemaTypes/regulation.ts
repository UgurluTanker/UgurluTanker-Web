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
                    { title: 'Gerekli Evraklar (Genel)', value: 'documents_general' },
                    { title: 'Gerekli Evraklar (Eski Tanklar)', value: 'documents_old_tanks' },
                    { title: 'Gerekli Evraklar (ADR T9)', value: 'documents_t9' },
                    { title: 'Gerekli Evraklar (ADR T9 - Periyodik)', value: 'documents_t9_periodic' },
                    { title: 'Gerekli Evraklar (Taşıt Uygunluk)', value: 'documents_transport' },
                    { title: 'Gerekli Evraklar (Taşıt Uygunluk - Periyodik)', value: 'documents_transport_periodic' },
                    { title: 'Gerekli Evraklar (Eski Tanklar - Periyodik)', value: 'documents_old_tanks_periodic' },
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
                        { name: 'itemTitle', type: 'string', title: 'Belge Adı / Madde' },
                        { name: 'itemDescription', type: 'text', title: 'Açıklama (Opsiyonel)' },
                        { name: 'isCritical', type: 'boolean', title: 'Kritik mi?', initialValue: false },
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
