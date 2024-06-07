import { Logo } from '~/components/Logo'
import { ThemeToggle } from '~/components/ThemeToggle'
import { SiteConfig } from '~/types/shared'
import { ThemePreference } from '~/types/themePreference'
import { SanityImage } from './SanityImage'
import { Link } from '@remix-run/react'
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
        <ThemeToggle theme={props.theme} />
      </div>
    </header>
  )
}
