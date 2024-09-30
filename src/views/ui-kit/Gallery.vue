<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Gallery (Lightbox)"
      description="JavaScript based lightbox component for presenting various types of media."
      is-silicon-component
    />

    <!-- Media: Image -->
    <section id="gallery-image" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Media: Image</h2>
      <div class="pt-1">
        <LightGallery custom-class="gallery" :custom-style="{ maxWidth: '416px' }">
          <a
            href="../src/assets/img/portfolio/courses/08.jpg"
            class="gallery-item rounded-3"
            data-sub-html='<h6 class="text-light">Gallery image caption</h6>'
          >
            <img src="@/assets/img/portfolio/courses/08.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
          </a>
        </LightGallery>
      </div>
    </section>

    <!-- Media: Video -->
    <section id="gallery-video" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Media: Video</h2>
      <div class="pt-1">
        <LightGallery custom-class="gallery" :custom-style="{ maxWidth: '416px' }">
          <a
            href="https://www.youtube.com/watch?v=8KaJRw-rfn8"
            class="gallery-item video-item rounded-3"
            data-sub-html='<h6 class="fs-sm text-light">Gallery video caption</h6>'
          >
            <img src="@/assets/img/portfolio/courses/01.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption fs-sm fw-medium">Gallery video caption</div>
          </a>
        </LightGallery>
      </div>
    </section>

    <!-- Media: Iframe (Google map) -->
    <section id="gallery-iframe" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Media: Iframe (Google map)</h2>
      <div class="pt-1">
        <LightGallery custom-class="gallery" :custom-style="{ maxWidth: '416px' }">
          <a
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476818218!2d-74.11976253858133!3d40.69740344296443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1568574342685!5m2!1sen!2sua"
            data-iframe="true"
            class="gallery-item rounded-2"
            data-sub-html='<h6 class="fs-sm text-light">Google map embed</h6>'
          >
            <img src="@/assets/img/portfolio/courses/map.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption fs-sm fw-medium">Google map embed</div>
          </a>
        </LightGallery>
      </div>
    </section>

    <!-- Permanent hover state -->
    <section id="gallery-hover" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Permanent hover state</h2>
      <div class="pt-1">
        <LightGallery custom-class="gallery" :custom-style="{ maxWidth: '526px' }">
          <a
            href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
            class="gallery-item video-item is-hovered rounded-3"
            data-sub-html='<h6 class="fs-sm text-light">Silicon Inc. Showreel by Marvin McKinney</h6>'
          >
            <img src="@/assets/img/about/gallery/01.jpg" alt="Gallery thumbnail" />
            <div class="gallery-item-caption p-4">
              <h4 class="text-light mb-1">Silicon Inc.</h4>
              <p class="mb-0">Showreel by Marvin McKinney</p>
            </div>
          </a>
        </LightGallery>
      </div>
    </section>

    <!-- Grid with gutters -->
    <section id="gallery-grid-gutters" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Grid with gutters</h2>
      <div class="pt-1">
        <LightGallery
          custom-class="gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 row-cols-xl-3 g-4"
        >
          <div class="col">
            <a
              href="../src/assets/img/portfolio/courses/02.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/02.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col">
            <a
              href="https://www.youtube.com/watch?v=8KaJRw-rfn8"
              class="gallery-item video-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/01.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery video caption</div>
            </a>
          </div>
          <div class="col">
            <a
              href="../src/assets/img/portfolio/courses/03.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/03.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col">
            <a
              href="../src/assets/img/portfolio/courses/08.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/08.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col">
            <a
              href="../src/assets/img/portfolio/courses/07.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/07.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col">
            <a
              href="../src/assets/img/portfolio/courses/06.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/06.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
        </LightGallery>
      </div>
    </section>

    <!-- Grid no gutters -->
    <section id="gallery-grid-nogutters" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Grid no gutters</h2>
      <div class="pt-1">
        <LightGallery
          custom-class="gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 row-cols-xl-3 g-0"
        >
          <div class="col border border-light">
            <a
              href="../src/assets/img/portfolio/courses/02.jpg"
              class="gallery-item"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/02.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col border border-light">
            <a
              href="https://www.youtube.com/watch?v=8KaJRw-rfn8"
              class="gallery-item video-item"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/01.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery video caption</div>
            </a>
          </div>
          <div class="col border border-light">
            <a
              href="../src/assets/img/portfolio/courses/03.jpg"
              class="gallery-item"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/03.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col border border-light">
            <a
              href="../src/assets/img/portfolio/courses/08.jpg"
              class="gallery-item"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/08.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col border border-light">
            <a
              href="../src/assets/img/portfolio/courses/07.jpg"
              class="gallery-item"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/07.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
          <div class="col border border-light">
            <a
              href="../src/assets/img/portfolio/courses/06.jpg"
              class="gallery-item"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <img src="@/assets/img/portfolio/courses/06.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption</div>
            </a>
          </div>
        </LightGallery>
      </div>
    </section>

    <!-- Inside card -->
    <section id="gallery-card" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inside card</h2>
      <div class="pt-1">
        <LightGallery custom-class="card gallery" :custom-style="{ maxWidth: '418px' }">
          <a
            href="../src/assets/img/portfolio/courses/03.jpg"
            class="gallery-item card-img-top"
            data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
          >
            <img src="@/assets/img/portfolio/courses/03.jpg" alt="Gallery thumbnail" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Card with gallery thumbnail</h5>
            <p class="card-text fs-sm text-muted">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="btn btn-sm btn-primary">Go somewhere</a>
          </div>
        </LightGallery>
      </div>
    </section>

    <!-- Inside carousel -->
    <section id="gallery-carousel" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inside carousel</h2>
      <div class="pt-1">
        <div class="position-relative px-md-5">
          <b-button
            id="prev"
            class="btn-prev btn-icon position-absolute top-50 translate-middle-y start-0 d-none d-md-inline-flex mt-n4"
            size="sm"
            aria-label="Previous"
          >
            <i class="bx bx-chevron-left"></i>
          </b-button>
          <b-button
            id="next"
            class="btn-next btn-icon position-absolute top-50 translate-middle-y end-0 d-none d-md-inline-flex mt-n4"
            size="sm"
            aria-label="Next"
          >
            <i class="bx bx-chevron-right"></i>
          </b-button>
          <Swiper
            class="swiper-nav-onhover pt-1"
            :modules="[Pagination, Navigation]"
            :slidesPerView="1"
            :spaceBetween="20"
            :loop="true"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
            :navigation="{
              prevEl: '#prev',
              nextEl: '#next'
            }"
            :breakpoints="{
              500: {
                slidesPerView: 2,
                spaceBetween: 16
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 16
              },
              1650: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }"
          >
            <!-- <div class="gallery" data-video="true"> -->
            <SwiperSlide class="" v-for="(item, idx) in swiperData" :key="idx">
              <LightGallery custom-class="gallery">
                <a
                  v-if="!item.link"
                  v-bind:href="item.image"
                  class="gallery-item rounded-3"
                  data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
                >
                  <img :src="item.image" alt="Gallery thumbnail" />
                  <div class="gallery-item-caption fs-sm fw-medium">{{ item.title }}</div>
                </a>
                <a
                  v-if="item.link"
                  href="https://www.youtube.com/watch?v=8KaJRw-rfn8"
                  class="gallery-item video-item rounded-3"
                  data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
                >
                  <img src="@/assets/img/portfolio/courses/01.jpg" alt="Gallery thumbnail" />
                  <div class="gallery-item-caption fs-sm fw-medium">Gallery video caption</div>
                </a>
              </LightGallery>
            </SwiperSlide>
            <div class="swiper-pagination position-relative pt-3 pt-sm-4 mt-4"></div>
          </Swiper>
        </div>
      </div>
    </section>

    <!-- Thumbnails -->
    <section id="gallery-thumbnails" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Thumbnails</h2>
      <div class="pt-1">
        <LightGallery custom-class="gallery row g-4" :options="{ thumbnails: true }">
          <b-col md="5">
            <a
              href="../src/assets/img/about/gallery/01.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption 1</h6>'
            >
              <img src="@/assets/img/about/gallery/01.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption 1</div>
            </a>
          </b-col>
          <b-col md="3" sm="5">
            <a
              href="../src/assets/img/about/gallery/02.jpg"
              class="gallery-item rounded-3 mb-4"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption 2</h6>'
            >
              <img src="@/assets/img/about/gallery/02.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption 2</div>
            </a>
            <a
              href="../src/assets/img/about/gallery/03.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption 3</h6>'
            >
              <img src="@/assets/img/about/gallery/03.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption 3</div>
            </a>
          </b-col>
          <b-col md="4" sm="7">
            <a
              href="../src/assets/img/about/gallery/04.jpg"
              class="gallery-item rounded-3 mb-4"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption 4</h6>'
            >
              <img src="@/assets/img/about/gallery/04.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption 4</div>
            </a>
            <a
              href="../src/assets/img/about/gallery/05.jpg"
              class="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption 5</h6>'
            >
              <img src="@/assets/img/about/gallery/05.jpg" alt="Gallery thumbnail" />
              <div class="gallery-item-caption fs-sm fw-medium">Gallery image caption 5</div>
            </a>
          </b-col>
        </LightGallery>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

