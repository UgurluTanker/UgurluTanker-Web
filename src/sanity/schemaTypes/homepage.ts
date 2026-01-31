import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
    name: 'homepage',
    title: 'Ana Sayfa',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Başlık',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Alt Başlık',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'heroImages',
            title: 'Hero Slider Görselleri',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'quickActions',
            title: 'Hızlı İşlemler',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Başlık' },
                        { name: 'link', type: 'string', title: 'Link (Örn: /iletisim)' },
                        { name: 'icon', type: 'string', title: 'İkon Adı' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'stats',
            title: 'İstatistikler',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Başlık (Stat)' },
                        { name: 'value', type: 'string', title: 'Değer (Örn: 25+)' },
                    ],
                },
            ],
        }),
    ],
})
