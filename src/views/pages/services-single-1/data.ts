import type { IconifyIcon } from '@iconify/vue'
import rocket from '@iconify/icons-bx/bx-rocket'
import like from '@iconify/icons-bx/bx-like'
import group from '@iconify/icons-bx/bx-group'
import timefive from '@iconify/icons-bx/bx-time-five'

import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'

type FeatureType = {
  icon: IconifyIcon
  title: string
  description: string
}

type WorkType = {
  title: string
  description: string
}

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export const featureData: FeatureType[] = [
  {
    icon: rocket,
    title: 'Innovative Solutions',
    description:
      'Massa enim libero dictum consectetur convallis lobortis cursus mi a magna ullamcorper consectetur.'
  },
  {
    icon: like,
    title: 'Success Guarantee',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam.'
  },
  {
    icon: group,
    title: 'Professional Team',
    description:
      'Pellentesque rhoncus viverra vestibu, purus purus quisque qui vestibulum facilisis dictumst consequat.'
  },
  {
    icon: timefive,
    title: 'On Time Service',
    description:
      'Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget neque adipiscing.'
  }
]

export const workData: WorkType[] = [
  {
    title: 'Collecting information to identify problem',
    description:
      'Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur commodo fermentum.'
  },
  {
    title: 'Conducting a user research',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam bibendum convallis.'
  },
  {
    title: 'Creating low-fidelity prototypes',
    description:
      'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque vestibulum facilisis dictumst consequat enim libero.'
  },
  {
    title: 'Building product MVP version',
    description:
      'Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget neque adipiscing lobortis cursus.'
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
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  }
]
