import type { IconifyIcon } from '@iconify/vue'
import type { RouteParamsRaw } from 'vue-router'

export type LinkType = {
  name: string
  params?: RouteParamsRaw
}

// navbar
type NavChildrenType = {
  title: string
  link: LinkType
}

type LinksType = {
  title: string | null
  children: NavChildrenType[]
}

export type NavLinkType = {
  title: string
  image?: string
  links?: LinksType[]
  link?: LinkType
}

// sidebar
export type ChildrenLinkType = {
  icon?: IconifyIcon
  title: string
  link?: LinkType
  externalLink?: string
}

export type SidebarLinkType = {
  title: string
  children: ChildrenLinkType[]
}
