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
            name: 'approvalFee',
            title: 'Onay Ücreti (Frontend)',
            type: 'string',
            description: 'Örn: 2.155 TL',
        }),
        defineField({
            name: 'centerFee',
            title: 'Merkez Ücreti (Frontend)',
            type: 'string',
            description: 'Örn: 1.050 TL',
        }),
        defineField({
            name: 'totalPrice',
            title: 'Toplam Fiyat (Frontend)',
            type: 'string',
            description: 'Örn: 3.205 TL',
        }),
        defineField({
            name: 'onayKurulusuFee',
            title: 'Onay Kuruluşu Ücreti (Eski)',
            type: 'string',
            description: 'Örn: 2.155 TL',
        }),
        defineField({
            name: 'muayeneMerkeziFee',
            title: 'Muayene Merkezi Ücreti (Eski)',
            type: 'string',
            description: 'Örn: 1.050 TL',
        }),
        defineField({
            name: 'totalFee',
            title: 'Toplam Ücret (Eski)',
            type: 'string',
            description: 'Örn: 3.205 TL',
        }),
        defineField({
            name: 'price',
            title: 'Fiyat (Seeding - Eski)',
            type: 'string',
            description: 'Örn: 5.000 TL',
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
