import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type CollectionType = {
  image: string
  date: string
  title: string
  description?: string
  tags: string[]
  route?: LinkType
}
