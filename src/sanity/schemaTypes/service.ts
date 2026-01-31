import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Hizmetlerimiz',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hizmet Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'İkon (Lucide İkon Adı veya Görsel)',
      type: 'string',
      description: 'Örn: Shield, Truck, FileCheck. Lucide react kütüphanesinden bir isim.',
    }),
    defineField({
      name: 'iconImage',
      title: 'İkon Görseli (Opsiyonel)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Hizmet Açıklaması',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
