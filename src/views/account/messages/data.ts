import avatar19 from '@/assets/img/avatar/19.jpg'
import avatar20 from '@/assets/img/avatar/20.jpg'
import avatar21 from '@/assets/img/avatar/21.jpg'
import avatar22 from '@/assets/img/avatar/22.jpg'
import avatar23 from '@/assets/img/avatar/23.jpg'
import avatar24 from '@/assets/img/avatar/24.jpg'
import avatar25 from '@/assets/img/avatar/25.jpg'
import avatar26 from '@/assets/img/avatar/26.jpg'
import avatar27 from '@/assets/img/avatar/27.jpg'
import avatar28 from '@/assets/img/avatar/28.jpg'

import type { ChatDataType, ContactType } from '@/views/account/messages/type'
import avatar29 from '@/assets/img/avatar/29.jpg'

const userData = [
  {
    image: avatar19,
    name: 'Devon Lane'
  },
  {
    image: avatar20,
    name: 'Albert Flores'
  },
  {
    image: avatar21,
    name: 'Bessie Cooper'
  },
  {
    image: avatar22,
    name: 'Ronald Richards'
  },
  {
    image: avatar23,
    name: 'Robert Fox'
  },
  {
    image: avatar24,
    name: 'Jerome Bell'
  },
  {
    image: avatar25,
    name: 'Kathryn Murphy'
  },
  {
    image: avatar26,
    name: 'Dianne Russell'
  },
  {
    image: avatar27,
    name: 'Cody Fisher'
  },
  {
    image: avatar28,
    name: 'Darlene Robertson'
  },
  {
    image: avatar29,
    name: 'John Doe'
  }
]
export const contactData: ContactType[] = [
  {
    user: userData[0],
    lastSeen: '18:02',
    lastMessage: 'Dolor, quam habitant...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  },
  {
    user: userData[1],
    lastSeen: '17:33',
    lastMessage: 'You are welcome 😊',
    isTyping: false,
    isActive: true,
    currentlyChatting: true
  },
  {
    user: userData[2],
    lastSeen: '12:04',
    isTyping: true,
    isActive: true,
    currentlyChatting: false
  },
  {
    user: userData[3],
    lastSeen: '08:00',
    lastMessage: 'Ok 👌',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  },
  {
    user: userData[4],
    lastSeen: '14 Nov',
    lastMessage: 'Praesent ut mi.',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  },
  {
    user: userData[5],
    lastSeen: '8 Oct',
    lastMessage: 'In pretium a eget nunc...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  },
  {
    user: userData[6],
    lastSeen: '16 Sep',
    lastMessage: 'Tempor amet?',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  },
  {
    user: userData[7],
    lastSeen: '27 Aug',
    lastMessage: 'Vehicula accumsan leo.',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  },
  {
    user: userData[8],
    lastSeen: '18 Aug',
    lastMessage: 'Erat cum amet viverra...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  },
  {
    user: userData[9],
    lastSeen: '13 Jul',
    lastMessage: 'Orci convallis eget sit...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false
  }
]

export const chatData: ChatDataType[] = [
  {
    date: 'November 27, 2023',
    chat: [
      {
        user: userData[1],
        message: ['Tellus, ipsum, commodo, dui ac. Ultrices mi arcu orci aliquam et.'],
        time: '09:04 am'
      },
      {
        user: userData[10],
        message: ['Orci convallis eget sit ultricies rutrum.'],
        time: '10:36 am'
      },
      {
        user: userData[1],
        message: [
          'Blandit tempus, erat cum amet viverra pharetra, morbi. Vivamus pretium tristique amet, nulla aenean sed blandit?'
        ],
        time: '14:48 pm'
      },
      {
        user: userData[10],
        message: [
          'Vel enim lacus, ac, fermentum, id. Aliquet faucibus pellentesque egestas.',
          'Thank you!'
        ],
        time: '16:29 pm'
      }
    ]
  },
  {
    date: 'November 28, 2023',
    chat: [
      {
        user: userData[1],
        message: ['You are welcome 😊'],
        time: '17:33 pm'
      }
    ]
  }
]
