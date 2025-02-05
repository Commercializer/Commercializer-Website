import path from 'path'

// const authRoutes = [
//   {
//     path: '/sign-in',
//     name: 'account.sign-in',
//     meta: {
//       title: 'Account - Sign In | Commercializer'
//     },
//     component: () => import('@/views/account/sign-in/index.vue')
//   },
//   {
//     path: '/sign-up',
//     name: 'account.sign-up',
//     meta: {
//       title: 'Account - Sign Up | Commercializer'
//     },
//     component: () => import('@/views/account/sign-up/index.vue')
//   }
// ]

const errorPageRoutes = [
    // {
    //   path: '/error-404-1',
    //   name: 'pages.error-404-1',
    //   meta: {
    //     title: '404 Not Found v1 | Commercializer'
    //   },
    //   component: () => import('@/views/pages/error-404-1/index.vue')
    // },
  {
    path: '/error',
    name: 'error',
    meta: {
      title: '404 Not Found | Commercializer'
    },
    component: () => import('@/views/Error404.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'error'
  }
]

const landingRoute = [
  {
    path: '',
    name: 'home-page',
    meta: {
      title: 'Commercializer | Venture Studio for Market-Leading Products ',
      meta: [
        { vmid: 'description', name: 'description', content: 'Transforming groundbreaking ideas into market-leading products. From strategy and branding to product innovation and launch - get commercialized with us!' },
        { property: 'og:title', content: 'Commercializer | Venture Studio for Market-Leading Products' },
        { property: 'og:description', content: 'Transforming groundbreaking ideas into market-leading products. From strategy and branding to product innovation and launch - get commercialized with us!' },
        { property: 'og:url', content: 'https://www.commercializer.global' },
        { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"},
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Commercializer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'commercializer.global' },
        { property: 'twitter:url', content: 'https://www.commercializer.global' },
        { name: 'twitter:title', content: 'Commercializer | Venture Studio for Market-Leading Products' },
        { name: 'twitter:description', content: 'Transforming groundbreaking ideas into market-leading products. From strategy and branding to product innovation and launch - get commercialized with us!' },
        { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
      ]
    },
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about-page',
    meta: {
      title: 'About Commercializer | Innovating, Building & Scaling Ventures',
      meta: [
        { vmid: 'description', name: 'description', content: 'Discover Commercializer’s mission to transform ideas into thriving businesses. We blend innovation, experience and commercial strategy to build market-leading products.' },
        { property: 'og:title', content: 'About Commercializer | Innovating, Building & Scaling Ventures' },
        { property: 'og:description', content: 'Discover Commercializer’s mission to transform ideas into thriving businesses. We blend innovation, experience and commercial strategy to build market-leading products.' },
        { property: 'og:url', content: 'https://www.commercializer.global/about' },
        { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"},
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Commercializer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'commercializer.global' },
        { property: 'twitter:url', content: 'https://www.commercializer.global/about' },
        { name: 'twitter:title', content: 'About Commercializer  | Innovating, Building & Scaling Ventures' },
        { name: 'twitter:description', content: 'Discover Commercializer’s mission to transform ideas into thriving businesses. We blend innovation, experience and commercial strategy to build market-leading products.' },
        { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
      ]
    },
    component: () => import('@/views/AboutPage.vue')
  },
  {
  path: '/contact',
  name: 'contact-page',
  meta: {
    title: 'Get Commercialized | Let’s Build Something Great Together',
    meta: [
      { vmid: 'description', name: 'description', content: 'Have an idea or project in mind? Get in touch with Commercializer for expert strategy, branding, and product innovation. Let’s turn your vision into reality!' },
      { property: 'og:title', content: 'Get Commercialized | Let’s Build Something Great Together' },
      { property: 'og:description', content: 'Have an idea or project in mind? Get in touch with Commercializer for expert strategy, branding, and product innovation. Let’s turn your vision into reality!' },
      { property: 'og:url', content: 'https://www.commercializer.global/contact' },
      { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896" },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Commercializer' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:domain', content: 'commercializer.global' },
      { property: 'twitter:url', content: 'https://www.commercializer.global/contact' },
      { name: 'twitter:title', content: 'Contact Commercializer | Let’s Build Something Great Together' },
      { name: 'twitter:description', content: 'Have an idea or project in mind? Get in touch with Commercializer for expert strategy, branding, and product innovation. Let’s turn your vision into reality!' },
      { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
    ]
  },
  component: () => import('@/views/ContactPage.vue')
  },
  // {
  //   path: '/landing',
  //   name: 'landing',
  //   meta: {
  //     title: 'Commercializer | Multipurpose Business / Technology Template | Commercializer',
  //     authRequired: false
  //   },
  //   component: () => import('@/views/landing/index.vue')
  // },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    meta: {
      title: 'Privacy Policy | How Commercializer Protects Your Data',
      meta: [
        { vmid: 'description', name: 'description', content: 'Your privacy matters. Learn how Commercializer collects, uses, and protects your data with transparency and security. Read our full Privacy Policy here.' },
        { property: 'og:title', content: 'Privacy Policy | How Commercializer Protects Your Data' },
        { property: 'og:description', content: 'Your privacy matters. Learn how Commercializer collects, uses, and protects your data with transparency and security. Read our full Privacy Policy here.' },
        { property: 'og:url', content: 'https://www.commercializer.global/privacy-policy' },
        { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896" },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Commercializer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'commercializer.global' },
        { property: 'twitter:url', content: 'https://www.commercializer.global/privacy-policy' },
        { name: 'twitter:title', content: 'Privacy Policy | How Commercializer Protects Your Data' },
        { name: 'twitter:description', content: 'Your privacy matters. Learn how Commercializer collects, uses, and protects your data with transparency and security. Read our full Privacy Policy here.' },
        { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
      ],
      authRequired: false
    },
    component: () => import('../views/PrivacyPolicyPage.vue')
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    meta: {
      title: 'Terms of Use | Commercializer’s Guidelines & Policies',
      meta: [
        { vmid: 'description', name: 'description', content: 'Understand the terms of using Commercializer’s services. Explore our guidelines, policies, and legal agreements to ensure a smooth experience.' },
        { property: 'og:title', content: 'Terms of Use | Commercializer’s Guidelines & Policies' },
        { property: 'og:description', content: 'Understand the terms of using Commercializer’s services. Explore our guidelines, policies, and legal agreements to ensure a smooth experience.' },
        { property: 'og:url', content: 'https://www.commercializer.global/terms-of-use' },
        { property: 'og:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896" },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Commercializer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'commercializer.global' },
        { property: 'twitter:url', content: 'https://www.commercializer.global/terms-of-use' },
        { name: 'twitter:title', content: 'Terms of Use | Commercializer’s Guidelines & Policies' },
        { name: 'twitter:description', content: 'Understand the terms of using Commercializer’s services. Explore our guidelines, policies, and legal agreements to ensure a smooth experience.' },
        { name: 'twitter:image', content: "https://opengraph.b-cdn.net/production/images/0faa5c61-b1ce-40b3-97fd-3e2173469fc1.png?token=mh1AG4KVf4qqp_sjW2ZxtBXhIq-2ADYt1S4nrSiExro&height=630&width=1200&expires=33274664896"}
      ],
      authRequired: false
    },
    component: () => import('../views/TermsOfUsePage.vue')
  }
]

// const landingsRoutes = [
//   {
//     path: '',
//     name: 'landings',
//     meta: { authRequired: true },
//     children: [
//       {
//         path: '/mobile-app-1',
//         name: 'landings.mobile-app-1',
//         meta: {
//           title: 'Mobile App Showcase Landing v.1 | Commercializer'
//         },
//         component: () => import('@/views/landings/mobile-app-1/index.vue')
//       },
//       {
//         path: '/mobile-app-2',
//         name: 'landings.mobile-app-2',
//         meta: {
//           title: 'Mobile App Showcase Landing v.2 | Commercializer'
//         },
//         component: () => import('@/views/landings/mobile-app-2/index.vue')
//       },
//       {
//         path: '/mobile-app-3',
//         name: 'landings.mobile-app-3',
//         meta: {
//           title: 'Mobile App Showcase Landing v.3 | Commercializer'
//         },
//         component: () => import('@/views/landings/mobile-app-3/index.vue')
//       },
//       {
//         path: '/product',
//         name: 'landings.product',
//         meta: {
//           title: 'Product Landing | Commercializer'
//         },
//         component: () => import('@/views/landings/product/index.vue')
//       },
//       {
//         path: '/saas-1',
//         name: 'landings.saas-1',
//         meta: {
//           title: 'SaaS Landing v.1 | Commercializer'
//         },
//         component: () => import('@/views/landings/saas-1/index.vue')
//       },
//       {
//         path: '/saas-2',
//         name: 'landings.saas-2',
//         meta: {
//           title: 'SaaS Landing v.2 | Commercializer'
//         },
//         component: () => import('@/views/landings/saas-2/index.vue')
//       },
//       {
//         path: '/saas-3',
//         name: 'landings.saas-3',
//         meta: {
//           title: 'SaaS Landing v.3 | Commercializer'
//         },
//         component: () => import('@/views/landings/saas-3/index.vue')
//       },
//       {
//         path: '/saas-4',
//         name: 'landings.saas-4',
//         meta: {
//           title: 'SaaS Landing v.4 | Commercializer'
//         },
//         component: () => import('@/views/landings/saas-4/index.vue')
//       },
//       {
//         path: '/saas-5',
//         name: 'landings.saas-5',
//         meta: {
//           title: 'SaaS Landing v.5 | Commercializer'
//         },
//         component: () => import('@/views/landings/saas-5/index.vue')
//       },
//       {
//         path: '/startup',
//         name: 'landings.startup',
//         meta: {
//           title: 'Startup Landing | Commercializer'
//         },
//         component: () => import('@/views/landings/startup/index.vue')
//       },
//       {
//         path: '/financial',
//         name: 'landings.financial',
//         meta: {
//           title: 'Financial Consulting Landing | Commercializer'
//         },
//         component: () => import('@/views/landings/financial/index.vue')
//       },
//       {
//         path: '/online-course',
//         name: 'landings.online-course',
//         meta: {
//           title: 'Online Courses Landing | Commercializer'
//         },
//         component: () => import('@/views/landings/online-course/index.vue')
//       },
//       {
//         path: '/medical',
//         name: 'landings.medical',
//         meta: {
//           title: 'Medical Landing | Commercializer'
//         },
//         component: () => import('@/views/landings/medical/index.vue')
//       },
//       {
//         path: '/software-dev-agency-1',
//         name: 'landings.dev-agency-1',
//         meta: {
//           title: 'Software Dev Agency Landing v.1 | Commercializer'
//         },
//         component: () => import('@/views/landings/dev-agency-1/index.vue')
//       },
//       {
//         path: '/software-dev-agency-2',
//         name: 'landings.dev-agency-2',
//         meta: {
//           title: 'Software Dev Agency Landing v.2 | Commercializer'
//         },
//         component: () => import('@/views/landings/dev-agency-2/index.vue')
//       },
//       {
//         path: '/software-dev-agency-3',
//         name: 'landings.dev-agency-3',
//         meta: {
//           title: 'Software Dev Agency Landing v.3 | Commercializer'
//         },
//         component: () => import('@/views/landings/dev-agency-3/index.vue')
//       },
//       {
//         path: '/conference',
//         name: 'landings.conference',
//         meta: {
//           title: 'Conference Landing | Commercializer'
//         },
//         component: () => import('@/views/landings/conference/index.vue')
//       },
//       {
//         path: '/digital-agency',
//         name: 'landings.digital-agency',
//         meta: {
//           title: 'Digital Agency Landing | Commercializer'
//         },
//         component: () => import('@/views/landings/digital-agency/index.vue')
//       },
//       {
//         path: '/blog',
//         name: 'landings.blog',
//         meta: {
//           title: 'Blog Homepage | Commercializer'
//         },
//         component: () => import('@/views/landings/blog/index.vue')
//       }
//     ]
//   }
// ]

// const pagesRoutes = [
//   {
//     path: '/pages',
//     name: 'pages',
//     meta: { authRequired: true },
//     children: [
//       {
//         path: 'about-1',
//         name: 'pages.about-1',
//         meta: {
//           title: 'About v.1 | Commercializer'
//         },
//         component: () => import('@/views/pages/about-1/index.vue')
//       },
//       {
//         path: 'about-2',
//         name: 'pages.about-2',
//         meta: {
//           title: 'About v.2 | Commercializer'
//         },
//         component: () => import('@/views/pages/about-2/index.vue')
//       },
//       {
//         path: 'about-3',
//         name: 'pages.about-3',
//         meta: {
//           title: 'About v.3 | Commercializer'
//         },
//         component: () => import('@/views/pages/about-3/index.vue')
//       },
//       {
//         path: 'list-view-with-sidebar',
//         name: 'pages.list-view-with-sidebar',
//         meta: {
//           title: 'Blog List With Sidebar | Commercializer'
//         },
//         component: () => import('@/views/pages/list-view-with-sidebar/index.vue')
//       },
//       {
//         path: 'grid-view-with-sidebar',
//         name: 'pages.grid-view-with-sidebar',
//         meta: {
//           title: 'Blog Grid With Sidebar | Commercializer'
//         },
//         component: () => import('@/views/pages/grid-view-with-sidebar/index.vue')
//       },
//       {
//         path: 'list-view-no-sidebar',
//         name: 'pages.list-view-no-sidebar',
//         meta: {
//           title: 'Blog List With No Sidebar | Commercializer'
//         },
//         component: () => import('@/views/pages/list-view-no-sidebar/index.vue')
//       },
//       {
//         path: 'grid-view-no-sidebar',
//         name: 'pages.grid-view-no-sidebar',
//         meta: {
//           title: 'Blog Grid With No Sidebar | Commercializer'
//         },
//         component: () => import('@/views/pages/grid-view-no-sidebar/index.vue')
//       },
//       {
//         path: 'simple-feed',
//         name: 'pages.simple-feed',
//         meta: {
//           title: 'Blog Simple Feed | Commercializer'
//         },
//         component: () => import('@/views/pages/simple-feed/index.vue')
//       },
//       {
//         path: 'single-post',
//         name: 'pages.single-post',
//         meta: {
//           title: 'Blog Simple Post | Commercializer'
//         },
//         component: () => import('@/views/pages/single-post/index.vue')
//       },
//       {
//         path: 'podcast',
//         name: 'pages.podcast',
//         meta: {
//           title: 'Blog Single Podcast | Commercializer'
//         },
//         component: () => import('@/views/pages/podcast/index.vue')
//       },
//       {
//         path: 'grid-view',
//         name: 'pages.grid-view',
//         meta: {
//           title: 'Portfolio Grid View | Commercializer'
//         },
//         component: () => import('@/views/pages/grid-view/index.vue')
//       },
//       {
//         path: 'list-view',
//         name: 'pages.list-view',
//         meta: {
//           title: 'Portfolio List View | Commercializer'
//         },
//         component: () => import('@/views/pages/list-view/index.vue')
//       },
//       {
//         path: 'slider',
//         name: 'pages.slider',
//         meta: {
//           title: 'Portfolio Slider View | Commercializer'
//         },
//         component: () => import('@/views/pages/slider/index.vue')
//       },
//       {
//         path: 'courses',
//         name: 'pages.courses',
//         meta: {
//           title: 'Courses | Commercializer'
//         },
//         component: () => import('@/views/pages/courses/index.vue')
//       },
//       {
//         path: 'single-project',
//         name: 'pages.single-project',
//         meta: {
//           title: 'Portfolio Single Project | Commercializer'
//         },
//         component: () => import('@/views/pages/single-project/index.vue')
//       },
//       {
//         path: 'single-course',
//         name: 'pages.single-course',
//         meta: {
//           title: 'Single Course | Commercializer'
//         },
//         component: () => import('@/views/pages/single-course/index.vue')
//       },
//       {
//         path: 'services-1',
//         name: 'pages.services-1',
//         meta: {
//           title: 'Services v.1 | Commercializer'
//         },
//         component: () => import('@/views/pages/services-1/index.vue')
//       },
//       {
//         path: 'services-2',
//         name: 'pages.services-2',
//         meta: {
//           title: 'Services v.2  | Commercializer'
//         },
//         component: () => import('@/views/pages/services-2/index.vue')
//       },
//       {
//         path: 'services-single-1',
//         name: 'pages.services-single-1',
//         meta: {
//           title: 'Service Details v.1 | Commercializer'
//         },
//         component: () => import('@/views/pages/services-single-1/index.vue')
//       },
//       {
//         path: 'services-single-2',
//         name: 'pages.services-single-2',
//         meta: {
//           title: 'Service Details v.2 | Commercializer'
//         },
//         component: () => import('@/views/pages/services-single-2/index.vue')
//       },
//       {
//         path: 'pricing',
//         name: 'pages.pricing',
//         meta: {
//           title: 'Pricing | Commercializer'
//         },
//         component: () => import('@/views/pages/pricing/index.vue')
//       },
//       {
//         path: 'contacts-1',
//         name: 'pages.contacts-1',
//         meta: {
//           title: 'Contacts v.1 | Commercializer'
//         },
//         component: () => import('@/views/pages/contacts-1/index.vue')
//       },
//       {
//         path: 'contacts-2',
//         name: 'pages.contacts-2',
//         meta: {
//           title: 'Contacts v.2 | Commercializer'
//         },
//         component: () => import('@/views/pages/contacts-2/index.vue')
//       },
//       {
//         path: 'contacts-3',
//         name: 'pages.contacts-3',
//         meta: {
//           title: 'Contacts v.3 | Commercializer'
//         },
//         component: () => import('@/views/pages/contacts-3/index.vue')
//       }
//     ]
//   }
// ]

// const accountRoutes = [
//   {
//     path: '/account',
//     name: 'account',
//     meta: { authRequired: true },
//     children: [
//       {
//         path: 'details',
//         name: 'account.details',
//         meta: {
//           title: 'Account - Details | Commercializer'
//         },
//         component: () => import('@/views/account/details/index.vue')
//       },
//       {
//         path: 'security',
//         name: 'account.security',
//         meta: {
//           title: 'Account - Security | Commercializer'
//         },
//         component: () => import('@/views/account/security/index.vue')
//       },
//       {
//         path: 'notifications',
//         name: 'account.notifications',
//         meta: {
//           title: 'Account - Notification | Commercializer'
//         },
//         component: () => import('@/views/account/notifications/index.vue')
//       },
//       {
//         path: 'messages',
//         name: 'account.messages',
//         meta: {
//           title: 'Account - Message | Commercializer'
//         },
//         component: () => import('@/views/account/messages/index.vue')
//       },
//       {
//         path: 'saved-items',
//         name: 'account.saved-items',
//         meta: {
//           title: 'Account - Saved Items | Commercializer'
//         },
//         component: () => import('@/views/account/saved-items/index.vue')
//       },
//       {
//         path: 'collections',
//         name: 'account.collections',
//         meta: {
//           title: 'Account - Collections | Commercializer'
//         },
//         component: () => import('@/views/account/collections/index.vue')
//       },
//       {
//         path: 'payment',
//         name: 'account.payment',
//         meta: {
//           title: 'Account - Payment | Commercializer'
//         },
//         component: () => import('@/views/account/payment/index.vue')
//       }
//     ]
//   }
// ]

// const uiRoutes = [
//   {
//     path: '/ui',
//     name: 'ui',
//     meta: { authRequired: true },
//     children: [
//       {
//         path: 'typography',
//         name: 'ui.typography',
//         meta: {
//           title: 'Typography | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Typography.vue')
//       },
//       {
//         path: 'code',
//         name: 'ui.code',
//         meta: {
//           title: 'Code | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Code.vue')
//       },
//       {
//         path: 'images',
//         name: 'ui.images',
//         meta: {
//           title: 'Images | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Images.vue')
//       },
//       {
//         path: 'tables',
//         name: 'ui.tables',
//         meta: {
//           title: 'Tables | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Tables.vue')
//       },
//       {
//         path: 'accordion',
//         name: 'ui.accordion',
//         meta: {
//           title: 'Accordion | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Accordion.vue')
//       },
//       {
//         path: 'alerts',
//         name: 'ui.alerts',
//         meta: {
//           title: 'Alerts | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Alerts.vue')
//       },
//       {
//         path: 'audio-player',
//         name: 'ui.audio-player',
//         meta: {
//           title: 'AudioPlayer | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/AudioPlayer.vue')
//       },
//       {
//         path: 'badges',
//         name: 'ui.badges',
//         meta: {
//           title: 'Badges | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Badges.vue')
//       },
//       {
//         path: 'blog-components',
//         name: 'ui.blog-components',
//         meta: {
//           title: 'Blog Components | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/BlogComponents.vue')
//       },
//       {
//         path: 'breadcrumb',
//         name: 'ui.breadcrumb',
//         meta: {
//           title: 'Breadcrumb | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Breadcrumb.vue')
//       },
//       {
//         path: 'buttons',
//         name: 'ui.buttons',
//         meta: {
//           title: 'Buttons | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Buttons.vue')
//       },
//       {
//         path: 'buttons-group',
//         name: 'ui.buttons-group',
//         meta: {
//           title: 'ButtonGroup | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/ButtonGroup.vue')
//       },
//       {
//         path: 'card',
//         name: 'ui.card',
//         meta: {
//           title: 'Card | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Card.vue')
//       },
//       {
//         path: 'carousel',
//         name: 'ui.carousel',
//         meta: {
//           title: 'Carousel | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Carousel.vue')
//       },
//       {
//         path: 'collapse',
//         name: 'ui.collapse',
//         meta: {
//           title: 'Collapse | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Collapse.vue')
//       },
//       {
//         path: 'dropdowns',
//         name: 'ui.dropdowns',
//         meta: {
//           title: 'Dropdowns | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Dropdowns.vue')
//       },
//       {
//         path: 'forms',
//         name: 'ui.forms',
//         meta: {
//           title: 'Forms | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Forms.vue')
//       },
//       {
//         path: 'gallery',
//         name: 'ui.gallery',
//         meta: {
//           title: 'Gallery | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Gallery.vue')
//       },
//       {
//         path: 'image-comparison-slider',
//         name: 'ui.image-comparison-slider',
//         meta: {
//           title: 'Image Comparison Slider | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/ImageComparisonSlider.vue')
//       },
//       {
//         path: 'input-group',
//         name: 'ui.input-group',
//         meta: {
//           title: 'InputGroup | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/InputGroup.vue')
//       },
//       {
//         path: 'list-group',
//         name: 'ui.list-group',
//         meta: {
//           title: 'ListGroup | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/ListGroup.vue')
//       },
//       {
//         path: 'modal',
//         name: 'ui.modal',
//         meta: {
//           title: 'Modal | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Modal.vue')
//       },
//       {
//         path: 'navbar',
//         name: 'ui.navbar',
//         meta: {
//           title: 'Navbar | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Navbar.vue')
//       },
//       {
//         path: 'offcanvas',
//         name: 'ui.offcanvas',
//         meta: {
//           title: 'Offcanvas | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Offcanvas.vue')
//       },
//       {
//         path: 'pagination',
//         name: 'ui.pagination',
//         meta: {
//           title: 'Pagination | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Pagination.vue')
//       },
//       {
//         path: 'parallax',
//         name: 'ui.parallax',
//         meta: {
//           title: 'Parallax | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Parallax.vue')
//       },
//       {
//         path: 'pills',
//         name: 'ui.pills',
//         meta: {
//           title: 'Pills | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Pills.vue')
//       },
//       {
//         path: 'placeholders',
//         name: 'ui.placeholders',
//         meta: {
//           title: 'Placeholders | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Placeholders.vue')
//       },
//       {
//         path: 'popovers',
//         name: 'ui.popovers',
//         meta: {
//           title: 'Popovers | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Popovers.vue')
//       },
//       {
//         path: 'portfolio-components',
//         name: 'ui.portfolio-components',
//         meta: {
//           title: 'Portfolio Components | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/PortfolioComponents.vue')
//       },
//       {
//         path: 'pricing',
//         name: 'ui.pricing',
//         meta: {
//           title: 'Pricing | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Pricing.vue')
//       },
//       {
//         path: 'progressbar',
//         name: 'ui.progressbar',
//         meta: {
//           title: 'Progressbar | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Progressbar.vue')
//       },
//       {
//         path: 'social-buttons',
//         name: 'ui.social-buttons',
//         meta: {
//           title: 'Social Buttons | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/SocialButtons.vue')
//       },
//       {
//         path: 'spinners',
//         name: 'ui.spinners',
//         meta: {
//           title: 'Spinners | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Spinners.vue')
//       },
//       {
//         path: 'steps',
//         name: 'ui.steps',
//         meta: {
//           title: 'Steps | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Steps.vue')
//       },
//       {
//         path: 'tabs',
//         name: 'ui.tabs',
//         meta: {
//           title: 'Tabs | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Tabs.vue')
//       },
//       {
//         path: 'team',
//         name: 'ui.team',
//         meta: {
//           title: 'Team | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Team.vue')
//       },
//       {
//         path: 'testimonial',
//         name: 'ui.testimonial',
//         meta: {
//           title: 'Testimonial | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Testimonial.vue')
//       },
//       {
//         path: 'toasts',
//         name: 'ui.toasts',
//         meta: {
//           title: 'Toast | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Toast.vue')
//       },
//       {
//         path: 'tooltips',
//         name: 'ui.tooltips',
//         meta: {
//           title: 'Tooltips | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Tooltips.vue')
//       },
//       {
//         path: 'video-popup',
//         name: 'ui.video-popup',
//         meta: {
//           title: 'VideoPopup | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/VideoPopup.vue')
//       },
//       {
//         path: 'utilities',
//         name: 'ui.utilities',
//         meta: {
//           title: 'Utilities | Commercializer UI Kit'
//         },
//         component: () => import('@/views/ui-kit/Utilities.vue')
//       }
//     ]
//   }
// ]

export const allRoutes = [
  // ...authRoutes,
  ...errorPageRoutes,
  ...landingRoute
  // ...landingsRoutes,
  // ...pagesRoutes,
  // ...accountRoutes,
  // ...uiRoutes
]
