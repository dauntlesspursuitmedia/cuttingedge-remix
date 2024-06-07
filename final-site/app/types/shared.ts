import { z } from 'zod'
export const serviceZ = z.object({
  _type: z.literal('service'),
  _id: z.string(),
  _rev: z.string().nullish(),
  _createdAt: z.string().nullish(),
  _updatedAt: z.string().nullish(),
  title: z.string(),
  slug: z.string(),
  description: z
    .object({
      _type: z.literal('richText'),
      content: z.array(z.any()),
    })
    .nullish(),
  category: z.string().nullish(),
})

export const servicesZ = z.array(serviceZ).nullish()

export const routeStubZ = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
  _type: z.string().nullish(),
  seo: z
    .object({
      metaTitle: z.string().nullish(),
      metaDescription: z.string().nullish(),
      ogTitle: z.string().nullish(),
      ogDescription: z.string().nullish(),
      ogImage: z.any().nullish(),
    })
    .nullish(),
})

export const imagePropsZ = z.object({
  asset: z
    .object({
      alt: z.string().nullish(),
      _ref: z.string().nullish(),
      _id: z.string().nullish(),
      assetId: z.string().nullish(),
      metadata: z.object({
        lqip: z.string().nullish(),
        isOpaque: z.boolean().nullish(),
      }),
    })
    .nullish(),
  crop: z
    .object({
      bottom: z.number(),
      left: z.number(),
      right: z.number(),
      top: z.number(),
    })
    .nullish(),
  hotspot: z
    .object({
      height: z.number(),
      width: z.number(),
      x: z.number(),
      y: z.number(),
    })
    .nullish(),
})
export const menuItemZ = z.object({
  _key: z.string().nullish(),
  _type: z.string().nullish(),
  item: routeStubZ.nullish(),
  externalLink: z.string().nullish(),
  itemName: z.string().nullish(),
})

export const configZ = z.object({
  _type: z.literal('siteConfig'),
  title: z.string(),
  _id: z.string(),
  url: z.string().nullish(),
  logo: imagePropsZ,
  mainNavigation: z.array(
    z.object({
      _type: z.literal('menuItem').optional(),
      item: menuItemZ.nullish(),
    })
  ),
  socialLinks: z
    .array(
      z.object({
        _key: z.string(),
        platform: z.string(),
        url: z.string(),
      })
    )
    .nullish(),
})

export type SiteConfig = z.infer<typeof configZ>