import AnchorNavigation from '@/components/AnchorNavigation.vue'
import LightGallery from '@/components/LightGallery.vue'

import course8 from '@/assets/img/portfolio/courses/08.jpg'
import course1 from '@/assets/img/portfolio/courses/01.jpg'
import course3 from '@/assets/img/portfolio/courses/03.jpg'
import course7 from '@/assets/img/portfolio/courses/07.jpg'

const anchorData = [
  {
    id: 'gallery-image',
    title: 'Media: Image'
  },
  {
    id: 'gallery-video',
    title: 'Media: Video'
  },
  {
    id: 'gallery-iframe',
    title: 'Media: Iframe (Google map)'
  },
  {
    id: 'gallery-hover',
    title: 'Permanent hover state'
  },
  {
    id: 'gallery-grid-gutters',
    title: 'Grid with gutters'
  },
  {
    id: 'gallery-grid-nogutters',
    title: 'Grid no gutters'
  },
  {
    id: 'gallery-card',
    title: 'Inside card'
  },
  {
    id: 'gallery-carousel',
    title: 'Inside carousel'
  },
  {
    id: 'gallery-thumbnails',
    title: 'Thumbnails'
  }
]

type SwiperType = {
  image: string
  title: string
  link: boolean
}
const swiperData: SwiperType[] = [
  {
    image: course8,
    title: 'Gallery image caption',
    link: false
  },
  {
    image: course1,
    title: 'Gallery video caption',
    link: true
  },
  {
    image: course3,
    title: 'Gallery image caption',
    link: false
  },
  {
    image: course7,
    title: 'Gallery image caption',
    link: false
  }
]
</script>
