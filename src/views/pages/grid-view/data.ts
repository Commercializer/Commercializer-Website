type GridType = {
  image: string
  title: string
  tags: string[]
  odd: boolean
}

import grid1 from '@/assets/img/portfolio/grid/01.jpg'
import grid2 from '@/assets/img/portfolio/grid/02.jpg'
import grid3 from '@/assets/img/portfolio/grid/03.jpg'
import grid4 from '@/assets/img/portfolio/grid/04.jpg'
import grid5 from '@/assets/img/portfolio/grid/05.jpg'
import grid6 from '@/assets/img/portfolio/grid/06.jpg'

const tags: string[] = [
  '3D Render',
  'Graphic Design',
  'Motion Design',
  'NFT',
  'Art',
  'Identity',
  '3D',
  'Illustration'
]
export const gridData: GridType[] = [
  {
    image: grid1,
    title: 'Astronaut & Flashing Neon Lights',
    tags: [tags[0], tags[1], tags[2]],
    odd: true
  },
  {
    image: grid2,
    title: 'Scene of Sunglasses &amp; Headphone on Human Head',
    tags: [tags[3], tags[1], tags[4], tags[5], tags[2]],
    odd: false
  },
  {
    image: grid3,
    title: 'Plaster Antique Sculpture in a Pop Art Style',
    tags: [tags[3], tags[1], tags[4], tags[6]],
    odd: false
  },
  {
    image: grid4,
    title: 'Big Blue Whale Shape',
    tags: [tags[6], tags[1], tags[4]],
    odd: true
  },
  {
    image: grid5,
    title: '3D Shape Illustration',
    tags: [tags[6], tags[7], tags[4]],
    odd: true
  },
  {
    image: grid6,
    title: 'Mannequin Hands Holding Phone',
    tags: [tags[3], tags[1], tags[4], tags[6]],
    odd: false
  }
]
