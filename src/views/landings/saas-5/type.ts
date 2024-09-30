import type { IconifyIcon } from '@iconify/vue'

export type categoriesType = {
  head: string
  description: string
  image: string
}

type ImageType = {
  light: string
  dark: string
}

export type AuthorType = {
  image?: string
  name: string
  position: string
}

export type TestimonialType = {
  image: ImageType
  feedback: string
  author: AuthorType
}

export type PricingType = {
  head: string
  title1: string
  description1?: string
  title2: string
  description2: string
}

export type FooterType = {
  icon: IconifyIcon
  title: string
  content: string
}
