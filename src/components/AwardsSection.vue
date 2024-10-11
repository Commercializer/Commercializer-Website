<template>
  <!-- <div> -->
  <section class="position-relative zindex-2 px-3 mt-n2 mt-sm-0">
    <div class="card border-0 rounded-3 shadow py-5 px-3 px-lg-0 mx-auto" style="max-width: 1560px">
      <b-container class="py-lg-4 py-xl-5">
        <b-row class="pt-md-3 pb-md-2">
          <b-col lg="6" class="d-flex flex-column text-center text-lg-start mb-3 mb-sm-4 mb-lg-0">
            <h2 class="m-0">An Award Winning Company</h2>
            <p class="mt-2 ms-0" style="font-size: 18px; width: 100%; color: #fff">
              We build great products where innovation meets uniqueness and commercial value.
            </p>
            <div class="awards">
              <div class="awards__item" v-for="award in awards" :key="award.title">
                <div class="awards__item-img">
                  <img :src="award.img" :alt="award.title" class="awards__item-img" />
                </div>
                <div class="awards__item-body">
                  <h3 class="awards__item-title">
                    {{ award.title }}
                  </h3>
                  <p class="awards__item-description">
                    {{ award.description }}
                  </p>
                  <span class="awards__item-year">
                    {{ award.year }}
                  </span>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="5" class="photo-gallery-container offset-lg-1">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="3"
              :initialSlide="2"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }"
              :pagination="true"
              :modules="modules"
              direction="vertical"
              class="mySwiper"
            >
              <swiper-slide><img src="/images/awards/ac-1.png" /></swiper-slide
              ><swiper-slide><img src="/images/awards/ac-2.webp" /></swiper-slide
              ><swiper-slide><img src="/images/awards/ac-3.webp" /></swiper-slide
              ><swiper-slide><img src="/images/awards/ac-4.webp" /></swiper-slide
              ><swiper-slide><img src="/images/awards/ac-5.webp" /></swiper-slide
              ><swiper-slide><img src="/images/awards/ac-6.webp" /></swiper-slide
              ><swiper-slide><img src="/images/awards/ac-7.webp" /></swiper-slide>
            </swiper>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'

const modules = [EffectCoverflow, Pagination]

type Award = {
  title: string
  description: string
  year: number
  img: string
}

const awards: Award[] = [
  {
    title: 'National Winner',
    description: 'Best Innovation in Business Process Management',
    year: 2021,
    img: '/images/awards/award1.png'
  },
  {
    title: 'Western Province Winner',
    description: 'Best Innovation in Business Process Management',
    year: 2021,
    img: '/images/awards/award2.png'
  },
  {
    title: 'Certificate of Appreciation',
    description: 'Business & Commerce',
    year: 2020,
    img: '/images/awards/award3.png'
  },
  {
    title: 'Finalist',
    description: 'Best Startup Of The Year',
    year: 2021,
    img: '/images/awards/award4.png'
  },
  {
    title: 'Merit Winner - NBQSA',
    description: 'Retail & Distribution',
    year: 2021,
    img: '/images/awards/award5.png'
  },
  {
    title: 'Winner',
    description: 'Entrepreneurship Studio',
    year: 2021,
    img: '/images/awards/award6.png'
  }
]
</script>

<style lang="scss" scoped>
.logo-with-name {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  img {
    width: 150px;
  }

  p {
    font-weight: 700;
    font-size: 54px;
    color: #fff;
  }
}

h2 {
  font-size: 32px;
  font-weight: 700;
}

.awards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem;
  row-gap: 2.5rem;
  margin-top: 3rem;

  @include mq(sm) {
    grid-template-columns: 1fr;
  }

  &__item {
    display: flex;
    flex-direction: column;

    &-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 1.5rem;
    }

    &-title {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      margin: 0;
      text-align: center;
    }

    &-description {
      font-size: 18px;
      color: #fff;
      margin: 0;
      text-align: center;
    }

    &-year {
      font-size: 16px;
      color: #b4b7c9;
      text-align: center;
    }

    &-img {
      background-color: #fff;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-block: 0.25rem;
      border-radius: 0.5rem;

      img {
        height: 68px;
        width: auto;
      }
    }
  }
}

.photo-gallery-container {
  height: calc(100vh - 0px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;

  .mySwiper {
    height: 100%;
    margin-block: auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transform: scale(0.98);
    }

    &-active {
      img {
        transform: scale(1) !important;
      }
    }
  }
}
</style>
