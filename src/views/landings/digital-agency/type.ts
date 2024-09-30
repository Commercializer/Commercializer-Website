import type { IconifyIcon } from '@iconify/vue'
import type { LinkType } from '@/layouts/type'

export type FeatureType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description: string
}

export type ServiceType = {
  image?: string
  title: string
  description: string
}

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type UserType = {
  image?: string
  name: string
  role: string
  brand: BrandType
}

export type TestimonialType = {
  rating?: number
  comment: string
  user: UserType
}
export type AuthorType = {
  image?: string
  name: string
  expertise: string
}

export type BlogType = {
  category?: string
  cover: string
  time: string
  link?: LinkType
  author: AuthorType
  title: string
  description?: string
  liked: number
  commented: number
  shared: number
}
