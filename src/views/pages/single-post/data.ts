import blog1 from '@/assets/img/blog/01.jpg'
import blog6 from '@/assets/img/blog/06.jpg'
import blog3 from '@/assets/img/blog/03.jpg'

import avatar1 from '@/assets/img/avatar/01.jpg'
import avatar5 from '@/assets/img/avatar/05.jpg'
import avatar2 from '@/assets/img/avatar/02.jpg'

import type { ArticleType, AuthorType } from '@/views/pages/single-post/type'

const authorData: AuthorType[] = [
  {
    avatar: avatar1,
    name: 'Jerome Bell'
  },
  {
    avatar: avatar5,
    name: 'Albert Flores'
  },
  {
    avatar: avatar2,
    name: 'Ralph Edwards'
  }
]
export const articlesData: ArticleType[] = [
  {
    image: blog1,
    category: 'Business',
    date: 'May 19, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    author: authorData[0],
    link: { name: 'pages.single-post' }
  },
  {
    image: blog6,
    category: 'Marketing',
    date: 'Apr 2, 2023',
    title: 'How Agile is Your Forecasting Process?',
    author: authorData[1],
    link: { name: 'pages.single-post' }
  },
  {
    image: blog3,
    category: 'Business',
    date: 'Sep 16, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    author: authorData[2],
    link: { name: 'pages.single-post' }
  }
]
