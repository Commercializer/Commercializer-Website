import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'
import paymentsImg from '@/assets/img/landing/app-showcase-1/features/payments.svg'
import securityImg from '@/assets/img/landing/app-showcase-1/features/security.svg'
import statisticsImg from '@/assets/img/landing/app-showcase-1/features/statistics.svg'
import supportImg from '@/assets/img/landing/app-showcase-1/features/support.svg'
import cashbackImg from '@/assets/img/landing/app-showcase-1/features/cashback.svg'
import happyImg from '@/assets/img/landing/app-showcase-1/features/happy.svg'

import screen1Img from '@/assets/img/landing/app-showcase-1/screens/01.png'
import screen2Img from '@/assets/img/landing/app-showcase-1/screens/02.png'
import screen3Img from '@/assets/img/landing/app-showcase-1/screens/03.png'
import screen4Img from '@/assets/img/landing/app-showcase-1/screens/04.png'

import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import avatar42Img from '@/assets/img/avatar/42.png'
import avatar43Img from '@/assets/img/avatar/43.png'
import avatar44Img from '@/assets/img/avatar/44.png'
import avatar45Img from '@/assets/img/avatar/45.png'

import type { BrandType, FAQType, FeatureType, TestimonialType, UserType } from './type'

export { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, EnvelopeIcon }

export const brandData: BrandType[] = [
  {
    image: brand1SvgImg
  },
  {
    image: brand2SvgImg
  },
  {
    image: brand3SvgImg
  },
  {
    image: brand4SvgImg
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  }
]

export const appFeaturesData: FeatureType[] = [
  {
    image: paymentsImg,
    title: 'Easy Payments',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
  },
  {
    image: securityImg,
    title: 'Data Security',
    description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.'
  },
  {
    image: statisticsImg,
    title: 'Cost Statistics',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'
  },
  {
    image: supportImg,
    title: 'Support 24/7',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.'
  },
  {
    image: cashbackImg,
    title: 'Regular Cashback',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.'
  },
  {
    image: happyImg,
    title: 'Top Standards',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'
  }
]

export const processData: FeatureType[] = [
  {
    image: screen1Img,
    title: 'Advanced budget management',
    description:
      'Consequat ut cras nisl, enim purus in facilisi. Ipsum amet, lectus malesuada risus sollicitudin accumsan. Id sem elit vel vel lectus risus senectus.'
  },
  {
    image: screen2Img,
    title: 'Latest transaction history',
    description:
      'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.'
  },
  {
    image: screen3Img,
    title: 'Transfers to people from your contact list',
    description:
      'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.'
  },
  {
    image: screen4Img,
    title: 'Card-to-card transfers',
    description:
      'A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis'
  }
]

export const userData: UserType[] = [
  {
    image: avatar42Img,
    name: 'Fannie Summers',
    role: 'Designer'
  },
  {
    image: avatar43Img,
    name: 'Robert Fox',
    role: 'QA Engineer'
  },
  {
    image: avatar44Img,
    name: 'Annette Black',
    role: 'Project Manager'
  },
  {
    image: avatar45Img,
    name: 'Jerome Bell',
    role: 'Developer'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.',
    rating: 3,
    user: userData[0]
  },
  {
    comment:
      'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.',
    rating: 5,
    user: userData[1]
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna. Sit pretium aliquam tempor, orci dolor sed maecenas.',
    rating: 4,
    user: userData[2]
  },
  {
    comment:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend. Pellentesque finibus congue egestas egestas suspendisse blandit justo.',
    rating: 5,
    user: userData[3]
  }
]

export const faqData: FAQType[] = [
  {
    question: 'Is any of my personal information stored in the App?',
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet
      pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus
      non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
      montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
      Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit
      leo elit facilisi. Dignissim amet adipiscing massa integer.`
    ]
  },
  {
    question: 'What formats can I download my transaction history in?',
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet
      pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus
      non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
      montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
      Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit
      leo elit facilisi. Dignissim amet adipiscing massa integer.`
    ]
  },
  {
    question: 'Can I schedule future transfers?',
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet
      pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus
      non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
      montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
      Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit
      leo elit facilisi. Dignissim amet adipiscing massa integer.`
    ]
  },
  {
    question: 'When can I use Banking App services?',
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet
      pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus
      non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
      montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
      Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit
      leo elit facilisi. Dignissim amet adipiscing massa integer.`
    ]
  },
  {
    question: 'Can I create my own password that is easy for me to remember?',
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet
      pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus
      non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
      montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
      Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit
      leo elit facilisi. Dignissim amet adipiscing massa integer.`
    ]
  },
  {
    question: 'What happens if I forget or lose my password?',
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet
      pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus
      non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
      montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
      Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit
      leo elit facilisi. Dignissim amet adipiscing massa integer.`
    ]
  }
]
