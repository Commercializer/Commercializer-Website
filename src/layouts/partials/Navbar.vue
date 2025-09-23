<template>
  <header
    class="header navbar navbar-expand-lg navbar-sticky"
    :class="{
      'bg-transparent': transparent && isTransparent,
      'bg-light shadow-sm': !isTransparent,
      // 'navbar-dark bg-dark': isDark,
      'navbar-stuck': isStuck,
      'position-absolute': absolute,
      'border-bottom': borderBottom,
      'fixed-top': fixedTop,
      'navbar-sticky': navbarSticky,
      'border-bottom border-light': isBorder
    }"
    :style="{ backgroundColor: '#000 !important', height: '74px' }"
    ref="headerRef"
  >
    <div class="container px-3">
      <router-link class="navbar-brand pe-3" to="/">
        <img ref="logoRef" src="/commercializer-logo.svg" alt="Commercializer" class="brand-logo" :class="{'mobile-logo-hidden': isHomePage && isMobileView}" />
        <!-- Commercializer -->
      </router-link>

      <div id="navbarNav">
        <div v-if="!isMobileView">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(item, idx) in navbarLinkData" :key="item.title" class="nav-item dropdown">
              <router-link v-if="item.link" class="nav-link" :to="item.link" @click="handleClick(item)">
                {{ item.title }}
              </router-link>
               <a v-else-if="item.href" class="nav-link" :href="item.href">
                {{ item.title }}
              </a>

              <template v-else>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">{{
                  item.title
                }}</a>
                <div class="dropdown-menu p-0">
                  <div class="d-lg-flex">
                    <div
                      v-if="item.image"
                      class="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0"
                      style="margin: -1px; background-color: #f3f6ff"
                    >
                      <img :src="item.image" alt="" />
                    </div>

                    <div v-for="(link, idx) in makeChunk(item.links)" class="mega-dropdown-column">
                      <div v-for="(item, idx) in link" class="py-3">
                        <h6 class="px-3 mb-1">{{ item.title }}</h6>
                        <ul class="list-unstyled">
                          <li v-for="(child, idx) in item.children">
                            <router-link
                              class="dropdown-item py-2"
                              :class="{ active: child.link.name === currentRouteName }"
                              :to="{ name: child.link.name }"
                              >{{ child.title }}
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>
            <button class="navbar-toggler" type="button" @click="showMobileNav = !showMobileNav">
                <span class="navbar-toggler-icon"></span>
            </button>
           <a
                class="fs-sm rounded d-none d-lg-inline-flex get-commercialized-button"
                rel="noopener"
               @click.prevent
                style="
                    background: linear-gradient(90deg, #81cb30 0%, #14b7c6 100%);
                    color: #fff;
                    border: none;
                    outline: none;
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    font-weight: 600;
                "
                data-cal-link="commercializer/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
            >
                Get Commercialized
            </a>
        </div>
  </header>

  <!--  Mobile Navbar-->
  <b-offcanvas
    placement="end"
    v-model="showMobileNav"
    title="Menu"
    header-class="border-bottom"
    footer-class="border-top"
  >
    <template v-slot:default>
      <ul class="navbar-nav me-auto">
        <li v-for="(item, idx) in navbarLinkData" :key="item.title" class="nav-item dropdown">
          <router-link v-if="item.link" class="nav-link" :to="item.link" @click="handleMobileNavigation(item.link?.hash)">{{
            item.title
          }}</router-link>

          <template v-else>
            <a class="nav-link dropdown-toggle" v-b-toggle="`nav-collapse-${idx}`" href="#" @click.prevent="handleMobileNavigation(item.href)">{{
              item.title
            }}</a>

            <b-collapse :id="`nav-collapse-${idx}`" class="p-0">
              <div class="d-lg-flex">
                <div v-for="(link, idx) in item.links" class="mega-dropdown-column py-3">
                  <h6 v-if="item.title" class="mb-1">{{ link.title }}</h6>
                  <ul class="list-unstyled">
                    <li v-for="(child, idx) in link.children" :key="child.title">
                      <router-link
                        class="dropdown-item py-2"
                        :class="{ active: child.link.name === currentRouteName }"
                        :to="{ name: child.link.name }"
                        @click="handleMobileNavigation"
                        >{{ child.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </b-collapse>
          </template>
        </li>
      </ul>
    </template>

    <template v-slot:footer>
       <div class="px-3 py-3">
        <a
            class="fs-sm rounded d-lg-inline-flex get-commercialized-button"
             @click.prevent
            style="
                background: linear-gradient(90deg, #81cb30 0%, #14b7c6 100%);
                color: #fff;
                border: none;
                outline: none;
                text-decoration: none;
                padding: 0.5rem 1rem;
                font-weight: 600;
            "
            data-cal-link="commercializer/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
        >
            Get Commercialized
          </a>
        </div>
    </template>
  </b-offcanvas>
</template>

<script lang="ts" setup>
import logoImg from '@/assets/img/logo.png'
import { onBeforeUnmount, onMounted, ref, watch, nextTick  } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { navbarLinkData } from '@/layouts/data'
import { Icon } from '@iconify/vue'
import CartIcon from '@iconify/icons-bx/cart'
import type { NavLinkType } from '@/layouts/type'
import scrollToElement from 'scroll-to-element';

const props = defineProps({
    isDark: {
        type: Boolean,
        default: false
    },
    isTransparent: {
        type: Boolean,
        default: true
    },
    stuck: {
        type: Boolean,
        default: false
    },
    absolute: {
        type: Boolean,
        default: true
    },
    borderBottom: {
        type: Boolean,
        default: false
    },
    fixedTop: {
        type: Boolean,
        default: false
    },
    navbarSticky: {
        type: Boolean,
        default: true
    },
    isBorder: {
        type: Boolean,
        default: false
    }
})

const transparent = ref(true)
const isStuck = ref(props.stuck)

const isMobileView = ref(false)
const showMobileNav = ref(false)
const logoRef = ref<HTMLElement | null>(null);
const headerRef = ref<HTMLElement | null>(null);

const router = useRouter()
const route = useRoute()
const isHomePage = ref(route.name === 'home-page')

const handleClick = (item: NavLinkType) => {
     if (item.title === 'Products') {
         router.push({ name: 'home-page', hash: '#products' }).then(() => {
             nextTick(() => {
             const targetElement = document.querySelector('#products');
             if (targetElement) {
                 scrollToElement(targetElement, {
                     duration: 1500,
                     offset: -100,
                 })
             }
         })
     });
     }
 }
const handleMobileNavigation = (href?: string) => {
    if (href) {
        if (href.startsWith('#')) {
            // Smooth scrolling for anchor links
            const targetElement = document.querySelector(href)
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
                showMobileNav.value = false // Close the mobile nav
            }
        } else {
            // For Vue Router links
            router.push(href).then(() => {
                showMobileNav.value = false // Close the mobile nav
            })
        }
    } else {
        showMobileNav.value = false // Close the mobile nav if no href provided
    }
}

const scrollHandler = () => {
    if (isMobileView.value && logoRef.value && isHomePage.value) {
        if (window.scrollY > (headerRef.value?.offsetHeight ?? 74)) {
            logoRef.value.classList.remove('mobile-logo-hidden');
        } else {
            logoRef.value.classList.add('mobile-logo-hidden');
        }
    }
};

onMounted(() => {
    if (!props.stuck) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 700) {
                transparent.value = false
                isStuck.value = true
            } else {
                transparent.value = true
                isStuck.value = false
            }
        })
    }
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', () => {
        isMobileView.value = window.innerWidth < 990
        scrollHandler()
    })

    isMobileView.value = window.innerWidth < 990;
    if (isMobileView.value && logoRef.value && isHomePage.value) {
        logoRef.value.classList.add('mobile-logo-hidden');
    }


    // Initialize Cal.com after the component mounts
     (function (C, A, L) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
         (C as any).Cal = (C as any).Cal || function () {
            let cal: any = (C as any).Cal;
            cal.q = cal.q || [];

            let ar = arguments;
            if (!cal.loaded) {
                cal.ns = {};
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
            }
            if (ar[0] === L) {
                const api: any = function () {
                    p(api, arguments);
                };
                 api.q = api.q || [];

                const namespace = ar[1];

                if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                } else p(cal, ar);
                return;
            }
            p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    (window as any).Cal("init", "30min", { origin: "https://cal.com" });
    (window as any).Cal.ns["30min"]("ui", { "theme": "dark", "cssVarsPerTheme": { "dark": { "cal-brand": "#47c080" } }, "hideEventTypeDetails": false, "layout": "month_view" });

});


