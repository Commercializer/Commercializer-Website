import relate1 from '@/assets/img/portfolio/single/related01.jpg'
import relate2 from '@/assets/img/portfolio/single/related02.jpg'
import relate3 from '@/assets/img/portfolio/single/related03.jpg'

import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

type ProjectType = {
  image: string
  title: string
  description?: string
  tags: string[]
  link?: LinkType
}

const tags = ['3D Design', 'Illustration', 'Art', 'Mobile App Design', 'UI / UX', 'Graphic Design']

export const projectData: ProjectType[] = [
  {
    image: relate1,
    title: '3D Shape Illustration',
    tags: [tags[0], tags[1], tags[2]]
  },
  {
    image: relate2,
    title: 'Mobile Banking App',
    tags: [tags[3], tags[4]]
  },
  {
    image: relate3,
    title: 'Big Blue Whale Shape',
    tags: [tags[0], tags[5], tags[2]]
  }
]
