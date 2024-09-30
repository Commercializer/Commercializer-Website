import chatImg from '@/assets/img/landing/saas-1/features/chat.svg'
import analyticsImg from '@/assets/img/landing/saas-1/features/analytics.svg'
import bellImg from '@/assets/img/landing/saas-1/features/bell.svg'
import tasksImg from '@/assets/img/landing/saas-1/features/tasks.svg'
import calendarImg from '@/assets/img/landing/saas-1/features/calendar.svg'
import addGroupImg from '@/assets/img/landing/saas-1/features/add-group.svg'
import headsetImg from '@/assets/img/landing/saas-1/features/headset.svg'
import shieldImg from '@/assets/img/landing/saas-1/features/shield.svg'
import googleImg from '@/assets/img/brands/google.svg'
import zoomImg from '@/assets/img/brands/zoom.svg'
import slackImg from '@/assets/img/brands/slack.svg'
import gmaillImg from '@/assets/img/brands/gmail.svg'
import trelloImg from '@/assets/img/brands/trello.svg'
import mailchimpImg from '@/assets/img/brands/mailchimp.svg'
import dropboxIMg from '@/assets/img/brands/dropbox.svg'
import evernoteImg from '@/assets/img/brands/evernote.svg'
import avatar14Img from '@/assets/img/avatar/14.jpg'
import avatar13Img from '@/assets/img/avatar/13.jpg'
import avatar11Img from '@/assets/img/avatar/11.jpg'
import useCase1Img from '@/assets/img/landing/saas-1/use-cases/01.png'
import useCase2Img from '@/assets/img/landing/saas-1/use-cases/02.png'
import useCase3Img from '@/assets/img/landing/saas-1/use-cases/03.png'
import useCase4Img from '@/assets/img/landing/saas-1/use-cases/04.png'

import StarIcon from '@iconify/icons-bx/bx-star'
import BriefcaseAlt2ICon from '@iconify/icons-bx/bx-briefcase-alt-2'
import RocketIcon from '@iconify/icons-bx/bx-rocket'
import BatChartAlt2Icon from '@iconify/icons-bx/bx-bar-chart-alt-2'

import type { WorkType, FeatureType, TestimonialType, WorkToolType, UseCaseType } from './type'

export const featuresData: FeatureType[] = [
  {
    image: chatImg,
    title: 'Task Comments',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
  },
  {
    image: analyticsImg,
    title: 'Tasks Analytics',
    description: 'Augue pulvinar justo, fermentum fames aliquamant accumsan vestibulum.'
  },
  {
    image: bellImg,
    title: 'Notifications',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'
  },
  {
    image: tasksImg,
    title: 'Sections &amp; Subtasks',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.<'
  },
  {
    image: calendarImg,
    title: 'Progress Tracking',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.'
  },
  {
    image: addGroupImg,
    title: 'Multiple Assignees',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'
  },
  {
    image: headsetImg,
    title: 'Support 24/7',
    description: 'Sapien sed massa sit erat pellentesque pellentesque nisl, elementum.'
  },
  {
    image: shieldImg,
    title: 'Data Security',
    description: 'Aliquet felis facilisi sem nunc. Sapien fermentum, fringilla molestie lorem nec.'
  }
]

export const workData: WorkType[] = [
  {
    title: 'Powerful project management'
  },
  {
    title: 'Transparent work management'
  },
  {
    title: 'Manage work & focus on the most important tasks'
  },
  {
    title: 'Track your progress with interactive charts'
  },
  {
    title: 'Easiest way to track time spent on tasks'
  }
]

export const useCasesData: UseCaseType[] = [
  {
    icon: StarIcon,
    title: 'Project Management',
    description:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    image: useCase1Img
  },
  {
    icon: BriefcaseAlt2ICon,
    title: 'Remote Work',
    description:
      'Ut ornare quisque blandit condimentum nec viverra habitant non. Consequat id leo bibendum enim, fringilla pulvinar volutpat fames. Ut fames ut sed lobortis nulla. In dui enim et pharetra gravida diam semper lectus tellus. Faucibus mi convallis.',
    image: useCase2Img
  },
  {
    icon: RocketIcon,
    title: 'Product Release',
    description:
      'Fames netus pretium massa lobortis sit metus et. Sit risus odio fermentum hac fames enim, ac, in. Neque lacus, consequat hendrerit potenti in tristique dictum. Tortor nec lorem et venenatis facilisis risus viverra nunc, eu. Eget suscipit vel amet.',
    image: useCase3Img
  },
  {
    icon: BatChartAlt2Icon,
    title: 'Campaign Planning',
    description:
      'Diam bibendum scelerisque vel mauris magna. Iaculis interdum tincidunt eget nibh purus. Aliquet at sit morbi nisi volutpat fermentum scelerisque. Enim tincidunt eros sodales integer sapien. Eu ullamcorper egestas odio nunc faucibus. Sapien eu nunc sed facilisi luctus ac.',
    image: useCase4Img
  }
]

const usersData = [
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
    image: avatar11Img,
    name: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.'
  }
]
export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada.',
    user: usersData[0]
  },
  {
    comment:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus.',
    user: usersData[1]
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa.',
    user: usersData[2]
  }
]

export const workToolsData: WorkToolType[] = [
  {
    image: googleImg
  },
  {
    image: zoomImg
  },
  {
    image: slackImg
  },
  {
    image: gmaillImg
  },
  {
    image: trelloImg
  },
  {
    image: mailchimpImg
  },
  {
    image: dropboxIMg
  },
  {
    image: evernoteImg
  }
]
