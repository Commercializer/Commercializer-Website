import type { ChildrenLinkType, NavLinkType, SidebarLinkType } from '@/layouts/type'
import DesktopIcon from '@iconify/icons-bx/desktop'
import FileIcon from '@iconify/icons-bx/bx-file'
import landingsImg from '@/assets/img/landings.jpg'

export const navbarLinkData: NavLinkType[] = [
  // {
  //   title: 'Landings',
  //   image: landingsImg,
  //   links: [
  //     {
  //       title: 'Template Intro Page',
  //       children: [
  //         {
  //           title: 'Mobile App Showcase v.1',
  //           link: { name: 'landings.mobile-app-1' }
  //         },
  //         {
  //           title: 'Mobile App Showcase v.2',
  //           link: { name: 'landings.mobile-app-2' }
  //         },
  //         {
  //           title: 'Mobile App Showcase v.3',
  //           link: { name: 'landings.mobile-app-3' }
  //         },
  //         {
  //           title: 'Product Landing',
  //           link: { name: 'landings.product' }
  //         },
  //         {
  //           title: 'SaaS v.1',
  //           link: { name: 'landings.saas-1' }
  //         },
  //         {
  //           title: 'SaaS v.2',
  //           link: { name: 'landings.saas-2' }
  //         },
  //         {
  //           title: 'SaaS v.3',
  //           link: { name: 'landings.saas-3' }
  //         },
  //         {
  //           title: 'SaaS v.4',
  //           link: { name: 'landings.saas-4' }
  //         },
  //         {
  //           title: 'SaaS v.5',
  //           link: { name: 'landings.saas-5' }
  //         }
  //       ]
  //     },
  //     {
  //       title: null,
  //       children: []
  //     },
  //     {
  //       title: null,
  //       children: [
  //         {
  //           title: 'Startup',
  //           link: { name: 'landings.startup' }
  //         },
  //         {
  //           title: 'Financial Consulting',
  //           link: { name: 'landings.financial' }
  //         },
  //         {
  //           title: 'Online Courses',
  //           link: { name: 'landings.online-course' }
  //         },
  //         {
  //           title: 'Medical',
  //           link: { name: 'landings.medical' }
  //         },
  //         {
  //           title: 'Software Dev Agency v.1',
  //           link: { name: 'landings.dev-agency-1' }
  //         },
  //         {
  //           title: 'Software Dev Agency v.2',
  //           link: { name: 'landings.dev-agency-2' }
  //         },
  //         {
  //           title: 'Software Dev Agency v.3',
  //           link: { name: 'landings.dev-agency-3' }
  //         },
  //         {
  //           title: 'Conference',
  //           link: { name: 'landings.conference' }
  //         },
  //         {
  //           title: 'Digital Agency',
  //           link: { name: 'landings.digital-agency' }
  //         },
  //         {
  //           title: 'Blog Homepage',
  //           link: { name: 'landings.blog' }
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Pages',
  //   links: [
  //     {
  //       title: 'About',
  //       children: [
  //         {
  //           title: 'About v.1',
  //           link: { name: 'pages.about-1' }
  //         },
  //         {
  //           title: 'About v.2',
  //           link: { name: 'pages.about-2' }
  //         },
  //         {
  //           title: 'About v.3',
  //           link: { name: 'pages.about-3' }
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Blog',
  //       children: [
  //         {
  //           title: 'List View with Sidebar',
  //           link: { name: 'pages.list-view-with-sidebar' }
  //         },
  //         {
  //           title: 'Grid View with Sidebar',
  //           link: { name: 'pages.grid-view-with-sidebar' }
  //         },
  //         {
  //           title: 'List View no Sidebar',
  //           link: { name: 'pages.list-view-no-sidebar' }
  //         },
  //         {
  //           title: 'Grid View no Sidebar',
  //           link: { name: 'pages.grid-view-no-sidebar' }
  //         },
  //         {
  //           title: 'Simple Feed',
  //           link: { name: 'pages.simple-feed' }
  //         },
  //         {
  //           title: 'Single Post',
  //           link: { name: 'pages.single-post' }
  //         },
  //         {
  //           title: 'Podcast',
  //           link: { name: 'pages.podcast' }
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Portfolio',
  //       children: [
  //         {
  //           title: 'Grid View',
  //           link: { name: 'pages.grid-view' }
  //         },
  //         {
  //           title: 'List View',
  //           link: { name: 'pages.list-view' }
  //         },
  //         {
  //           title: 'Slider View',
  //           link: { name: 'pages.slider' }
  //         },
  //         {
  //           title: 'Courses',
  //           link: { name: 'pages.courses' }
  //         },
  //         {
  //           title: 'Single Project',
  //           link: { name: 'pages.single-project' }
  //         },
  //         {
  //           title: 'Single Course',
  //           link: { name: 'pages.single-course' }
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Services',
  //       children: [
  //         {
  //           title: 'Services v.1',
  //           link: { name: 'pages.services-1' }
  //         },
  //         {
  //           title: 'Services v.2',
  //           link: { name: 'pages.services-2' }
  //         },
  //         {
  //           title: 'Service Details v.1',
  //           link: { name: 'pages.services-single-1' }
  //         },
  //         {
  //           title: 'Service Details v.2',
  //           link: { name: 'pages.services-single-2' }
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Pricing',
  //       children: [
  //         {
  //           title: 'Pricing Page',
  //           link: { name: 'pages.pricing' }
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Contacts',
  //       children: [
  //         {
  //           title: 'Contacts v.1',
  //           link: { name: 'pages.contacts-1' }
  //         },
  //         {
  //           title: 'Contacts v.2',
  //           link: { name: 'pages.contacts-2' }
  //         },
  //         {
  //           title: 'Contacts v.3',
  //           link: { name: 'pages.contacts-3' }
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Specialty',
  //       children: [
  //         {
  //           title: '404 Error v.1',
  //           link: { name: 'pages.error-404-1' }
  //         },
  //         {
  //           title: '404 Error v.2',
  //           link: { name: 'pages.error-404-2' }
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Account',
  //   links: [
  //     {
  //       title: null,
  //       children: [
  //         {
  //           title: 'Account Details',
  //           link: { name: 'account.details' }
  //         },
  //         {
  //           title: 'Security',
  //           link: { name: 'account.security' }
  //         },
  //         {
  //           title: 'Notifications',
  //           link: { name: 'account.notifications' }
  //         },
  //         {
  //           title: 'Messages',
  //           link: { name: 'account.messages' }
  //         },
  //         {
  //           title: 'Saved Items',
  //           link: { name: 'account.saved-items' }
  //         },
  //         {
  //           title: 'My Collections',
  //           link: { name: 'account.collections' }
  //         },
  //         {
  //           title: 'Payment Details',
  //           link: { name: 'account.payment' }
  //         },
  //         {
  //           title: 'Sign In',
  //           link: { name: 'account.sign-in' }
  //         },
  //         {
  //           title: 'Sign Up',
  //           link: { name: 'account.sign-up' }
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    title: 'Home',
    href: '/'
    // link: { name: 'home-page' }

    // links: [
    //   {
    //     title: 'Home',
    //     href: '#home'
    //   },
    //   {
    //     title: 'Awards',
    //     href: '#awards'
    //   },
    //   {
    //     title: 'Clients',
    //     href: '#clients'
    //   },
    //   {
    //     title: 'Case studies',
    //     href: '#examples'
    //   }
    // ]
  },
  {
    title: 'About',
    link: { name: 'about-page' }
  },
  {
    title: 'Products',
    href: '#products'
  }
  // {
  //   title: 'Portfolio',
  //   link: { name: 'ui.typography' }
  // },  {
  //   title: 'Blog',
  //   link: { name: 'ui.typography' }
  // },
  // {
  //   title: 'Contact',
  //   link: { name: 'ui.typography' }
  // },
]

