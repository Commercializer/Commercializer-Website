import type {
  AwardsType,
  BenefitType,
  SocialNetworkType,
  TeamMemberType,
  TestimonialType,
  UserType
} from './type'
import { Icon } from '@iconify/vue'

import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import DribbleIcon from '@iconify/icons-bx/bxl-dribbble'
import BehanceIcon from '@iconify/icons-bx/bxl-behance'
import StackOverflowIcon from '@iconify/icons-bx/bxl-stack-overflow'
import GithubIcon from '@iconify/icons-bx/bxl-github'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'

export {
  LinkedinIcon,
  TwitterIcon,
  DribbleIcon,
  BehanceIcon,
  StackOverflowIcon,
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon
}

import ideaImg from '@/assets/img/landing/digital-agency/icons/idea.svg'
import awardImg from '@/assets/img/landing/digital-agency/icons/award.svg'
import teamImg from '@/assets/img/landing/digital-agency/icons/team.svg'

import webbyImg from '@/assets/img/landing/digital-agency/awards/webby.svg'
import cssdaImg from '@/assets/img/landing/digital-agency/awards/cssda.svg'
import awwwardsImg from '@/assets/img/landing/digital-agency/awards/awwwards.svg'
import fwaImg from '@/assets/img/landing/digital-agency/awards/fwa.svg'

import avatar14Img from '@/assets/img/avatar/14.jpg'
import avatar13Img from '@/assets/img/avatar/13.jpg'
import avatar12Img from '@/assets/img/avatar/12.jpg'

import team1Img from '@/assets/img/team/01.jpg'
import team2Img from '@/assets/img/team/02.jpg'
import team3Img from '@/assets/img/team/03.jpg'
import team4Img from '@/assets/img/team/04.jpg'
import team5Img from '@/assets/img/team/05.jpg'
import team6Img from '@/assets/img/team/06.jpg'
import team7Img from '@/assets/img/team/07.jpg'
import team8Img from '@/assets/img/team/08.jpg'

export const benefitsData: BenefitType[] = [
  {
    image: ideaImg,
    title: 'Creative Solutions',
    description: 'Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.'
  },
  {
    image: awardImg,
    title: 'Award Winning',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.'
  },
  {
    image: teamImg,
    title: 'Team of Professionals',
    description: 'Nam venenatis urna aenean quis feugiat et senectus turpis.'
  }
]

export const awardsData: AwardsType[] = [
  {
    image: webbyImg,
    title: '4x mobile of the day'
  },
  {
    image: cssdaImg,
    title: '1x Kudos'
  },
  {
    image: awwwardsImg,
    title: '3x website of the day'
  },
  {
    image: fwaImg,
    title: '2x best website'
  }
]

const userData: UserType[] = [
  {
    image: avatar14Img,
    name: 'Annette Black',
    role: 'Strategic Advisor at Company LLC'
  },
  {
    image: avatar13Img,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Ltd.'
  },
  {
    image: avatar12Img,
    name: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus.',
    user: userData[0]
  },
  {
    comment:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    user: userData[1]
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare.',
    user: userData[2]
  }
]

export const teamMemberData: TeamMemberType[] = [
  {
    image: team1Img,
    name: 'Jenny Wilson',
    role: 'Co-Founder & CEO',
    socialProfile: {
      icon: [FacebookIcon, LinkedinIcon, TwitterIcon]
    }
  },

  {
    image: team2Img,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    socialProfile: {
      icon: [FacebookIcon, LinkedinIcon, TwitterIcon]
    }
  },
  {
    image: team3Img,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    socialProfile: {
      icon: [FacebookIcon, DribbleIcon, LinkedinIcon]
    }
  },
  {
    image: team4Img,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    socialProfile: {
      icon: [FacebookIcon, TwitterIcon, LinkedinIcon]
    }
  },
  {
    image: team5Img,
    name: 'Marvin McKinney',
    role: 'Lead Designer',
    socialProfile: {
      icon: [FacebookIcon, BehanceIcon, DribbleIcon]
    }
  },
  {
    image: team6Img,
    name: 'Esther Howard',
    role: 'Motion Designer',
    socialProfile: {
      icon: [FacebookIcon, DribbleIcon, BehanceIcon]
    }
  },
  {
    image: team7Img,
    name: 'Darrell Steward',
    role: 'Lead Develope',
    socialProfile: {
      icon: [FacebookIcon, StackOverflowIcon, GithubIcon]
    }
  },
  {
    image: team8Img,
    name: 'Jane Cooper',
    role: 'Senior Project Manager',
    socialProfile: {
      icon: [FacebookIcon, LinkedinIcon, TwitterIcon]
    }
  }
]

const socialId: string[] = ['silicon', '@silicon', 'silicon inc.']
export const socialNetworkData: SocialNetworkType[] = [
  {
    icon: FacebookIcon,
    title: 'Facebook',
    socialId: socialId[0]
  },
  {
    icon: InstagramIcon,
    title: 'Instagram',
    socialId: socialId[1]
  },
  {
    icon: TwitterIcon,
    title: 'Twitter',
    socialId: socialId[1]
  },
  {
    icon: LinkedinIcon,
    title: 'LinkedIn',
    socialId: socialId[2]
  },
  {
    icon: YoutubeIcon,
    title: 'YouTube',
    socialId: socialId[0]
  },
  {
    icon: DribbleIcon,
    title: 'Dribbble',
    socialId: socialId[0]
  }
]
