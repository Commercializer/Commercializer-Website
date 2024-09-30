import type { IconifyIcon } from '@iconify/vue'
import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type TableType = {
  image: string
  head: string
  content: string
}

export type ServicesType = {
  image: string
  title: string
  description?: string
  table: TableType[]
  link?: LinkType
}

export type FeatureType = {
  icon: IconifyIcon
  image: string
  title: string
  description: string
}
