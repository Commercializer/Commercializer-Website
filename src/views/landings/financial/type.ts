import type { IconifyIcon } from '@iconify/vue'

export type FeatureType = {
  icon: IconifyIcon
  title: string
  description: string
}

export type IndustryType = {
  image: string
  name: string
  about: string
}

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type UserType = {
  image?: string
  name: string
  role?: string
}

export type TestimonialType = {
  rating: number
  comment: string
  user: UserType
}

export type AnchorType = UserType

export type NewsType = {
  cover: string
  category?: string
  title: string
  time: string
  description?: string
  anchor: AnchorType
}
