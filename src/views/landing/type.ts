import type { IconifyIcon } from '@iconify/vue'

export type DemoPageType = {
  image: string
  title: string
  name: string
}

export type MoreFeatureType = {
  icon?: IconifyIcon
  image?: string
  title: string
  description: string
}

type AnimationType = {
  light: object
  dark: object
}

export type FeatureType = {
  title: string
  description?: string
  animation: AnimationType
}
