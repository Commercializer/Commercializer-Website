import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type MemberType = {
  image: string
  name: string
  expertise: string
  reviews: number
  rating: number
}

export type PricingType = {
  title: string
  price: number
}

export type AuthorType = {
  image: string
  name: string
  expertise?: string
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

export type DentalServiceType = {
  image: string
  service: string
  description: string
}
