import { defineField, defineType } from 'sanity'

export const priceListPageType = defineType({
    name: 'priceListPage',
    title: 'Fiyat Listesi Sayfası',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Üst Başlık (Rozet)',
            type: 'string',
            initialValue: '2026 YILI MUAYENE ÜCRETLERİ',
        }),
        defineField({
            name: 'headerTitle',
            title: 'Ana Başlık',
            type: 'string',
            initialValue: 'Fiyat Listesi',
        }),
        defineField({
            name: 'description',
            title: 'Açıklama Metni',
            type: 'text',
            rows: 4,
            initialValue: '01/01/2026 – 31/12/2026 tarihleri arasında uygulanacak araç ve tank muayene ücretleri, T.C. Ulaştırma ve Altyapı Bakanlığı genelgesine uygun olarak belirlenmiştir.',
        }),
        defineField({
            name: 'pdfFile',
            title: 'Fiyat Listesi Dosyası (PDF)',
            type: 'file',
            options: {
                accept: '.pdf'
            }
        }),
    ],
})
