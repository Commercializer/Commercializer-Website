import team17 from '@/assets/img/team/17.jpg'
import team18 from '@/assets/img/team/18.jpg'
import team19 from '@/assets/img/team/19.jpg'
import team21 from '@/assets/img/team/21.jpg'

import news1 from '@/assets/img/landing/medical/news/01.jpg'
import news2 from '@/assets/img/landing/medical/news/02.jpg'
import news3 from '@/assets/img/landing/medical/news/03.jpg'
import news4 from '@/assets/img/landing/medical/news/04.jpg'

import icons1 from '@/assets/img/services/single/icons/01.svg'
import icons2 from '@/assets/img/services/single/icons/02.svg'
import icons3 from '@/assets/img/services/single/icons/03.svg'
import icons4 from '@/assets/img/services/single/icons/04.svg'
import icons5 from '@/assets/img/services/single/icons/05.svg'
import icons6 from '@/assets/img/services/single/icons/06.svg'

import avatar36Img from '@/assets/img/avatar/36.jpg'
import avatar37Img from '@/assets/img/avatar/37.jpg'
import avatar38Img from '@/assets/img/avatar/38.jpg'

import type {
  DentalServiceType,
  PricingType,
  NewsType,
  MemberType,
  AuthorType
} from '@/views/pages/services-single-2/type'

export const memberData: MemberType[] = [
  {
    image: team17,
    name: 'Esther Howard',
    expertise: 'Dentist',
    reviews: 4,
    rating: 5
  },
  {
    image: team18,
    name: 'Jerome Bell',
    expertise: 'Dentist',
    reviews: 12,
    rating: 4
  },
  {
    image: team19,
    name: 'Ralph Edwards',
    expertise: 'surgeon',
    reviews: 8,
    rating: 5
  },
  {
    image: team21,
    name: 'Annette Black',
    expertise: 'Dentist',
    reviews: 10,
    rating: 4
  }
]

export const pricingData: PricingType[] = [
  {
    title: 'Surgery and Implantation',
    price: 120
  },
  {
    title: 'Full teeth cleaning',
    price: 1200
  },
  {
    title: 'Therapeutic dentistry',
    price: 500
  },
  {
    title: 'Aesthetic dentistry',
    price: 2000
  },
  {
    title: 'Professional oral hygiene',
    price: 100
  },
  {
    title: 'Full teeth cleaning',
    price: 1300
  }
]

const newsAuthorData: AuthorType[] = [
  {
    image: avatar36Img,
    name: 'Ralph Edwards',
    expertise: 'MBBS, MD Gynaecology'
  },
  {
    image: avatar37Img,
    name: 'Jenny Wilson',
    expertise: 'Ph.D. Physiology'
  },
  {
    image: avatar38Img,
    name: 'Albert Flores',
    expertise: 'M.Sc. Clinical Neuroscience'
  }
]

const categories: string[] = ['Diseases', 'Healthy Tips', 'Psychology', 'Health']

export const newsData: NewsType[] = [
  {
    image: news1,
    category: categories[0],
    title: 'Updates on COVID-19 vaccination efforts in your area',
    time: '12 hours ago',
    author: newsAuthorData[0]
  },
  {
    image: news2,
    category: categories[1],
    title: 'New drug to halt dementia after multiple head injuries',
    time: '1 day ago',
    author: newsAuthorData[1]
  },
  {
    image: news3,
    category: categories[2],
    title: 'Empowering women to make their health a priority',
    time: 'Oct 13, 2023',
    author: newsAuthorData[2]
  },
  {
    image: news4,
    category: categories[3],
    title: 'Vitamin D: benefits, deficiency, sources, and dosage',
    time: 'Oct 13, 2023',
    author: newsAuthorData[1]
  }
]

export const dentalServiceLeftData: DentalServiceType[] = [
  {
    image: icons1,
    service: 'Dental cleaning',
    description: 'Mi ac neque gravida sit tellus elit tellus nunc ultricies semper velit sagittis'
  },
  {
    image: icons2,
    service: 'Surgery and implant',
    description: 'Diam sed sit praesent in porttitor mi posuere sem in sit arcu massa'
  },
  {
    image: icons3,
    service: 'Thooth removal',
    description: 'Mi habitasse in mollis orci elementum duis ultricies vehicula nullam tristique'
  }
]

export const dentalServiceRightData: DentalServiceType[] = [
  {
    image: icons4,
    service: 'Thooth implant',
    description: 'Bibendum massa nam enim erat suspendisse sagittis risus urna'
  },
  {
    image: icons5,
    service: 'Full teeth cleaning',
    description: 'Nisiner elit leo aliquam vulputate venenatis pellentesque pulvinar'
  },
  {
    image: icons6,
    service: 'Aesthetic dentistry',
    description: 'Pellentesque rhoncus viverra vestibulum, purus purus'
  }
]
