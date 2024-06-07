import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { loader } from './root'

export default function App() {
  const { theme, bodyClassNames, ENV } = useLoaderData<typeof loader>()

  return (
    <html lang='en'>
      <head>
        <Meta />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' href='https://fav.farm/🤘' />
        <Links />
      </head>
      <body className={bodyClassNames}>
        <Outlet context={{ theme }} />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  )
}
