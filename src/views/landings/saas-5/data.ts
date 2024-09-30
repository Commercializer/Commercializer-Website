import ecommerceImg from '@/assets/img/landing/saas-5/categories/ecommerce.jpg'
import transportationImg from '@/assets/img/landing/saas-5/categories/transportation.jpg'
import marketingImg from '@/assets/img/landing/saas-5/categories/marketing.jpg'
import roboticsImg from '@/assets/img/landing/saas-5/categories/robotics.jpg'
import programmingImg from '@/assets/img/landing/saas-5/categories/programming.jpg'
import envatoLightImg from '@/assets/img/landing/app-showcase-3/integrations/envato-color-light.svg'
import envatoDarkImg from '@/assets/img/landing/app-showcase-3/integrations/envato-color-dark.svg'
import avatar54Img from '@/assets/img/avatar/54.jpg'
import firefoxLightImg from '@/assets/img/landing/app-showcase-3/integrations/firefox-color-light.svg'
import firefoxDarkImg from '@/assets/img/landing/app-showcase-3/integrations/firefox-color-dark.svg'
import magentoLightImg from '@/assets/img/landing/app-showcase-3/integrations/magento-color-light.svg'
import magentoDarkImg from '@/assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg'
import avatar55Img from '@/assets/img/avatar/55.jpg'
import pingdomLightImg from '@/assets/img/landing/app-showcase-3/integrations/pingdom-color-light.svg'
import pingdomDarkImg from '@/assets/img/landing/app-showcase-3/integrations/pingdom-color-dark.svg'
import avatar56Img from '@/assets/img/avatar/56.jpg'
import woocommerceLightImg from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-color-light.svg'
import woocommerceDarkImg from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-color-dark.svg'
import shopifyLightImg from '@/assets/img/landing/app-showcase-3/integrations/shopify-color-light.svg'
import shopifyDarkImg from '@/assets/img/landing/app-showcase-3/integrations/shopify-color-dark.svg'
import laravelImg from '@/assets/img/landing/app-showcase-3/integrations/laravel-color.svg'
import viteLightImg from '@/assets/img/landing/app-showcase-3/integrations/vite-color-light.svg'
import viteDarkImg from '@/assets/img/landing/app-showcase-3/integrations/vite-color-dark.svg'
import angularLightImg from '@/assets/img/landing/app-showcase-3/integrations/angular-color-light.svg'
import angularDarkImg from '@/assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import CartAltIcon from '@iconify/icons-bx/bx-cart-alt'
import CalendarIcon from '@iconify/icons-bx/bx-calendar'
import EnvelopeIcon from '@iconify/icons-bx/bx-envelope'
import CodeAltIcon from '@iconify/icons-bx/bx-code-alt'
import FileIcon from '@iconify/icons-bx/bx-file'
import InfoCircleIcon from '@iconify/icons-bx/bx-info-circle'
import EditIcon from '@iconify/icons-bx/bx-edit'
import GithubIcon from '@iconify/icons-bx/bxl-github'
import MessageDotIcon from '@iconify/icons-bx/bx-message-dots'
import FileFindIcon from '@iconify/icons-bx/bx-file-find'
import TerminalIcon from '@iconify/icons-bx/bx-terminal'
import SearchIcon from '@iconify/icons-bx/bx-search'

import type { categoriesType, TestimonialType, PricingType, FooterType, AuthorType } from './type'

