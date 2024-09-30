import { type IconifyIcon } from '@iconify/vue'

export type CryptoTableType = {
  image: string
  coin: string
  shortened: string
  price: string
  growth: number
  totalTreading: string
  graph: string
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
  rating: number
  comment: string
  user: UserType
}

export type ServiceType = {
  image: string
  title: string
  description: string
  name: string
  text: string
}
