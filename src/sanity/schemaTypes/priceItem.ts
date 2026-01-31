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
            name: 'onayKurulusuFee',
            title: 'Onay Kuruluşu Ücreti',
            type: 'string',
            description: 'Örn: 2.155 TL',
        }),
        defineField({
            name: 'muayeneMerkeziFee',
            title: 'Muayene Merkezi Ücreti',
            type: 'string',
            description: 'Örn: 1.050 TL',
        }),
        defineField({
            name: 'totalFee',
            title: 'Toplam Ücret',
            type: 'string',
            description: 'Örn: 3.205 TL',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            description: 'Örn: ADR Periyodik, Basınçsız Tank vb.',
            initialValue: 'Genel',
        }),
        defineField({
            name: 'order',
            title: 'Sıralama',
            type: 'number',
            description: 'Listenin hangi sırada görüneceğini belirler',
        }),
    ],
})
