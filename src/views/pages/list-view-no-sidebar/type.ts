import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type AuthorType = {
  avatar: string
  name: string
}

export type BlogType = {
  image: string
  link: LinkType
  category: string
  date: string
  title: string
  description: string
  author: AuthorType
  like: number
  comment: number
  share: number
}
