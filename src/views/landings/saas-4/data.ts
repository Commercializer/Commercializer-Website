import industry1Img from '@/assets/img/landing/software-agency-3/industries/01.jpg'
import industry2Img from '@/assets/img/landing/software-agency-3/industries/02.jpg'
import industry3Img from '@/assets/img/landing/software-agency-3/industries/03.jpg'

import type { IndustryType, BlogType, UserType } from './type'
import avatar9Img from '@/assets/img/avatar/09.jpg'

export const industryData: IndustryType[] = [
  {
    image: industry1Img,
    name: ' Finance and insurance',
    about:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Et enim ultrices nunc, nunc. In iaculis venenatis at sit.'
  },
  {
    image: industry2Img,
    name: 'Startup and technology',
    about:
      'Nunc, amet et, et at habitant. Eget quis justo, metus at metus sapien. Urna quisque rutrum pharetra pulvinar vitae quam blandit non. Orci tempor cursus egestas quis orci at nisi maecenas. Enim in ultrices tortor, nibh quis sollicitudin tellus non maecenas. In libero ut semper nunc magna tortor.'
  },
  {
    image: industry3Img,
    name: 'E-commerce',
    about:
      'Vivamus nisl sit volutpat laoreet ligula et. Nunc, duis est justo, cras ipsum vulputate eget tellus augue. Amet, sagittis ut enim nisl commodo, pharetra. Sapien imperdiet tristique interdum aliquet varius vitae facilisis vel. Erat convallis eget elit eget iaculis. Morbi id facilisis ligula odio sed amet suspendisse duis aliquet. Justo quam convallis id sed.'
  }
]

const userData: UserType[] = [
  {
    image: avatar9Img,
    name: 'Esther Howard'
  },
  {
    image: avatar9Img,
    name: 'Esther Howard'
  }
]

export const blogData: BlogType[] = [
  {
    time: 'Sep 10, 2023',
    user: userData[0],
    title: 'A Study on Smartwatch Design Qualities and People&apos;s Preferences',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    liked: 8,
    commented: 7,
    shared: 4
  },
  {
    time: 'Sep 10, 2023',
    user: userData[1],
    title: 'A Study on Smartwatch Design Qualities and People&apos;s Preferences',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    liked: 8,
    commented: 7,
    shared: 4
  }
]
