import slide1 from '@/assets/img/portfolio/slider/01.jpg'
import slide2 from '@/assets/img/portfolio/slider/02.jpg'
import slide3 from '@/assets/img/portfolio/slider/03.jpg'

import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

type SliderType = {
  image: string
  title: string
  description: string
  client: string
  category: string
  date: string
  link?: LinkType
}

export const sliderData: SliderType[] = [
  {
    image: slide1,
    title: '3D Shape Illustration',
    description:
      'Proin odio elit fringilla pellentesque erat sapien, cursus id. Sed mi semper amet fringilla. Eget morbi arcu ac vestibulum sodales. Montes, integer lacinia amet tristique tincidunt.',
    client: 'Coderthemes Inc.',
    category: 'Graphic Design',
    date: '29 November 2023',
    link: { name: 'pages.single-project' }
  },
  {
    image: slide2,
    title: 'Scene of Human Head',
    description:
      'Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor fermentum lorem pretium condimentum.',
    client: 'Lorem Ipsum Ltd.',
    category: 'Motion Design',
    date: '15 October 2023',
    link: { name: 'pages.single-project' }
  },
  {
    image: slide3,
    title: 'Blue Whale Shape',
    description:
      'Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor fermentum lorem pretium condimentum.',
    client: 'Great Company LLC',
    category: '3D Design',
    date: '18 September 2023',
    link: { name: 'pages.single-project' }
  }
]
