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

export type BlogType = {
  category?: string
  cover?: string
  time: string
  route?: LinkType
  author?: AuthorType
  title: string
  description?: string
  liked?: number
  commented?: number
  shared?: number
}

export type AnchorType = AuthorType

export type PodcastType = {
  category?: string
  airedOn: string
  cover?: string
  time: string
  link?: LinkType
  anchor?: AnchorType
  title: string
  description?: string
  liked?: number
  commented?: number
  shared?: number
}
