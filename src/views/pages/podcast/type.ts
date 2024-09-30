import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type AnchorType = {
  image: string
  name: string
}

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
