import type { IconifyIcon } from '@iconify/vue'
import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type BenefitType = {
  image: string
  title: string
  description: string
}

export type AwardsType = {
  image: string
  title: string
  description?: string
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
  icon: IconifyIcon[]
  link?: LinkType
}

export type TeamMemberType = {
  image: string
  name: string
  role: string
  socialProfile: SocialProfileType
}

export type SocialNetworkType = {
  icon: IconifyIcon
  title: string
  socialId: string
}
