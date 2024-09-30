import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type ServiceType = {
  image: string
  title: string
  description: string
  link?: LinkType
}

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type AuthorType = {
  image: string
  name: string
  role: string
  brand: BrandType
}

export type TestimonialType = {
  comment: string
  author: AuthorType
}

export type FeatureType = {
  image: string
  title: string
  description?: string
}
