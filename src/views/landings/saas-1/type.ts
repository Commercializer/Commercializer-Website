import { type IconifyIcon } from '@iconify/vue'

export type FeatureType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description: string
}

export type WorkType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description?: string
}

export type UseCaseType = {
  icon: IconifyIcon | string
  image: string
  title: string
  description: string
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

export type WorkToolType = {
  icon?: IconifyIcon | string
  image?: string
  name?: string
}
