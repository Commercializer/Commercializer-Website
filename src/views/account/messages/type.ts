export type UserType = {
  image: string
  name: string
}

export type ContactType = {
  user: UserType
  lastSeen: string
  lastMessage?: string
  isTyping: boolean
  isActive: boolean
  currentlyChatting: boolean
}

type ChatType = {
  user: UserType
  message: string[]
  time: string
}

export type ChatDataType = {
  date: string
  chat: ChatType[]
}
