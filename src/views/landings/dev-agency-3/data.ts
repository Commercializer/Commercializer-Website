import icon1 from '@/assets/img/landing/software-agency-3/icons/01.svg'
import icon2 from '@/assets/img/landing/software-agency-3/icons/02.svg'
import icon3 from '@/assets/img/landing/software-agency-3/icons/03.svg'
import icon4 from '@/assets/img/landing/software-agency-3/icons/04.svg'

import industry1 from '@/assets/img/landing/software-agency-3/industries/01.jpg'
import industry2 from '@/assets/img/landing/software-agency-3/industries/02.jpg'
import industry3 from '@/assets/img/landing/software-agency-3/industries/03.jpg'

import project1 from '@/assets/img/landing/software-agency-3/projects/01.png'
import project2 from '@/assets/img/landing/software-agency-3/projects/02.png'
import project3 from '@/assets/img/landing/software-agency-3/projects/03.png'

import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'

import blog5 from '@/assets/img/blog/05.jpg'
import blog7 from '@/assets/img/blog/07.jpg'
import blog8 from '@/assets/img/blog/08.jpg'

import type {
  BenefitType,
  BlogType,
  IndustryType,
  ProjectType,
  BrandType,
  SolutionType
} from '@/views/landings/dev-agency-3/type'

export const solutionData: SolutionType[] = [
  {
    image: icon1,
    title: 'Software Development',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.'
  },
  {
    image: icon2,
    title: 'App Development',
    description: 'Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.'
  },
  {
    image: icon3,
    title: 'Support &amp; Maintenance',
    description:
      'Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit adipiscing magnis.'
  },
  {
    image: icon4,
    title: 'Software QA &amp; Testing',
    description: 'Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.'
  }
]

export const industryData: IndustryType[] = [
  {
    image: industry1,
    name: 'Finance and insurance',
    about:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat cursus enim.'
  },
  {
    image: industry2,
    name: 'Startup and technology',
    about:
      'Interdum amet lobortis viverra et sapien aliquam nunc amet. Bibendum eu pellentesque sit risus leo commodo. Nibh dictum tellus lectus in risus eget cursus vitae nisi lacinia aliquam utuismod cras pellentesque.'
  },
  {
    image: industry3,
    name: 'E-commerce',
    about:
      'Egestas nunc eleifend lacinia suspendisse bibendum ultrices risus. Facilisis neque eleifend diam orci id. Iaculis dignissim sed malesuada porttitor ac iaculis nullam donec sed volutpat quis vulputate sollicitudin tincidunt.'
  }
]

const categories: string[] = ['Mobile App', 'Landing Page', 'Web App']

export const featureProjectData: ProjectType[] = [
  {
    image: project1,
    category: categories[0],
    title: 'Task management app',
    description:
      'Odio mus adipiscing nunc sed viverra massa aliquam sit vestibulum maecenas arcu adipiscing tincidunt at velit pharetra varius sit.',
    tags: ['Product Strategy', 'Front end Development', 'Systems Design', 'Web Development']
  },
  {
    image: project2,
    category: categories[1],
    title: 'Landing page for electric scooters',
    description:
      'Vitae non luctus rhoncus ipsum feugiat luctus ornare. Pretium nulla sed quis duistristique orci. Odio in pellentesque urna sit facilisi convallis vel tempus.',
    tags: ['Product Strategy', 'Systems Design', 'Web Development']
  },
  {
    image: project3,
    category: categories[2],
    title: 'Сrypto market dashboard',
    description:
      'Donec donec ultricies feugiat imperdiet enim cras eget enim elementum eget ultrices praesent pretium morbi.',
    tags: ['Front end Development', 'Systems Design', 'Web Development']
  }
]

export const benefitsData: BenefitType[] = [
  {
    title: 'Prototype in 24 hrs',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id Imperdiet elit integer elit.'
  },
  {
    title: 'MVP within two weeks',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.'
  },
  {
    title: 'Kickstart development',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.'
  },
  {
    title: '24/7 Tech support',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id Imperdiet elit integer elit.'
  }
]

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
  }
]

const blogCategories: string[] = ['Business', 'Digital', 'Development']

export const blogData: BlogType[] = [
  {
    image: blog5,
    category: blogCategories[0],
    time: '12 hours ago',
    title: 'How to check the website before releasing?'
  },
  {
    image: blog7,
    category: blogCategories[1],
    time: '11 hours ago',
    title: 'Inclusive Marketing: Why and How Does it Work?'
  },
  {
    image: blog8,
    category: blogCategories[1],
    time: '10 hours ago',
    title: 'Your Guide to Optimising A JavaScript-enabled Website'
  }
]
