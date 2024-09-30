import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type FeedType = {
  category: string
  time: string
  title: string
  description: string
  link?: LinkType
  like: number
  comment: number
  share: number
}

type BlogType = {
  date: string
  title: string
  description?: string
  link?: LinkType
  like: number
  comment: number
  share: number
}

export type BlogsType = {
  category: string
  blogs: BlogType[]
}