watch(() => route.name, (newRouteName) => {
    isHomePage.value = newRouteName === 'home-page';
    if (!isHomePage.value && logoRef.value) {
        logoRef.value.classList.remove('mobile-logo-hidden');
    } else if (isHomePage.value && isMobileView.value && logoRef.value) {
        logoRef.value.classList.add('mobile-logo-hidden');
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollHandler);
});

const makeChunk = (input: Array<any> | undefined) => {
    if (!input) return []
    const perChunk = 2 // items per chunk

    return input.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
}

const currentRouteName = route.name
</script>

<style lang="scss" scoped>
.navbar-brand {
  font-size: 22px;

  img {
    width: 47px;

    @include mq(lg) {
      width: 42px;
    }

    @include mq(md) {
      width: 38px;
    }

    @include mq(sm) {
      width: 34px;
    }

    @include mq(xs) {
      width: 32px;
    }
  }

  @include mq(lg) {
    font-size: 20.5px;
  }

  @include mq(sm) {
    font-size: 1.2rem;
  }

  @include mq(xs) {
    font-size: 1.125rem;
  }
}

.brand-logo {
  width: 220px !important;

  @include mq(md) {
    width: 260px !important;
  }
}
.mobile-logo-hidden {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
 }

 .get-commercialized-button {
  cursor: pointer;
}
</style>