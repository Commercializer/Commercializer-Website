import type { IconifyIcon } from '@iconify/vue'

export type CardType = {
  icon: IconifyIcon
  content: string
}

export type DetailType = {
  title: string
  description: string
}

export type AuthorType = {
  image?: string
  name: string
  expertise?: string
}

export type TestimonialType = {
  comment: string
  rating: number
  author: AuthorType
}

export type FaqType = {
  question: string
  answers: string
}

export type CourseType = {
  image: string
  badge?: string
  title: string
  author: AuthorType
  price: number
  discount?: number
  time: number
  like: string
}
