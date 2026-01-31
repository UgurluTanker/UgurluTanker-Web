import { defineField, defineType } from 'sanity'

export const priceItemType = defineType({
    name: 'priceItem',
    title: 'Fiyat Listesi',
    type: 'document',
    fields: [
        defineField({
            name: 'serviceName',
            title: 'Hizmet Adı',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Ücret',
            type: 'string',
            description: 'Örn: 5.000 TL',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            description: 'Örn: Tanker, Dorse, Periyodik',
            initialValue: 'Genel',
        }),
    ],
})
