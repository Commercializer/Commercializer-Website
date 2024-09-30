import collection1 from '@/assets/img/account/collection01.jpg'
import collection2 from '@/assets/img/account/collection02.jpg'
import collection3 from '@/assets/img/account/collection03.jpg'

import type { CollectionType } from '@/views/account/collections/type'

const tags: string[] = [
  'NFT',
  'Graphic Design',
  'Motion Design',
  'Art',
  'Identity',
  'Mobile App Design'
]

export const collectionData: CollectionType[] = [
  {
    image: collection1,
    date: 'Nov 30, 2023',
    title: '3D Shape Illustration',
    tags: [tags[0], tags[1], tags[2]]
  },
  {
    image: collection2,
    date: 'Oct 18, 2023',
    title: 'Scene of Sunglasses & Headphone on Human Head',
    tags: [tags[1], tags[3], tags[4], tags[2]]
  },
  {
    image: collection3,
    date: 'Aug 05, 2023',
    title: 'Mannequin Hands Holding Phone',
    tags: [tags[0], tags[5], tags[1], tags[3]]
  }
]
