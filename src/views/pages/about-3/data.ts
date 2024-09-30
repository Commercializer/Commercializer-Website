import type { BrandType, StoryType, MemberType, TestimonialType, UserType } from './type'

import avatar24 from '@/assets/img/team/24.jpg'
import avatar25 from '@/assets/img/team/25.jpg'
import avatar26 from '@/assets/img/team/26.jpg'
import avatar27 from '@/assets/img/team/27.jpg'
import avatar28 from '@/assets/img/team/28.jpg'
import avatar29 from '@/assets/img/team/29.jpg'
import avatar30 from '@/assets/img/team/30.jpg'
import avatar31 from '@/assets/img/team/31.jpg'

import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'

import avatar3Img from '@/assets/img/avatar/03.jpg'
import avatar2Img from '@/assets/img/avatar/02.jpg'
import avatar10Img from '@/assets/img/avatar/10.jpg'

export const storyData: StoryType[] = [
  {
    year: 2018,
    content:
      'Nibh in natoque ut blandit est sed massa quam massa. Nisi eu aenean tristique sed tortor tincidunt.'
  },
  {
    year: 2019,
    content:
      'Orci, lorem rutrum euismod est urna commodo. Dictum fringilla ac sit egestas pharetra tellus in tristique.'
  },
  {
    year: 2021,
    content:
      'Quisque felis in augue dolor. Risus, id pretium vitae a adipiscing adipiscing posuere maecenas.'
  },
  {
    year: 2023,
    content:
      'Nunc, sit tempus, varius est duis. Elementum commodo tincidunt mi quis arcu lorem consequat.'
  }
]

export const teamData: MemberType[] = [
  {
    image: avatar24,
    name: 'Ralph Edwards',
    position: 'Founder & CEO'
  },
  {
    image: avatar25,
    name: 'Albert Flores',
    position: 'Principal Consultant'
  },
  {
    image: avatar26,
    name: 'Jenny Wilson',
    position: 'UX Designer'
  },
  {
    image: avatar27,
    name: 'Marvin McKinney',
    position: 'Product Manager'
  },
  {
    image: avatar28,
    name: 'Esther Howard',
    position: 'VP of Strategy'
  },
  {
    image: avatar29,
    name: 'Cameron Williamson',
    position: 'Co-Founder'
  },
  {
    image: avatar30,
    name: 'Jerome Bell',
    position: 'Strategic Advisor'
  },
  {
    image: avatar31,
    name: 'Darrell Steward',
    position: 'Senior Project Manager'
  }
]

export const brandsData: BrandType[] = [
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
    image: avatar3Img,
    name: 'Annette Black',
    position: 'Co-founder of Lorem Company'
  },
  {
    image: avatar2Img,
    name: 'Robert Fox',
    position: 'CEO of Ipsum Company'
  },
  {
    image: avatar10Img,
    name: 'Jerome Bell',
    position: 'Founder of the Agency'
  },
  {
    image: avatar3Img,
    name: 'Annette Black',
    position: 'Co-founder of Lorem Company'
  },
  {
    image: avatar2Img,
    name: 'Robert Fox',
    position: 'CEO of Ipsum Company'
  },
  {
    image: avatar10Img,
    name: 'Jerome Bell',
    position: 'Founder of the Agency'
  }
]
export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.',
    user: userData[0],
    rating: 5
  },
  {
    comment:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    user: userData[1],
    rating: 4
  },
  {
    comment:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus...',
    user: userData[2],
    rating: 5
  },
  {
    comment:
      'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.',
    user: userData[3],
    rating: 4
  },
  {
    comment:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    user: userData[4],
    rating: 5
  },
  {
    comment:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus...',
    user: userData[5],
    rating: 4
  }
]
