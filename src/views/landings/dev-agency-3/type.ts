import type { IconifyIcon } from '@iconify/vue'

export type SolutionType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description: string
}

export type IndustryType = {
  image: string
  name: string
  about: string
}

export type ProjectType = {
  image: string
  category: string
  title: string
  description: string
  tags: string[]
}

export type BenefitType = {
  title: string
  description: string
}

export type BrandType = {
  image: string
  name?: string
  description?: string
}

export type BlogType = {
  image: string
  category: string
  time: string
  title: string
  description?: string
}
