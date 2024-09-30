import ideas from '@/assets/img/landing/digital-agency/icons/idea.svg'
import award from '@/assets/img/landing/digital-agency/icons/award.svg'
import team from '@/assets/img/landing/digital-agency/icons/team.svg'
import service1 from '@/assets/img/landing/digital-agency/services/01.png'
import service2 from '@/assets/img/landing/digital-agency/services/02.png'
import service3 from '@/assets/img/landing/digital-agency/services/03.png'
import service4 from '@/assets/img/landing/digital-agency/services/04.png'
import service5 from '@/assets/img/landing/digital-agency/services/05.png'

import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'

import avatar1 from '@/assets/img/testimonials/01.jpg'
import avatar2 from '@/assets/img/testimonials/02.jpg'
import avatar3 from '@/assets/img/testimonials/03.jpg'

import webby from '@/assets/img/landing/digital-agency/awards/webby.svg'
import cssda from '@/assets/img/landing/digital-agency/awards/cssda.svg'
import awwwards from '@/assets/img/landing/digital-agency/awards/awwwards.svg'
import fwa from '@/assets/img/landing/digital-agency/awards/fwa.svg'

import avatar8Img from '@/assets/img/avatar/08.jpg'
import avatar9Img from '@/assets/img/avatar/09.jpg'
import avatar10Img from '@/assets/img/avatar/10.jpg'

import blog1 from '@/assets/img/landing/digital-agency/blog/01.jpg'
import blog2 from '@/assets/img/landing/digital-agency/blog/02.jpg'
import blog3 from '@/assets/img/landing/digital-agency/blog/03.jpg'

import type {
  FeatureType,
  ServiceType,
  BrandType,
  TestimonialType,
  UserType,
  AuthorType,
  BlogType
} from '@/views/landings/digital-agency/type'

export const featureData: FeatureType[] = [
  {
    image: ideas,
    title: 'Creative Solutions',
    description: 'Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.'
  },
  {
    image: award,
    title: 'Award Winning',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.'
  },
  {
    image: team,
    title: 'Team of Professionals',
    description: 'Nam venenatis urna aenean quis feugiat et senectus turpis.'
  }
]

export const servicesData: ServiceType[] = [
  {
    image: service1,
    title: 'Digital Marketing',
    description:
      'Nisi, sed accumsan tincidunt pulvinar sapien. Neque, adipiscing posuere amet eget cursus mattis egestas nec quam. Tellus in lectus volutpat tellus bibendum. Etiam id phasellus in proin tristique. Semper habitasse volutpat et urna dui sed in pellentesque purus. Convallis viverra faucibus lacus nunc venenatis.'
  },
  {
    image: service2,
    title: 'Web Development',
    description:
      'Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.'
  },
  {
    image: service3,
    title: 'Application Development',
    description:
      'Morbi tristique justo, ut ac facilisi vel. Faucibus tortor libero commodo maecenas commodo sed. Sapien, vitae senectus turpis enim habitasse ipsum justo. Sagittis vel tortor velit dapibus dictum facilisis dictumst aliquam. Et, tempus euismod non semper vitae egestas semper eget turpis. Eros, pellentesque sed ut faucibus ac egestas leo metus.'
  },
  {
    image: service4,
    title: 'Strategy',
    description:
      'Non bibendum mauris velit at enim. Vel tellus nunc malesuada pellentesque feugiat nibh mauris blandit. Tempus, ut vulputate feugiat quis molestie sit eu blandit rhoncus. Iaculis eget magna sit eget eget massa. Diam nunc dolor tristique lectus imperdiet. Nunc, vitae etiam venenatis arcu turpis sollicitudin amet sit. Ac dapibus non erat sed. Auctor eleifend mattis scelerisque gravida felis nibh. Habitant nascetur turpis ullamcorper.'
  },
  {
    image: service5,
    title: 'Digital Advertising',
    description:
      'Nulla odio diam, arcu dictum neque nec cursus. Vel, aliquam nisl ridiculus sed. Pulvinar lectus ac pellentesque sollicitudin tristique aliquet ullamcorper in eu. Tincidunt porta magna faucibus neque, nunc gravida sagittis. Ut tellus sed odio laoreet. Molestie sit viverra maecenas nisl felis consequat.'
  }
]

export const brandData: BrandType[] = [
  {
    image: brand1SvgImg,
    name: 'Lorem Ltd.'
  },
  {
    image: brand2SvgImg,
    name: 'Company LLC'
  },
  {
    image: brand3SvgImg,
    name: 'Ipsum Ltd.'
  },
  {
    image: brand4SvgImg
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  },
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

const userData: UserType[] = [
  {
    image: avatar1,
    name: 'Ralph Edwards',
    role: 'Head of Marketing',
    brand: brandData[0]
  },
  {
    image: avatar2,
    name: 'Annette Black',
    role: 'Strategic Advisor',
    brand: brandData[1]
  },
  {
    image: avatar3,
    name: 'Darrell Steward',
    role: 'Project Manager',
    brand: brandData[2]
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment: `Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.`,
    user: userData[0]
  },
  {
    comment: `Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.`,
    user: userData[1]
  },
  {
    comment: `Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.`,
    user: userData[2]
  }
]

export const awardData = [
  {
    image: webby,
    title: '4x mobile of the day'
  },
  {
    image: cssda,
    title: '1x Kudos'
  },
  {
    image: awwwards,
    title: '3x website of the day'
  },
  {
    image: fwa,
    title: '2x best website'
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar10Img,
    name: 'Jerome Bell',
    expertise: 'Marketing Specialist'
  },
  {
    image: avatar8Img,
    name: 'Annette Black',
    expertise: 'Product Manager'
  },
  {
    image: avatar9Img,
    name: 'Marvin McKinney',
    expertise: 'Senior UI/UX Designer'
  }
]

const categories = ['Digital', 'Design', 'Tips & Advice']

export const blogData: BlogType[] = [
  {
    time: '12 hours ago',
    cover: blog1,
    author: authorData[0],
    category: categories[0],
    title: 'A study on smartwatch design qualities and people’s preferences',
    link: { name: '' },
    liked: 8,
    commented: 7,
    shared: 4
  },
  {
    time: '1 day ago',
    cover: blog2,
    author: authorData[1],
    category: categories[1],
    title: 'Brand analysis: second step to the brand identity',
    link: { name: '' },
    liked: 8,
    commented: 7,
    shared: 4
  },
  {
    time: 'May 24, 2023',
    cover: blog3,
    author: authorData[2],
    category: categories[2],
    title: 'How to check the website before releasing it?',
    link: { name: '' },
    liked: 8,
    commented: 7,
    shared: 4
  }
]
