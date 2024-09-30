import scooterImg from '@/assets/img/landing/startup/icons/riding-scooter.svg'
import diamondImg from '@/assets/img/landing/startup/icons/diamond.svg'
import planetImg from '@/assets/img/landing/startup/icons/planet.svg'
import step1Img from '@/assets/img/landing/startup/steps/01.svg'
import step2Img from '@/assets/img/landing/startup/steps/02.svg'
import step3Img from '@/assets/img/landing/startup/steps/03.svg'
import step4Img from '@/assets/img/landing/startup/steps/04.svg'
import mobileImg from '@/assets/img/landing/startup/icons/mobile.svg'
import handImg from '@/assets/img/landing/startup/icons/hand.svg'
import smileyImg from '@/assets/img/landing/startup/icons/smiley.svg'

import type { FeatureType, ProcessType, BenefitType } from './type'

export const featureData: FeatureType[] = [
  {
    image: scooterImg,
    title: 'Freedom of movement',
    description:
      'Integer laoreet aliquam mi, est at vitae, egestas. Nisl proin ipsum dui, sagittis mauris vel arcu lacinia massa.'
  },
  {
    image: diamondImg,
    title: 'Quality & style',
    description:
      'Nunc aliquam arcu pretium mauris nibh quisque quis. Urna purus fringilla iaculis turpis libero mattis commodo.'
  },
  {
    image: planetImg,
    title: 'Cities made for living',
    description:
      'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh diam volutpat posuere venenatis.'
  }
]

export const processData: ProcessType[] = [
  {
    image: step1Img,
    title: 'Find a scooter nearby',
    description:
      'Use the map in the app to find your closest scooter. You can also book it 40 minutes in advance.'
  },
  {
    image: step2Img,
    title: 'Start the ride',
    description:
      'To start your ride, scan the QR code with your app and tap on "Start ride". Hit the throttle to go and pull the brakes to slow.'
  },
  {
    image: step3Img,
    title: 'Enjoy your ride!',
    description: `When you're riding past traffic, be sure to follow all street signs and laws. Please ride safely and be mindful of where you park. Make sure you're wearing a helmet.`
  },
  {
    image: step4Img,
    title: 'Park carefully',
    description:
      'After your ride, park the scooter safely and out of the way of pedestrian and car traffic - your community will appreciate it. Finally lock it by tapping on "End ride".'
  }
]

export const benefitData: BenefitType[] = [
  {
    image: mobileImg,
    title: 'Trial app',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo venenatis.'
  },
  {
    image: scooterImg,
    title: 'High-end scooters',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'
  },
  {
    image: handImg,
    title: 'Lowest price for riding',
    description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.'
  },
  {
    image: smileyImg,
    title: 'Happiness guarantee',
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris pretium.'
  }
]
