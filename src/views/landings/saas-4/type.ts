export type IndustryType = {
  image: string
  name: string
  about: string
}

export type UserType = {
  image?: string
  name: string
}

export type BlogType = {
  category?: string
  time: string
  url?: string
  user: UserType
  title: string
  description: string
  liked: number
  commented: number
  shared: number
}
