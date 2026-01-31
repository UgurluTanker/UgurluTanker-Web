import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
    name: 'gallery',
    title: 'Galeri',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Görsel Başlığı',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Muayene Süreci', value: 'inspection' },
                    { title: 'Tesisimiz', value: 'facility' },
                    { title: 'Tankerler', value: 'tankers' },
                    { title: 'Ekibimiz', value: 'team' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Görsel',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Açıklama (Opsiyonel)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'order',
            title: 'Sıralama',
            type: 'number',
        }),
    ],
})
