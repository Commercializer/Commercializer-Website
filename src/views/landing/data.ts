import BootstrapIcon from '@iconify/icons-bx/bxl-bootstrap'
import FileIcon from '@iconify/icons-bx/bx-file'
import MobileIcon from '@iconify/icons-bx/bx-mobile'
import Html5Icon from '@iconify/icons-bx/bxl-html5'
import NodejsIcon from '@iconify/icons-bx/bxl-nodejs'
import SassIcon from '@iconify/icons-bx/bxl-sass'
import JavascriptIcon from '@iconify/icons-bx/bxl-javascript'

import type { DemoPageType, FeatureType, MoreFeatureType } from '@/views/landing/type'

import mobileApp1Img from '@/assets/img/landing/intro/landings/mobile-app-showcase-v1.jpg'
import mobileApp2Img from '@/assets/img/landing/intro/landings/mobile-app-showcase-v2.jpg'
import mobileApp3Img from '@/assets/img/landing/intro/landings/mobile-app-showcase-v3.jpg'
import productLandingImg from '@/assets/img/landing/intro/landings/product-landing.jpg'
import saas1Img from '@/assets/img/landing/intro/landings/saas-v1.jpg'
import saas2Img from '@/assets/img/landing/intro/landings/saas-v2.jpg'
import saas3Img from '@/assets/img/landing/intro/landings/saas-v3.jpg'
import saas4Img from '@/assets/img/landing/intro/landings/saas-v4.jpg'
import saas5Img from '@/assets/img/landing/intro/landings/saas-v5.jpg'
import startupImg from '@/assets/img/landing/intro/landings/startup.jpg'
import financialImg from '@/assets/img/landing/intro/landings/financial.jpg'
import onlineCourseImg from '@/assets/img/landing/intro/landings/online-courses.jpg'
import medicalImg from '@/assets/img/landing/intro/landings/medical.jpg'
import digitalAgencyImg from '@/assets/img/landing/intro/landings/digital-agency.jpg'
import softwareAgency1Img from '@/assets/img/landing/intro/landings/software-agency-v1.jpg'
import softwareAgency2Img from '@/assets/img/landing/intro/landings/software-agency-v2.jpg'
import softwareAgency3Img from '@/assets/img/landing/intro/landings/software-agency-v3.jpg'
import conferenceImg from '@/assets/img/landing/intro/landings/conference.jpg'
import blogHomepageImg from '@/assets/img/landing/intro/landings/blog-homepage.jpg'
import feature1Light from '@/assets/json/animation-feature-1-light.json'
import feature1Dark from '@/assets/json/animation-feature-1-dark.json'
import feature2Light from '@/assets/json/animation-feature-2-light.json'
import feature2Dark from '@/assets/json/animation-feature-2-dark.json'
import feature3Light from '@/assets/json/animation-feature-3-light.json'
import feature3Dark from '@/assets/json/animation-feature-3-dark.json'
import feature4Light from '@/assets/json/animation-feature-4-light.json'
import feature4Dark from '@/assets/json/animation-feature-4-dark.json'

export const featureData: FeatureType[] = [
  {
    title: 'Light / Dark Mode',
    animation: {
      light: feature1Light,
      dark: feature1Dark
    }
  },
  {
    title: 'Figma Files Included',
    animation: {
      light: feature2Light,
      dark: feature2Dark
    }
  },
  {
    title: '50+ UI Flexible Components',
    animation: {
      light: feature3Light,
      dark: feature3Dark
    }
  },
  {
    title: 'Free Lifetime Updates',
    animation: {
      light: feature4Light,
      dark: feature4Dark
    }
  }
]

export const demoLandingPagesData: DemoPageType[] = [
  {
    image: mobileApp1Img,
    title: 'Mobile App Showcase v.1',
    name: 'landings.mobile-app-1'
  },
  {
    image: mobileApp2Img,
    title: 'Mobile App Showcase v.2',
    name: 'landings.mobile-app-2'
  },
  {
    image: mobileApp3Img,
    title: 'Mobile App Showcase v.3',
    name: 'landings.mobile-app-3'
  },
  {
    image: productLandingImg,
    title: 'Product Landing',
    name: 'landings.product'
  },
  {
    image: saas1Img,
    title: 'SaaS v.1',
    name: 'landings.saas-1'
  },
  {
    image: saas2Img,
    title: 'SaaS v.2',
    name: 'landings.saas-2'
  },
  {
    image: saas3Img,
    title: 'SaaS v.3',
    name: 'landings.saas-3'
  },
  {
    image: saas4Img,
    title: 'SaaS v.4',
    name: 'landings.saas-4'
  },
  {
    image: saas5Img,
    title: 'SaaS v.5',
    name: 'landings.saas-5'
  },
  {
    image: startupImg,
    title: 'Startup',
    name: 'landings.startup'
  },
  {
    image: financialImg,
    title: 'Financial Consulting',
    name: 'landings.financial'
  },
  {
    image: onlineCourseImg,
    title: 'Online Courses',
    name: 'landings.online-course'
  },
  {
    image: medicalImg,
    title: 'Medical',
    name: 'landings.medical'
  },
  {
    image: digitalAgencyImg,
    title: 'Digital Agency',
    name: 'landings.digital-agency'
  },
  {
    image: softwareAgency1Img,
    title: 'Software Dev Agency v.1',
    name: 'landings.dev-agency-1'
  },
  {
    image: softwareAgency2Img,
    title: 'Software Dev Agency v.2',
    name: 'landings.dev-agency-2'
  },
  {
    image: softwareAgency3Img,
    title: 'Software Dev Agency v.3',
    name: 'landings.dev-agency-3'
  },
  {
    image: conferenceImg,
    title: 'Conference',
    name: 'landings.conference'
  },
  {
    image: blogHomepageImg,
    title: 'Blog Homepage',
    name: 'landings.blog'
  }
]

export const moreFeatureData: MoreFeatureType[] = [
  {
    icon: BootstrapIcon,
    title: 'Built with Bootstrap 5',
    description:
      'Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.'
  },
  {
    icon: FileIcon,
    title: 'Detailed Documentation',
    description:
      'Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.'
  },
  {
    icon: MobileIcon,
    title: 'Mobile Freindly Interface',
    description: `It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens.`
  },
  {
    icon: Html5Icon,
    title: 'W3C Valid HTML Code',
    description:
      'All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.'
  },
  {
    icon: NodejsIcon,
    title: 'Kick-Start Your Development',
    description:
      'Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.'
  },
  {
    icon: SassIcon,
    title: 'Easy to Customize with Sass',
    description:
      'Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.'
  },
  {
    icon: JavascriptIcon,
    title: 'Future Proof Java-Script',
    description:
      'Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.'
  }
  // {
  //   icon: '',
  //   title: 'Touch-Enabled Sliders',
  //   description: `In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.`
  // },
]
