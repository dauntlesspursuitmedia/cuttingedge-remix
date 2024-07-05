import { lazy } from 'react'

export const lookup = {
  hero: lazy(async () => {
    const { HeroModule } = await import('~/components/modules/HeroModule')
    return {
      default: HeroModule,
    }
  }),
  textWithImage: lazy(async () => {
    const { TextWithImageModule } = await import(
      '~/components/modules/TextWithImageModule'
    )
    return {
      default: TextWithImageModule,
    }
  }),
  cardSection: lazy(async () => {
    const { CardSectionModule } = await import(
      '~/components/modules/CardSectionModule'
    )
    return {
      default: CardSectionModule,
    }
  }),
  richText: lazy(async () => {
    const { RichTextModule } = await import(
      '~/components/modules/RichTextModule'
    )
    return {
      default: RichTextModule,
    }
  }),
}
