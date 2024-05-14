import { z } from "zod";
export interface Service {
  _type: "service";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: string;
  description: string;
  category: string;
}

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
});

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
});
export const menuItemZ = z.object({
  _key: z.string(),
  _type: z.string().nullish(),
  item: routeStubZ.nullish(),
  externalLink: z.string().nullish(),
  itemName: z.string().nullish(),
});

export const configZ = z.object({
  _type: z.literal("siteConfig"),
  title: z.string(),
  _id: z.string(),
  url: z.string().nullish(),
  logo: imagePropsZ,
  mainNavigation: z.array(
    z.object({
      _type: z.literal("menuItem").optional(),
      item: z.object({}),
    })
  ),
  socialLinks: z.array(
    z.object({
      _key: z.string(),
      platform: z.string(),
      url: z.string(),
    })
  ),
});

export type SiteConfig = z.infer<typeof configZ>;
