export type StoryType = {
  year: number
  content: string
}

export type MemberType = {
  image: string
  name: string
  about?: string
  position: string
}

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type UserType = {
  image: string
  name: string
  position: string
}

export type TestimonialType = {
  comment: string
  user: UserType
  rating: number
}
