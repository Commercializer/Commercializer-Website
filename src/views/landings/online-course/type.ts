import type { IconifyIcon } from '@iconify/vue'
import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type AuthorType = {
  image?: string
  name: string
  expertise?: string
}

export type CourseType = {
  route: LinkType
  badge?: string
  image: string
  title: string
  price: number
  discount?: number
  time: number
  like: number
  author: AuthorType
}

type ImageType = {
  light: string
  dark: string
}

export type ProcessType = {
  image: ImageType
  title: string
  description: string
}

export type FeatureType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description: string
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type TestimonialType = {
  comment: string
  rating?: number
  user: UserType
}

export type BrandsType = {
  image?: string
  name?: string
  about?: string
}

export type FaqsType = {
  question: string
  answers: string[]
}
