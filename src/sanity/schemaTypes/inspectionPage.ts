import { defineField, defineType } from 'sanity'

export const inspectionPageType = defineType({
    name: 'inspectionPage',
    title: 'Muayene & Servis Sayfası',
    type: 'document',
    fields: [
        defineField({
            name: 'heroBadge',
            title: 'Hero Rozet',
            type: 'string',
            initialValue: 'TEKNİK MÜKEMMELİYET',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Hero Başlık',
            type: 'string',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Alt Başlık',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'whyChooseUs',
            title: 'Neden Biz?',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Başlık' },
                { name: 'description', type: 'text', title: 'Açıklama', rows: 3 },
                {
                    name: 'points',
                    type: 'array',
                    title: 'Maddeler',
                    of: [{ type: 'string' }],
                },
            ],
        }),
        defineField({
            name: 'mainImage',
            title: 'Ana Görsel',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'features',
            title: 'Özellik Kartları',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'icon', type: 'string', title: 'İkon Adı (Lucide)' },
                        { name: 'title', type: 'string', title: 'Başlık' },
                        { name: 'description', type: 'text', title: 'Açıklama', rows: 2 },
                        { name: 'color', type: 'string', title: 'Renk Sınıfı (Tailwind)', description: 'Örn: text-primary, text-blue-600' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'adrGuide',
            title: 'ADR Mevzuat Rehberi',
            type: 'object',
            fields: [
                { name: 'badge', type: 'string', title: 'Rozet' },
                { name: 'title', type: 'string', title: 'Başlık' },
            ],
        }),
        defineField({
            name: 'technicalSupport',
            title: 'Teknik Destek Bölümü',
            type: 'object',
            fields: [
                { name: 'heading', type: 'string', title: 'Başlık' },
                { name: 'description', type: 'text', title: 'Açıklama', rows: 3 },
                { name: 'scopeLabel', type: 'string', title: 'Kapsam Etiketi' },
                { name: 'scopeContent', type: 'string', title: 'Kapsam İçeriği' },
            ],
        }),
        defineField({
            name: 'operations',
            title: 'Yapılan İşlemler',
            type: 'object',
            fields: [
                { name: 'badge', type: 'string', title: 'Rozet' },
                { name: 'title', type: 'string', title: 'Başlık' },
                {
                    name: 'items',
                    type: 'array',
                    title: 'İşlemler',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'number', type: 'string', title: 'Numara/Etiket' },
                                { name: 'title', type: 'string', title: 'Başlık' },
                                { name: 'description', type: 'text', title: 'Açıklama', rows: 2 },
                                { name: 'subItems', type: 'array', title: 'Alt Maddeler (Rozetler)', of: [{ type: 'string' }] },
                            ],
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'operationAlertText',
            title: 'İşlem Alt Bilgi/Uyarı',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'requiredDocsBadge',
            title: 'Gerekli Evraklar Rozet',
            type: 'string',
        }),
        defineField({
            name: 'requiredDocsTitle',
            title: 'Gerekli Evraklar Başlık',
            type: 'string',
        }),
        defineField({
            name: 'requiredDocsSection',
            title: 'Muayene İçin Gerekli Belgeler',
            type: 'object',
            fields: [
                { name: 'badge', title: 'Üst Başlık (Badge)', type: 'string', initialValue: 'BELGELER' },
                { name: 'title', title: 'Ana Başlık', type: 'string', initialValue: 'Muayene İçin Gerekli Belgeler ve Evraklar' },
                {
                    name: 'content',
                    title: 'Belge Listesi',
                    type: 'array',
                    of: [{ type: 'block' }]
                },
            ]
        }),
    ],
})