export const categoriesData: categoriesType[] = [
  {
    head: 'E-commerce',
    description: 'Order processing, price suggestions, user research',
    image: ecommerceImg
  },
  {
    head: 'Transportation',
    description: 'Itinerary planning, freight pricing culculations, etc.',
    image: transportationImg
  },
  {
    head: 'Marketing',
    description: 'Market research, data visualization, user testing',
    image: marketingImg
  },
  {
    head: 'Robotics',
    description: 'Enhancing robot learning, improve robotic precision',
    image: roboticsImg
  },
  {
    head: 'Programming',
    description: 'Code generation, code debugging and optimization',
    image: programmingImg
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar54Img,
    name: 'Emma Johnson',
    position: 'CEO, Co-Founder'
  },
  {
    name: 'Robert Thompson',
    position: 'Chief Information Officer'
  },
  {
    image: avatar55Img,
    name: 'Christopher Davis',
    position: 'Network Administrator'
  },
  {
    image: avatar56Img,
    name: 'Samantha Grace',
    position: 'Data Analyst'
  },
  {
    name: 'William Matthews',
    position: 'Software Developer'
  },
  {
    name: 'Olivia Rodriguez',
    position: 'Human Resources'
  },
  {
    name: 'Benjamin Smith',
    position: 'Project Manager'
  },
  {
    name: 'Abigail Collins',
    position: 'Chief Technology Officer'
  },
  {
    name: 'Elijah Brown',
    position: 'Project Manager'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    image: {
      light: envatoLightImg,
      dark: envatoDarkImg
    },
    feedback: `Streamline your workflow and save valuable time with this SaaS platform\'s powerful AI models, which takes care of the heavy lifting and delivers top-notch results.`,
    author: authorData[0]
  },
  {
    image: {
      light: firefoxLightImg,
      dark: firefoxDarkImg
    },
    feedback: `Transform your business with this SaaS platform's outstanding AI models API, which delivers unparalleled efficiency, great service, and outstanding results.`,
    author: authorData[1]
  },
  {
    image: {
      light: magentoLightImg,
      dark: magentoDarkImg
    },
    feedback: `Differentiate your app from the competition with this SaaS platform's outstanding performance and exceptional API for implementing AI models into your application.`,
    author: authorData[2]
  },
  {
    image: {
      light: pingdomLightImg,
      dark: pingdomDarkImg
    },
    feedback: `Experience game-changing AI models that are accessible and user-friendly, thanks to this exceptional SaaS platform that offers an API for seamless integration.`,
    author: authorData[3]
  },
  {
    image: {
      light: woocommerceLightImg,
      dark: woocommerceDarkImg
    },
    feedback: `This SaaS platform offers an API for integrating AI models into your app with ease, delivering impressive results and enabling you to take your business to the next level.`,
    author: authorData[4]
  },
  {
    image: {
      light: shopifyLightImg,
      dark: shopifyDarkImg
    },
    feedback: `Get ahead of the competition with this SaaS platform's AI models API, which effortlessly automates processes and delivers exceptional service to ensure your success.`,
    author: authorData[5]
  },
  {
    image: {
      light: laravelImg,
      dark: laravelImg
    },
    feedback: `Implementing AI models has never been easier or more reliable, thanks to this SaaS platform's seamless API integration and accurate, dependable results.`,
    author: authorData[6]
  },
  {
    image: {
      light: viteLightImg,
      dark: viteDarkImg
    },
    feedback: `Stay ahead of the curve and leverage cutting-edge technology with this SaaS platform's unparalleled performance and impressive results.`,
    author: authorData[7]
  },
  {
    image: {
      light: angularLightImg,
      dark: angularDarkImg
    },
    feedback: `Efficiently harness the power of AI models with this reliable and easy-to-use SaaS platform, featuring an API that provides excellent support and streamlines your processes.`,
    author: authorData[8]
  }
]

export const pricingData: PricingType[] = [
  {
    head: 'Data Models Infrastructure Cost',
    title1: 'Included',
    description1: 'Cloud hosted AI/ML capacities',
    title2: 'From $10k to $50k',
    description2: 'per month'
  },
  {
    head: 'Engineering Cost',
    title1: 'Included',
    description1: 'with our premium plans',
    title2: 'From $25k to $30k',
    description2: 'per engineer per month'
  },
  {
    head: 'Time to Implement',
    title1: 'Get started in minutes',
    title2: 'Average 6-9 months',
    description2: 'depends on team qualification'
  },
  {
    head: 'Maintenance & Operational Cost',
    title1: 'Included',
    description1: 'with our premium plans',
    title2: 'Average $20k',
    description2: 'per engineer per month'
  }
]

export const footerIntegrationData: FooterType[] = [
  {
    icon: ShareAltIcon,
    title: 'Social networks',
    content: 'Facebook, Instagram, Twitter...'
  },
  {
    icon: CartAltIcon,
    title: 'E-commerce',
    content: 'Shopify, WordPress, Magento...'
  },
  {
    icon: CalendarIcon,
    title: 'Task / time management',
    content: 'Trello, Notion, Asana, Teams...'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email / Chat apps',
    content: 'Gmail, MailChimp, Telegram...'
  },
  {
    icon: CodeAltIcon,
    title: 'Code editors',
    content: 'VS Code, Web Storm, Atom...'
  }
]

export const footerResourcesData: FooterType[] = [
  {
    icon: FileIcon,
    title: 'Documentation',
    content: 'API, knowledge base, tutorials'
  },
  {
    icon: InfoCircleIcon,
    title: 'Help center',
    content: 'FAQs, articles, community forum'
  },
  {
    icon: EditIcon,
    title: 'Blog articles',
    content: 'Recent news and updates'
  },
  {
    icon: GithubIcon,
    title: 'GitHub projects',
    content: 'Use our open source projects'
  }
]

export const footerAimodelData: FooterType[] = [
  {
    icon: MessageDotIcon, //set svg
    title: 'Generative model',
    content: 'Generation of texts and images'
  },
  {
    icon: MessageDotIcon,
    title: 'Speech recognition',
    content: 'Transforms voice speech into text'
  },
  {
    icon: FileFindIcon,
    title: 'Files transcription',
    content: 'Converts different types of files'
  },
  {
    icon: TerminalIcon,
    title: 'Code generation',
    content: 'Autocompletion and generation'
  },
  {
    icon: SearchIcon,
    title: 'Smart search',
    content: 'Responds to search queries'
  }
]
