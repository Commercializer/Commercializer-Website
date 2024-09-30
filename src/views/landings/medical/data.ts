import type {
  FeatureType,
  ServiceType,
  TeamType,
  TestimonialType,
  NewsType,
  AuthorType
} from './type'

import doctorImg from '@/assets/img/landing/medical/icons/doctor.svg'
import ambulanceImg from '@/assets/img/landing/medical/icons/ambulance.svg'
import virusIMg from '@/assets/img/landing/medical/icons/virus.svg'

import cardiologyImg from '@/assets/img/landing/medical/services/cardiology.svg'
import scalpelImg from '@/assets/img/landing/medical/services/scalpel.svg'
import xrayImg from '@/assets/img/landing/medical/services/x-ray.svg'
import stethoscopeImg from '@/assets/img/landing/medical/services/stethoscope.svg'
import lungsImg from '@/assets/img/landing/medical/services/lungs.svg'
import toothImg from '@/assets/img/landing/medical/services/tooth.svg'

import team16Img from '@/assets/img/team/16.jpg'
import team17Img from '@/assets/img/team/17.jpg'
import team18Img from '@/assets/img/team/18.jpg'
import team19Img from '@/assets/img/team/19.jpg'
import team20Img from '@/assets/img/team/20.jpg'
import team21Img from '@/assets/img/team/21.jpg'
import team22Img from '@/assets/img/team/22.jpg'
import team23Img from '@/assets/img/team/23.jpg'

import avatar30Img from '@/assets/img/avatar/30.jpg'
import avatar32Img from '@/assets/img/avatar/32.jpg'
import avatar31Img from '@/assets/img/avatar/31.jpg'
import avatar34Img from '@/assets/img/avatar/34.jpg'
import avatar35Img from '@/assets/img/avatar/35.jpg'
import avatar33Img from '@/assets/img/avatar/33.jpg'
import avatar37Img from '@/assets/img/avatar/37.jpg'

import news1Img from '@/assets/img/landing/medical/news/01.jpg'
import news2Img from '@/assets/img/landing/medical/news/02.jpg'
import news3Img from '@/assets/img/landing/medical/news/03.jpg'
import news4Img from '@/assets/img/landing/medical/news/04.jpg'
import avatar36Img from '@/assets/img/avatar/36.jpg'
import avatar38Img from '@/assets/img/avatar/38.jpg'

import StarBxIcon from '@iconify/icons-bx/bx-star'
import cta1Img from '@/assets/img/landing/medical/cta/01.jpg'
import cta2Img from '@/assets/img/landing/medical/cta/02.jpg'

export const featureData: FeatureType[] = [
  {
    image: doctorImg,
    title: 'Find a Doctor',
    description: 'Search the right doctor by location and specialty.',
    linkLabel: 'See all doctors'
  },
  {
    image: ambulanceImg,
    title: 'Emergency Service',
    description: '(406) 555-0120',
    linkLabel: 'Contact us'
  },
  {
    image: virusIMg,
    title: 'COVID-19 Info',
    description: 'We offer quick COVID-19 testing by appointment.',
    linkLabel: 'Learn more'
  }
]

export const servicesData: ServiceType[] = [
  {
    image: cardiologyImg,
    title: 'Cardiology',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
    link: {
      name: 'landings.medical'
    }
  },
  {
    image: scalpelImg,
    title: 'Surgery',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
    link: {
      name: 'landings.medical'
    }
  },
  {
    image: xrayImg,
    title: 'Radiology',
    description: 'Faucibus cursus maecenas lorem cursus nibh.',
    link: {
      name: 'landings.medical'
    }
  },
  {
    image: stethoscopeImg,
    title: 'Family Medicine',
    description: 'Augue pulvinar justo, fermentum fames aliquam.',
    link: {
      name: 'landings.medical'
    }
  },
  {
    image: lungsImg,
    title: 'Pulmonary',
    description: 'Ullamcorper in magna varius quisque enim tempor iaculis proin sed.',
    link: {
      name: 'landings.medical'
    }
  },
  {
    image: toothImg,
    title: 'Dental Care',
    description: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit facilisis dolor arcu.',
    link: {
      name: 'landings.medical'
    }
  }
]

