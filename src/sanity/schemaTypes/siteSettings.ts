import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Ayarları',
    type: 'document',
    groups: [
        { name: 'general', title: 'Genel' },
        { name: 'contact', title: 'İletişim' },
        { name: 'corporate', title: 'Kurumsal' },
        { name: 'social', title: 'Sosyal Medya' },
    ],
    fields: [
        defineField({
            name: 'companyName',
            title: 'Firma Adı',
            type: 'string',
            group: 'general',
            initialValue: 'UĞURLU TANKER SINAİ GAZLAR İNŞ.TUR.TİC.SAN.LTD.ŞTİ',
        }),
        defineField({
            name: 'versionNote',
            title: 'Versiyon / Yedek Notu (History İşaretleyici)',
            type: 'string',
            group: 'general',
            description: 'Önemli bir değişiklik yapmadan önce buraya "ANA YEDEK" gibi bir not yazıp yayınlarsanız, Sanity geçmişinde (History) bu sürümü kolayca bulabilirsiniz.',
        }),
        defineField({
            name: 'address',
            title: 'Adres',
            type: 'text',
            rows: 3,
            group: 'contact',
            initialValue: 'Sanayi Mh. İzmit San. Sit.13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ',
        }),
        defineField({
            name: 'phone1',
            title: 'Telefon 1',
            type: 'string',
            group: 'contact',
            initialValue: '(0262) 335 04 15',
        }),
        defineField({
            name: 'phone2',
            title: 'Telefon 2',
            type: 'string',
            group: 'contact',
            initialValue: '(0262) 335 06 85',
        }),
        defineField({
            name: 'mobile',
            title: 'Cep Telefonu',
            type: 'string',
            group: 'contact',
            initialValue: '+90 538 774 57 41',
        }),
        defineField({
            name: 'fax',
            title: 'Fax',
            type: 'string',
            group: 'contact',
            initialValue: '335 05 63',
        }),
        defineField({
            name: 'email',
            title: 'E-mail',
            type: 'string',
            group: 'contact',
            initialValue: 'ugurlutanker@hotmail.com.tr',
        }),
        defineField({
            name: 'taxInfo',
            title: 'Vergi Dairesi/No',
            type: 'string',
            group: 'contact',
            initialValue: 'Tepecik V.D: 886 025 6288',
        }),
        defineField({
            name: 'workingHours',
            title: 'Çalışma Saatleri',
            type: 'array',
            group: 'contact',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'dayRange', type: 'string', title: 'Gün Aralığı (Örn: Pazartesi - Cuma)' },
                        { name: 'hours', type: 'string', title: 'Saat Aralığı (Örn: 08:30 - 18:00)' },
                    ]
                }
            ],
            initialValue: [
                { dayRange: 'Pazartesi - Cuma', hours: '08:30 - 17:30' },
                { dayRange: 'Cumartesi', hours: '08:30 - 13:00' },
                { dayRange: 'Pazar', hours: 'Kapalı' },
            ]
        }),
        defineField({
            name: 'logo',
            title: 'Site Logosu',
            type: 'image',
            group: 'general',
            options: { hotspot: true },
        }),
        defineField({
            name: 'facebookUrl',
            title: 'Facebook URL',
            type: 'url',
            group: 'social',
        }),
        defineField({
            name: 'instagramUrl',
            title: 'Instagram URL',
            type: 'url',
            group: 'social',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Diğer Sosyal Medya Linkleri',
            type: 'array',
            group: 'social',
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
            group: 'corporate',
            initialValue: [
                {
                    _type: 'block',
                    children: [{ _type: 'span', text: "Kurulduğu 1977 yılından 2015 yılına kadar tanker üretimini aralıksız sürdüren şirketimiz, 2015 yılında yeniden yapılanarak güvenirliliğinden, işi zamanında teslim etme prensibinden, kalitesinden taviz vermeden tanker üretimini sürdürmüştür. 2015 yılı aralık ayı itibari ile şirketimiz ADR'Lİ TANKER üretimine başlamıştır. 17.03.2021 tarihi itibariyle Ulaştırma ve Altyapı Bakanlığı ile TSE'den yetkilendirilmiş olup onaylı muayene merkezi olarak hizmet etmeye devam etmekteyiz." }],
                    markDefs: [],
                    style: 'normal',
                },
            ],
        }),
        defineField({
            name: 'mission',
            title: 'Misyonumuz',
            type: 'text',
            rows: 4,
            group: 'corporate',
            initialValue: "Uluslararası standartlara ve TSE ADR standartlarına uygun ekipman ve yönetim sistemlerini kullanarak, bu konudaki tüm gelişmeleri yakından takip eden şirketimiz; müşteri memnuniyetini ön planda tutarak 2015 yılı itibariyle ISO 9001 - 2008 Kalite belgesini ve WPS/WPQR Kaynak yönetim sistemi sertifikası alarak ADR BELGELİ tanker üretimine devam etmektedir.",
        }),
        defineField({
            name: 'vision',
            title: 'Vizyonumuz',
            type: 'text',
            rows: 4,
            group: 'corporate',
            initialValue: "Konusunda nitelikli ve kendisini sürekli geliştiren insan kaynaklarına sahip olan işletmemiz ADR'li tankeri kaliteye uygun fiyatlarla sağlayarak ve sistemli çalışarak sektörde öncü kuruluş olma rolünü devam ettirmektedir. Ürettiğimiz ADR'li tankerleri Türkiye'de ve dünya'nın her yerine, yıllarda ve yollarda görmek, bizlere daha güzel daha kaliteli ADR'li tankerler üretme konusunda sonsuz istek vermektedir.",
        }),
        defineField({
            name: 'history',
            title: 'Tarihçemiz',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'corporate',
        }),
        defineField({
            name: 'authorizationCertificate',
            title: 'Yetki Belgesi',
            type: 'image',
            group: 'corporate',
            options: { hotspot: true },
        }),
    ],
})
