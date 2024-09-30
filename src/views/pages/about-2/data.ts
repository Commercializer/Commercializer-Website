import type { LeaderType, StatsType, BrandType, TestimonialType, UserType } from './type'

import headsetImg from '@/assets/img/about/icons/headset-light.svg'
import chatLightImg from '@/assets/img/about/icons/chat-light.svg'
import addGroupLightImg from '@/assets/img/about/icons/add-group-light.svg'
import locationLightImg from '@/assets/img/about/icons/location-light.svg'

import brands1Img from '@/assets/img/brands/01.svg'
import brands2Img from '@/assets/img/brands/02.svg'
import brands3Img from '@/assets/img/brands/03.svg'
import brands4Img from '@/assets/img/brands/04.svg'
import brands5Img from '@/assets/img/brands/05.svg'
import brands6Img from '@/assets/img/brands/06.svg'

import avatar5Img from '@/assets/img/avatar/05.jpg'
import avatar6Img from '@/assets/img/avatar/06.jpg'
import avatar1Img from '@/assets/img/avatar/01.jpg'

import team9Img from '@/assets/img/team/09.jpg'
import team10Img from '@/assets/img/team/10.jpg'
import team11Img from '@/assets/img/team/11.jpg'
import team12Img from '@/assets/img/team/12.jpg'
import team13Img from '@/assets/img/team/13.jpg'
import team14Img from '@/assets/img/team/14.jpg'
import team15Img from '@/assets/img/team/15.jpg'
import {
  LinkedinIcon,
  TwitterIcon,
  StackOverflowIcon,
  GithubIcon,
  DribbleIcon,
  InstagramIcon,
  BehanceIcon,
  FacebookIcon
} from '../about-1/data'

export const statsData: StatsType[] = [
  {
    image: headsetImg,
    number: 2480,
    content: 'Remote Professionals'
  },
  {
    image: chatLightImg,
    number: 1200,
    content: 'Requests per Week'
  },
  {
    image: addGroupLightImg,
    number: 760,
    content: 'New Clients per Month'
  },
  {
    image: locationLightImg,
    number: 58,
    content: 'Countries Using Our Product'
  }
]

export const brandData: BrandType[] = [
  {
    image: brands1Img
  },
  {
    image: brands2Img
  },
  {
    image: brands3Img
  },
  {
    image: brands4Img
  },
  {
    image: brands5Img
  },
  {
    image: brands6Img
  }
]

const userData: UserType[] = [
  {
    image: avatar5Img,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Company'
  },
  {
    image: avatar6Img,
    name: 'Annette Black',
    role: 'Strategic Advisor at Ipsum Ltd.'
  },
  {
    image: avatar1Img,
    name: 'Darrell Steward1',
    role: 'Project Manager at Company Ltd.'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.',
    user: userData[0]
  },
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.',
    user: userData[1]
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar.',
    user: userData[2]
  }
]

export const leaderData: LeaderType[] = [
  {
    image: team9Img,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    socialProfile: {
      icons: [FacebookIcon, LinkedinIcon, TwitterIcon]
    }
  },
  {
    image: team10Img,
    name: 'Darrell Steward',
    role: 'Lead Develope',
    socialProfile: {
      icons: [FacebookIcon, StackOverflowIcon, GithubIcon]
    }
  },
  {
    image: team11Img,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    socialProfile: {
      icons: [FacebookIcon, DribbleIcon, LinkedinIcon]
    }
  },
  {
    image: team12Img,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    socialProfile: {
      icons: [InstagramIcon, LinkedinIcon]
    }
  },
  {
    image: team13Img,
    name: 'Annette Black',
    role: 'Lead UI Designer1',
    socialProfile: {
      icons: [FacebookIcon, DribbleIcon, BehanceIcon]
    }
  },
  {
    image: team14Img,
    name: 'Marvin McKinney',
    role: 'Lead Designer',
    socialProfile: {
      icons: [FacebookIcon, LinkedinIcon]
    }
  },
  {
    image: team15Img,
    name: 'Esther Howard',
    role: 'Motion Designer',
    socialProfile: {
      icons: [FacebookIcon, DribbleIcon, BehanceIcon]
    }
  }
]
