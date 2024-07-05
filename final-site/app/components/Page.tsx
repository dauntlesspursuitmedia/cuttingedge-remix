import { Suspense } from 'react'

import { lookup } from '~/lib/pageModules'
import type { PageDocument } from '~/types/page'
export const Page = ({
  pageLayouts,
}: {
  pageLayouts: PageDocument['modules']
}) => {
  console.log({ pageLayouts })
  return (
    <>
      {pageLayouts?.map((module, idx) => {
        const Component = lookup[module._type]
        return (
          <Suspense key={idx} fallback={`Loading ${module._type}`}>
            <Component key={module._key} {...module} />
          </Suspense>
        )
      })}
    </>
  )
}
