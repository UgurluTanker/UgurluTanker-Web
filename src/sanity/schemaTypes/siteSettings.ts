import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Ayarları',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Firma Adı',
            type: 'string',
            initialValue: 'UĞURLU TANKER SINAİ GAZLAR İNŞ.TUR.TİC.SAN.LTD.ŞTİ',
        }),
        defineField({
            name: 'address',
            title: 'Adres',
            type: 'text',
            rows: 3,
            initialValue: 'Sanayi Mh. İzmit San. Sit.13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ',
        }),
        defineField({
            name: 'phone1',
            title: 'Telefon 1',
            type: 'string',
            initialValue: '(0262) 335 04 15',
        }),
        defineField({
            name: 'phone2',
            title: 'Telefon 2',
            type: 'string',
            initialValue: '(0262) 335 06 85',
        }),
        defineField({
            name: 'mobile',
            title: 'Cep Telefonu',
            type: 'string',
            initialValue: '+90 538 774 57 41',
        }),
        defineField({
            name: 'fax',
            title: 'Fax',
            type: 'string',
            initialValue: '335 05 63',
        }),
        defineField({
            name: 'email',
            title: 'E-mail',
            type: 'string',
            initialValue: 'ugurlutanker@hotmail.com.tr',
        }),
        defineField({
            name: 'taxInfo',
            title: 'Vergi Dairesi/No',
            type: 'string',
            initialValue: 'Tepecik V.D: 886 025 6288',
        }),
        defineField({
            name: 'logo',
            title: 'Site Logosu',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'socialLinks',
            title: 'Sosyal Medya Linkleri',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Platform' },
                        { name: 'url', type: 'string', title: 'URL' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'aboutUs',
            title: 'Hakkımızda',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'mission',
            title: 'Misyonumuz',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'vision',
            title: 'Vizyonumuz',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'history',
            title: 'Tarihçemiz',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
