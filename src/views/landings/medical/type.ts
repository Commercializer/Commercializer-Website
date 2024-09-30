import type { IconifyIcon } from '@iconify/vue'
import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type FeatureType = {
  image: string
  title: string
  description?: string
  linkLabel?: string
  link?: LinkType
}

export type ServiceType = {
  image: string
  title: string
  description: string
  link?: LinkType
}

export type TeamType = {
  image: string
  name: string
  expertise: string
  rating: number
  totalReview: number
}

export type AuthorType = {
  image: string
  name: string
  expertise?: string
}

export type TestimonialType = {
  comment: string
  rating: number
  author: AuthorType
}

export type NewsType = {
  image: string
  category: string
  title: string
  time: string
  description?: string
  author: AuthorType
  link?: LinkType
}
