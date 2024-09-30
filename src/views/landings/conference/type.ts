export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type SpeakerType = {
  image: string
  name: string
  about?: string
  position: string
}

export type ScheduleType = {
  time: string
  tag?: string
  topic: string
  description?: string
  speaker?: SpeakerType[]
}

export type TimelineType = {
  scheduleFor: string
  date: string
  schedule: ScheduleType[]
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type TestimonialType = {
  rating?: number
  comment: string
  user: UserType
}
