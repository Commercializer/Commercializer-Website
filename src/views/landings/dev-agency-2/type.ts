import type { IconifyIcon } from '@iconify/vue'

export type AwardType = {
  icon?: IconifyIcon | string
  image?: string
  title?: string
  description?: string
}

export type CaseStudyType = {
  image: string
  title: string
  description: string
  url?: string
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type ReviewType = {
  title: string
  description: string
  rating: number
  user: UserType
}
