import { Link, NavLink } from '@remix-run/react'

import { ThemeToggle } from '~/components/ThemeToggle'
import type { SiteConfig } from '~/types/shared'
import type { ThemePreference } from '~/types/themePreference'

import { SanityImage } from './SanityImage'
import { cn } from '~/lib/misc'
type LayoutProps = {
  home?: SiteConfig
  theme?: ThemePreference
}
export function Header(props: LayoutProps) {
  return (
    <header className="border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12">
        <Link to="/">
          <SanityImage value={props.home?.logo} className="h-auto max-w-24" />
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            {props.home?.mainNavigation.map((item, idx) => {
              return (
                <li key={item?._key || idx}>
                  <NavLink
                    key={item?._key || idx}
                    to={item?.item?.slug ?? ''}
                    prefetch="intent"
                    className={({ isActive }) =>
                      cn(
                        `text-black dark:text-orange-500 text-sm uppercase border-2 border-transparent outline-none focus:border-orange-500 focus:text-orange-500 hover:border-orange-500 px-4 py-2 hover:text-orange-500 transition-colors duration-150 tracking-[1.6px] `,
                        isActive && 'font-bold'
                      )
                    }
                  >
                    {item?.itemName ?? item?.item?.title}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        <ThemeToggle theme={props.theme} />
      </div>
    </header>
  )
}
