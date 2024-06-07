import {Cog} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  type: 'document',
  title: 'Configuration',
  icon: Cog,
  fieldsets: [{name: 'footer', title: 'Footer'}],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site title',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    }),
    defineField({
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
    }),
    defineField({
      title: 'Social Media Links',
      name: 'socialLinks',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
    defineField({
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu.',
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
    }),
    defineField({
      name: 'footerText',
      type: 'simplePortableText',
      fieldset: 'footer',
    }),
  ],
})
