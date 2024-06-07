import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({})
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
