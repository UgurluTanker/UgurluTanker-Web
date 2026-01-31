import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
    name: 'service',
    title: 'Hizmetlerimiz',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Hizmet Adı',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'İkon (Lucide İkon Adı veya Görsel)',
            type: 'string',
            description: 'Örn: Shield, Truck, FileCheck. Lucide react kütüphanesinden bir isim.',
        }),
        defineField({
            name: 'iconImage',
            title: 'İkon Görseli (Opsiyonel)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'color',
            title: 'Tema Rengi (Tailwind)',
            type: 'string',
            description: 'Örn: bg-primary, bg-slate-900',
        }),
        defineField({
            name: 'shortDescription',
            title: 'Kısa Açıklama',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'description',
            title: 'Detaylı Açıklama',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'features',
            title: 'Öne Çıkan Özellikler',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'steps',
            title: 'Muayene Adımları',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Adım Başlığı', type: 'string' },
                        { name: 'description', title: 'Açıklama', type: 'text', rows: 2 },
                    ],
                },
            ],
        }),
        defineField({
            name: 'requiredDocuments',
            title: 'Gerekli Belgeler',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'mainImage',
            title: 'Kapak Görseli',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
