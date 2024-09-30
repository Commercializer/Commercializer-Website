import { type IconifyIcon } from '@iconify/vue'

export type ServiceType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description: string
}

export type FeatureType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description?: string
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type TestimonialType = {
  rating?: number
  comment: string
  user: UserType
}

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type NewsType = {
  category: string
  time: string
  url?: string
  title: string
  description: string
  liked: number
  commented: number
  shared: number
}