export const uiKitSidebarMobileLinkData: ChildrenLinkType[] = [
  {
    icon: DesktopIcon,
    title: 'Preview',
    link: { name: 'landing' }
  }
]
export const uiKitSidebarLinkData: SidebarLinkType[] = [
  {
    title: 'Content',
    children: [
      {
        title: 'Typography',
        link: {
          name: 'ui.typography'
        }
      },
      {
        title: 'Icon Font',
        externalLink: 'https://boxicons.com/'
      },
      {
        title: 'Code',
        link: {
          name: 'ui.code'
        }
      },
      {
        title: 'Images & Figures',
        link: {
          name: 'ui.images'
        }
      },
      {
        title: 'Tables',
        link: {
          name: 'ui.tables'
        }
      }
    ]
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Accordion',
        link: { name: 'ui.accordion' }
      },
      {
        title: 'Alerts',
        link: { name: 'ui.alerts' }
      },
      {
        title: 'Audio player',
        link: { name: 'ui.audio-player' }
      },
      {
        title: 'Badges',
        link: { name: 'ui.badges' }
      },
      {
        title: 'Blog components',
        link: { name: 'ui.blog-components' }
      },
      {
        title: 'Breadcrumb',
        link: { name: 'ui.breadcrumb' }
      },
      {
        title: 'Buttons',
        link: { name: 'ui.buttons' }
      },
      {
        title: 'Button group',
        link: { name: 'ui.buttons-group' }
      },
      {
        title: 'Cards',
        link: { name: 'ui.card' }
      },
      {
        title: 'Carousel (Slider)',
        link: { name: 'ui.carousel' }
      },
      {
        title: 'Collapse',
        link: { name: 'ui.collapse' }
      },
      {
        title: 'Dropdowns',
        link: { name: 'ui.dropdowns' }
      },
      {
        title: 'Forms',
        link: { name: 'ui.forms' }
      },
      {
        title: 'Gallery (Lightbox)',
        link: { name: 'ui.gallery' }
      },
      {
        title: 'Image comparison slider',
        link: { name: 'ui.image-comparison-slider' }
      },
      {
        title: 'Input group',
        link: { name: 'ui.input-group' }
      },
      {
        title: 'List group',
        link: { name: 'ui.list-group' }
      },
      {
        title: 'Modal',
        link: { name: 'ui.modal' }
      },
      {
        title: 'Navbar',
        link: { name: 'ui.navbar' }
      },
      {
        title: 'Offcanvas',
        link: { name: 'ui.offcanvas' }
      },
      {
        title: 'Pagination',
        link: { name: 'ui.pagination' }
      },
      {
        title: 'Parallax',
        link: { name: 'ui.parallax' }
      },
      {
        title: 'Pills',
        link: { name: 'ui.pills' }
      },
      {
        title: 'Placeholders',
        link: { name: 'ui.placeholders' }
      },
      {
        title: 'Popovers',
        link: { name: 'ui.popovers' }
      },
      {
        title: 'Portfolio components',
        link: { name: 'ui.portfolio-components' }
      },
      {
        title: 'Pricing',
        link: { name: 'ui.pricing' }
      },
      {
        title: 'Progress bars',
        link: { name: 'ui.progressbar' }
      },
      {
        title: 'Social buttons',
        link: { name: 'ui.social-buttons' }
      },
      {
        title: 'Spinners',
        link: { name: 'ui.spinners' }
      },
      {
        title: 'Steps',
        link: { name: 'ui.steps' }
      },
      {
        title: 'Tabs',
        link: { name: 'ui.tabs' }
      },
      {
        title: 'Team',
        link: { name: 'ui.team' }
      },
      {
        title: 'Testimonials reviews',
        link: { name: 'ui.testimonial' }
      },
      {
        title: 'Toasts',
        link: { name: 'ui.toasts' }
      },
      {
        title: 'Tooltips',
        link: { name: 'ui.tooltips' }
      },
      {
        title: 'Video popup',
        link: { name: 'ui.video-popup' }
      }
    ]
  },
  {
    title: 'Utilities',
    children: [
      {
        title: 'BootstrapVue',
        externalLink: 'https://bootstrap-vue-next.github.io/bootstrap-vue-next/'
      },
      {
        title: 'Commercializer',
        link: {
          name: 'ui.utilities'
        }
      }
    ]
  }
]
