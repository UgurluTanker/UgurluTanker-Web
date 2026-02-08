import { defineField, defineType } from 'sanity'

export const certificateType = defineType({
    name: 'certificate',
    title: 'Yetkinlik Belgeleri',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Belge Adı',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'file',
            title: 'Belge Dosyası (PDF/Resim)',
            type: 'file',
            options: {
                accept: '.pdf,.jpg,.jpeg,.png,.webp'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Sıralama',
            type: 'number',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'order',
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: `Sıra: ${subtitle}`
            }
        }
    }
})
