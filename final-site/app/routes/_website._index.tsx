import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuery } from '@sanity/react-loader'
import { Hero } from '~/components/modules/Hero'
import { Page } from '~/components/Page'

import type { loader as layoutLoader } from '~/routes/_website'
import { loadQuery } from '~/sanity/loader.server'
import { loadQueryOptions } from '~/sanity/loadQueryOptions.server'
import { HOME_QUERY, SERVICES_QUERY } from '~/sanity/queries'
import { homeZ } from '~/types/home'
import { servicesZ } from '~/types/shared'

export const meta: MetaFunction<
  typeof loader,
  {
    'routes/_website': typeof layoutLoader
  }
> = ({ matches }) => {
  const layoutData = matches.find(
    (match) => match.id === `routes/_website`
  )?.data
  const home = layoutData ? layoutData.initial.data : null
  const title = [home?.title, home?.siteTitle].filter(Boolean).join(' | ')

  return [{ title }]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { options } = await loadQueryOptions(request.headers)
  const query = HOME_QUERY
  const params = {}
  const initial = await loadQuery(query, params, options).then((res) => ({
    ...res,
    data: res.data ? homeZ.parse(res.data) : null,
  }))

  // if (!initial.data) {
  //   throw new Response('Not found', { status: 404 })
  // }

  return { initial, query, params }
}

export default function Index() {
  const { initial, query, params } = useLoaderData<typeof loader>()
  const { data, loading } = useQuery<typeof initial.data>(query, params, {
    // There's a TS issue with how initial comes over the wire
    // @ts-expect-error
    initial,
  })

  if (loading || !data) {
    return <div>Loading...</div>
  }

  return <Page pageLayouts={data?.modules} />
}
