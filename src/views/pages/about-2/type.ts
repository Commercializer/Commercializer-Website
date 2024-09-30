import type { IconifyIcon } from '@iconify/vue'

export type StatsType = {
  image: string
  number: number
  content: string
}

export type BrandType = {
  image: string
  about?: string
}

export type UserType = {
  image: string
  name: string
  role: string
}

export type TestimonialType = {
  comment: string
  user: UserType
}

type SocialProfileType = {
  icons: IconifyIcon[]
}

export type LeaderType = {
  image: string
  name: string
  role: string
  socialProfile: SocialProfileType
}
