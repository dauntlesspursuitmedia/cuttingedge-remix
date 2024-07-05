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
  mainNavigation: z.array(menuItemZ.nullish()),
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

export const actionZ = z.object({
  _type: z.literal('action'),
  actionType: z.string().nullish(),
  isExternal: z.boolean().nullish(),
  actionStyle: z
    .object({
      color: z.string().nullish(),
      buttonStyle: z.string().nullish(),
    })
    .nullish(),
  title: z.string().nullish(),
  internalLink: z
    .object({
      slug: z.string().nullish(),
    })
    .nullish(),
  externalLink: z.string().nullish(),
  _key: z.string().nullish(),
})
export const heroModuleZ = z.object({
  _type: z.literal('hero'),
  _key: z.string(),
  title: z.string(),
  image: imagePropsZ,
  action: actionZ.nullish(),
})
export const cardsModuleZ = z.object({
  _type: z.literal('cardSection'),
  heading: z.string().nullish(),
  tagline: z.string().nullish(),
  cards: z.array(z.any()).nullish(),
  ctas: z.array(actionZ.nullish()).nullish(),
})

export const richTextModuleZ = z.object({
  _type: z.literal('richText'),
  _key: z.string(),
  content: z.array(z.any()).nullish(),
})

export const textWithImageModuleZ = z.object({
  _type: z.literal('textWithImage'),
  _key: z.string(),
  title: z.string(),
  imagePlacement: z.string().default('left').nullish(),

  image: imagePropsZ,
  text: z.array(z.any()).nullish(),
})

export const pageModulesZ = z.array(
  z.discriminatedUnion('_type', [
    heroModuleZ,
    cardsModuleZ,
    richTextModuleZ,
    textWithImageModuleZ,
  ])
)

export type SiteConfig = z.infer<typeof configZ>
