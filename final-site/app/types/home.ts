import { z } from 'zod'
import { routeStubZ } from './shared'

export const homeZ = z.object({
  _type: z.literal('home'),
  _id: z.string(),
  _rev: z.string().nullish(),
  _createdAt: z.string().nullish(),
  _updatedAt: z.string().nullish(),
  modules: z.array(z.any()),
  route: routeStubZ.nullish(),
})

export type HomeDocument = z.infer<typeof homeZ>

export type LogoProps = { home?: HomeDocument | null }