export const ctaData: FeatureType[] = [
  {
    image: cta1Img,
    title: 'New Service — Start Your Care Online Now',
    description:
      'Morbi lacus vulputate mauris ut et nunc, tempor. Placerat augue eu amet feugiat mi sagittis velit. Sed suscipit nunc suspendisse morbi pharetra libero consectetur. Proin eros sollicitudin augue tempus. Aliquet id sit donec aliquam.'
  },
  {
    image: cta2Img,
    title: 'Support Groups for Depression & Anxiety',
    description:
      'Magna cursus feugiat sed sodales praesent vehicula integer arcu. Felis duis lectus felis, tempus aliquet quis non. At integer consectetur eget nunc, fames. Et facilisi vel, luctus sed interdum vitae nec, velit. Maecenas purus et pharetra, at volutpat aenean.'
  }
]

export const teamData: TeamType[] = [
  {
    image: team16Img,
    name: 'Dr. Ronald Richards',
    expertise: 'Neurosurgeon',
    totalReview: 19,
    rating: 5
  },
  {
    image: team17Img,
    name: 'Dr. Esther Howard',
    expertise: 'Therapist',
    totalReview: 4,
    rating: 5
  },
  {
    image: team18Img,
    name: 'Dr. Jerome Bell',
    expertise: 'Anesthesiologist',
    totalReview: 12,
    rating: 4
  },
  {
    image: team19Img,
    name: 'Dr. Ralph Edwards',
    expertise: 'Surgeon',
    totalReview: 8,
    rating: 5
  },
  {
    image: team20Img,
    name: 'Dr. Darrell Steward',
    expertise: 'Cardiologist',
    totalReview: 14,
    rating: 4
  },
  {
    image: team21Img,
    name: 'Dr. Annette Black',
    expertise: 'Pediatrician',
    totalReview: 10,
    rating: 4
  },
  {
    image: team22Img,
    name: 'Dr. Dianne Russell',
    expertise: 'Dentist',
    totalReview: 5,
    rating: 5
  },
  {
    image: team23Img,
    name: 'Dr. Courtney Henry',
    expertise: 'Gynecologist',
    totalReview: 16,
    rating: 5
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar30Img,
    name: 'Fannie Summers'
  },
  {
    image: avatar32Img,
    name: 'Robert Fox'
  },
  {
    image: avatar31Img,
    name: 'Annette Black'
  },
  {
    image: avatar34Img,
    name: 'Jerome Bell'
  },
  {
    image: avatar35Img,
    name: 'Albert Flores'
  },
  {
    image: avatar33Img,
    name: 'Jenny Wilson'
  },
  {
    image: avatar37Img,
    name: 'Cameron Williamson'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    author: authorData[0]
  },
  {
    comment:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.',
    rating: 5,
    author: authorData[1]
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    author: authorData[2]
  },
  {
    comment:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    rating: 3,
    author: authorData[3]
  },
  {
    comment:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
    author: authorData[4]
  },
  {
    comment:
      'Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.',
    rating: 5,
    author: authorData[5]
  },
  {
    comment:
      'Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.',
    rating: 4,
    author: authorData[6]
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
  },
  {
    image: avatar37Img,
    name: 'Jenny Wilson',
    expertise: 'Ph.D. Physiology'
  }
]

const categories: string[] = ['Diseases', 'Healthy Tips', 'Psychology', 'Health']

export const newsData: NewsType[] = [
  {
    image: news1Img,
    category: categories[0],
    time: '12 hours ago',
    title: 'Updates on COVID-19 vaccination efforts in your area',
    author: newsAuthorData[0]
  },
  {
    image: news2Img,
    category: categories[1],
    time: '1 day ago',
    title: 'New drug to halt dementia after multiple head injuries',
    author: newsAuthorData[1]
  },
  {
    image: news3Img,
    category: categories[2],
    time: 'Nov 24, 2023',
    title: 'Empowering women to make their health a priority',
    author: newsAuthorData[2]
  },
  {
    image: news4Img,
    category: categories[3],
    time: 'Oct 13, 2023',
    title: 'Vitamin D: benefits, deficiency, sources, and dosage',
    author: newsAuthorData[3]
  }
]
