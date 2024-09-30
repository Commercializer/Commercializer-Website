import course1Img from '@/assets/img/portfolio/courses/01.jpg'
import course2Img from '@/assets/img/portfolio/courses/02.jpg'
import course3Img from '@/assets/img/portfolio/courses/03.jpg'

import type { AuthorType, CourseType } from '@/views/account/saved-items/type'

const authorData: AuthorType[] = [
  {
    name: 'Albert Flores'
  },
  {
    name: 'Jenny Wilson'
  },
  {
    name: 'Esther Howard'
  }
]

export const courseData: CourseType[] = [
  {
    route: {
      name: 'landings.online-course'
    },
    badge: 'Best Seller',
    image: course1Img,
    title: 'Fullstack Web Developer Course from Scratch',
    author: authorData[0],
    price: 12.5,
    time: 220,
    like: 4235
  },
  {
    route: {
      name: 'landings.online-course'
    },
    image: course2Img,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: authorData[1],
    price: 15.99,
    time: 160,
    like: 3104
  },
  {
    route: {
      name: 'landings.online-course'
    },
    badge: 'Sale!',
    image: course3Img,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: authorData[2],
    price: 44.99,
    discount: 70,
    time: 210,
    like: 2700
  }
]
