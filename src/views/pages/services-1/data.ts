import cms from '@/assets/img/services/icons/cms.svg'
import rocket from '@/assets/img/services/icons/rocket.svg'
import app from '@/assets/img/services/icons/mobile-app.svg'
import analytics from '@/assets/img/services/icons/analytics.svg'
import websearch from '@/assets/img/services/icons/web-search.svg'
import timer from '@/assets/img/services/icons/timer.svg'

import avatar5Img from '@/assets/img/avatar/05.jpg'
import avatar6Img from '@/assets/img/avatar/06.jpg'
import avatar1Img from '@/assets/img/avatar/01.jpg'

import brand4 from '@/assets/img/brands/04.svg'
import brand2 from '@/assets/img/brands/02.svg'
import brand1 from '@/assets/img/brands/01.svg'

import testimonial1 from '@/assets/img/testimonials/01.jpg'
import testimonial2 from '@/assets/img/testimonials/02.jpg'
import testimonial3 from '@/assets/img/testimonials/03.jpg'

import feature1 from '@/assets/img/landing/software-agency-1/features/01.svg'
import feature2 from '@/assets/img/landing/software-agency-1/features/02.svg'
import feature3 from '@/assets/img/landing/software-agency-1/features/03.svg'
import feature4 from '@/assets/img/landing/software-agency-1/features/04.svg'

import type {
  TestimonialType,
  ServiceType,
  FeatureType,
  AuthorType,
  BrandType
} from '@/views/pages/services-1/type'

export const serviceData: ServiceType[] = [
  {
    image: cms,
    title: 'Custom Software Development',
    description:
      'Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.',
    link: { name: 'pages.services-single-1' }
  },
  {
    image: rocket,
    title: 'Software Integration',
    description:
      'Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.',
    link: { name: 'pages.services-single-1' }
  },
  {
    image: app,
    title: 'Mobile App Development',
    description:
      'Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi.',
    link: { name: 'pages.services-single-1' }
  },
  {
    image: analytics,
    title: 'Business Analytics',
    description:
      'Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed.',
    link: { name: 'pages.services-single-1' }
  },
  {
    image: websearch,
    title: 'Software Testing',
    description:
      'Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.',
    link: { name: 'pages.services-single-1' }
  },
  {
    image: timer,
    title: 'Project Management',
    description:
      'Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.',
    link: { name: 'pages.services-single-1' }
  }
]

const brandData: BrandType[] = [
  {
    image: brand4
  },
  {
    image: brand2
  },
  {
    image: brand1
  }
]

const authorData: AuthorType[] = [
  {
    image: testimonial1,
    name: 'Darrell Steward1',
    role: 'Project Manager',
    brand: brandData[0]
  },
  {
    image: testimonial2,
    name: 'Annette Black',
    role: 'Strategic Advisor',
    brand: brandData[1]
  },
  {
    image: testimonial3,
    name: 'Ralph Edwards',
    role: 'Head of Marketing',
    brand: brandData[2]
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar.',
    author: authorData[0]
  },
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.',
    author: authorData[1]
  },
  {
    comment:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.',
    author: authorData[2]
  }
]

export const featureData: FeatureType[] = [
  {
    image: feature1,
    title: 'Build a functional prototype in 24 hrs'
  },
  {
    image: feature2,
    title: 'Create an MVP within two weeks'
  },
  {
    image: feature3,
    title: 'Kickstart software development'
  },
  {
    image: feature4,
    title: 'Get 24/7 tech &amp; business support'
  }
]
