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
            name: 'heroSlides',
            title: 'Hero Slider Slaytları',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Slayt Başlığı' },
                        { name: 'subtitle', type: 'text', title: 'Slayt Alt Başlığı', rows: 2 },
                        { name: 'image', type: 'image', title: 'Slayt Görseli', options: { hotspot: true } },
                    ]
                }
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'heroImages',
            title: 'Hero Slider Görselleri (Eski - Kaldırılacak)',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
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
        defineField({
            name: 'featuredServices',
            title: 'Öne Çıkan Hizmetler',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'service' }]
                }
            ],
            description: 'Ana sayfada "Öne Çıkan Hizmetlerimiz" bölümünde görünecek hizmetleri seçin ve sıralayın.',
        }),
    ],
})
