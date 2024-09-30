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
