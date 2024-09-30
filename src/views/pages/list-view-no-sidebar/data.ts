import avatar1 from '@/assets/img/avatar/01.jpg'
import avatar5 from '@/assets/img/avatar/05.jpg'
import avatar4 from '@/assets/img/avatar/04.jpg'
import avatar2 from '@/assets/img/avatar/02.jpg'

import blog1 from '@/assets/img/blog/01.jpg'
import blog6 from '@/assets/img/blog/06.jpg'
import blog5 from '@/assets/img/blog/05.jpg'
import blog9 from '@/assets/img/blog/09.jpg'
import blog3 from '@/assets/img/blog/03.jpg'
import blog2 from '@/assets/img/blog/02.jpg'
import type { AuthorType, BlogType } from './type'

const authorData: AuthorType[] = [
  {
    avatar: avatar1,
    name: 'Jerome Bell'
  },
  {
    avatar: avatar5,
    name: ' Albert Flores'
  },
  {
    avatar: avatar4,
    name: 'Jane Cooper'
  },
  {
    avatar: avatar2,
    name: 'Ralph Edwards'
  },
  {
    avatar: avatar2,
    name: 'Ralph Edwards'
  },
  {
    avatar: avatar1,
    name: 'Jerome Bell'
  }
]

const categories: string[] = ['Processes & Tools', 'Startups', 'Digital', 'Strategy', 'Business']

export const blogData: BlogType[] = [
  {
    image: blog1,
    category: categories[0],
    date: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    link: {
      name: 'pages.single-post'
    },
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    author: authorData[0],
    like: 8,
    comment: 7,
    share: 4
  },
  {
    image: blog6,
    category: categories[1],
    date: 'Sep 10, 2023',
    title: 'How Agile is Your Forecasting Process?',
    link: {
      name: 'pages.single-post'
    },
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    author: authorData[1],
    like: 3,
    comment: 6,
    share: 0
  },
  {
    image: blog5,
    category: categories[2],
    date: 'Oct 9, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    link: {
      name: 'pages.single-post'
    },
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    author: authorData[2],
    like: 5,
    comment: 0,
    share: 2
  },
  {
    image: blog9,
    category: categories[3],
    date: 'Sep 3, 2023',
    title: 'This Long-Awaited Technology May Finally Change the World',
    link: {
      name: 'pages.single-post'
    },
    description:
      'Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae. Aliquam vitae hac phasellus purus lectus facilisi. Vitae vel ac quam.',
    author: authorData[3],
    like: 8,
    comment: 7,
    share: 4
  },
  {
    image: blog3,
    category: categories[4],
    date: 'Sep 16, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    link: {
      name: 'pages.single-post'
    },
    description:
      'Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem eu, sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam pellentesque lobortis elementum lacus at in lectus.',
    author: authorData[4],
    like: 5,
    comment: 8,
    share: 4
  },
  {
    image: blog2,
    category: categories[2],
    date: 'Aug 19, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    link: {
      name: 'pages.single-post'
    },
    description:
      'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique. Adipiscing dui orci ac purus lacus.',
    author: authorData[5],
    like: 3,
    comment: 3,
    share: 9
  }
]
