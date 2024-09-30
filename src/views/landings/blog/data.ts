import type { BlogType, AuthorType, PodcastType } from '@/views/landings/blog/type'

import avatar1Img from '@/assets/img/avatar/01.jpg'
import avatar2Img from '@/assets/img/avatar/02.jpg'
import avatar3Img from '@/assets/img/avatar/03.jpg'
import avatar4Img from '@/assets/img/avatar/04.jpg'
import avatar5Img from '@/assets/img/avatar/05.jpg'
import avatar6Img from '@/assets/img/avatar/06.jpg'

import blog1 from '@/assets/img/blog/01.jpg'
import blog2 from '@/assets/img/blog/02.jpg'
import blog3 from '@/assets/img/blog/03.jpg'
import blog4 from '@/assets/img/blog/04.jpg'
import blog5 from '@/assets/img/blog/05.jpg'
import blog6 from '@/assets/img/blog/06.jpg'
import blog7 from '@/assets/img/blog/07.jpg'

import podcast2 from '@/assets/img/blog/podcasts/02.jpg'
import podcast3 from '@/assets/img/blog/podcasts/03.jpg'
import podcast4 from '@/assets/img/blog/podcasts/04.jpg'
import podcast5 from '@/assets/img/blog/podcasts/05.jpg'

export const categories = [
  'Digital',
  'Business',
  'Technology',
  'Startups',
  'Web',
  'Web design',
  'Processes & Tools',
  'Marketing',
  'Events'
]

const authorData: AuthorType[] = [
  {
    image: avatar6Img,
    name: 'Annette Black'
  },
  {
    image: avatar1Img,
    name: 'Jerome Bell'
  },
  {
    image: avatar2Img,
    name: 'Ralph Edwards'
  },
  {
    image: avatar3Img,
    name: 'Esther Howard'
  },
  {
    image: avatar4Img,
    name: 'Jane Cooper'
  },
  {
    image: avatar5Img,
    name: 'Albert Flores'
  }
]

export const blogData: BlogType[] = [
  {
    cover: blog1,
    time: 'May 19, 2023',
    category: categories[5],
    route: {
      name: 'landings.blog'
    },
    title: '5 Bad Landing Page Examples &amp; How We Would Fix Them',
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    author: authorData[0],
    liked: 8,
    commented: 4,
    shared: 2
  },
  {
    cover: blog2,
    time: 'Sep 28, 2023',
    category: categories[0],
    route: {
      name: 'landings.blog'
    },
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    author: authorData[1],
    liked: 2,
    commented: 0,
    shared: 3
  },
  {
    cover: blog3,
    time: 'Sep 16, 2023',
    category: categories[1],
    route: {
      name: 'landings.blog'
    },
    title: 'This Week in Search: New Limits and Exciting Features',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    author: authorData[2],
    liked: 5,
    commented: 0,
    shared: 2
  },
  {
    cover: blog4,
    time: '12 hours ago',
    category: categories[6],
    route: {
      name: 'landings.blog'
    },
    title: 'Five Effective Lead Generation Techniques For Your Business',
    description:
      'Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae. Aliquam vitae hac phasellus purus lectus facilisi. Vitae vel ac quam.',
    author: authorData[3],
    liked: 7,
    commented: 4,
    shared: 1
  },
  {
    cover: blog5,
    time: 'Oct 9, 2023',
    category: categories[0],
    route: {
      name: 'landings.blog'
    },
    title: 'Inclusive Marketing: Why and How Does it Work?',
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    author: authorData[4],
    liked: 5,
    commented: 3,
    shared: 9
  },
  {
    cover: blog6,
    time: 'Apr 2, 2023',
    category: categories[7],
    route: {
      name: 'landings.blog'
    },
    title: 'How Agile is Your Forecasting Process?',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    author: authorData[5],
    liked: 3,
    commented: 5,
    shared: 2
  },
  {
    cover: blog7,
    time: 'Sep 3, 2023',
    category: categories[6],
    route: {
      name: 'landings.blog'
    },
    title: 'Your Guide to Optimising A JavaScript-enabled Website',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    author: authorData[2],
    liked: 8,
    commented: 4,
    shared: 2
  }
]

const anchorData = authorData

export const podcastData: PodcastType[] = [
  {
    cover: podcast4,
    airedOn: '2 hours ago',
    time: '0:48:02',
    category: categories[0],
    link: {
      name: 'landings.blog'
    },
    title: 'IOS and the Changing landscape of Data Privacy',
    anchor: anchorData[0],
    liked: 4,
    commented: 2,
    shared: 0
  },
  {
    cover: podcast5,
    airedOn: '10 hours ago',
    time: '0:25:43',
    category: categories[6],
    link: {
      name: 'landings.blog'
    },
    title: 'Behavioral Science and Digital Marketing',
    anchor: anchorData[5],
    liked: 9,
    commented: 5,
    shared: 6
  },
  {
    cover: podcast2,
    airedOn: '10 hours ago',
    time: '1:12:05',
    category: categories[2],
    link: {
      name: 'landings.blog'
    },
    title: 'Why You Should Care About Your Competitors',
    anchor: anchorData[1],
    liked: 45,
    commented: 12,
    shared: 6
  },
  {
    cover: podcast3,
    airedOn: '1 day ago',
    time: '0:32:15',
    category: categories[7],
    link: {
      name: 'landings.blog'
    },
    title: 'Tips for Marketing Managers: How to Maximise Leads',
    anchor: anchorData[4],
    liked: 10,
    commented: 4,
    shared: 6
  }
]
