<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Portfolio components"
      description="Components that are related to the portfolio section of the website."
      :is-silicon-component="true"
    />

    <!-- Grid view: Card style 1 -->
    <section id="portfolio-grid-1" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Grid view: Card style 1</h2>
      <div class="pt-1">
        <b-card class="card-portfolio" style="max-width: 526px">
          <div class="card-img">
            <img src="@/assets/img/portfolio/grid/05.jpg" alt="Image" />
          </div>
          <div class="pb-0">
            <h2 class="h4 mb-2">
              <a href="#" class="stretched-link">3D Shape Illustration</a>
            </h2>
            <div class="card-portfolio-meta">
              <span class="text-muted">3D Design / Illustration / Art</span>
            </div>
          </div>
        </b-card>
      </div>
    </section>

    <!-- Grid view: Card style 2 -->
    <section id="portfolio-grid-2" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Grid view: Card style 2</h2>
      <div class="pt-1">
        <a
          href="#"
          class="card card-portfolio card-hover bg-transparent border-0"
          style="max-width: 700px"
        >
          <div
            class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3"
          >
            <span
              class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"
            ></span>
            <div class="position-relative zindex-2">
              <h3 class="h5 text-light mb-2">Scene of Sunglasses &amp; Headphone on Human Head</h3>
              <span class="fs-sm text-light opacity-70"
                >NFT / Graphic Design / Art / Identity / Motion Design</span
              >
            </div>
          </div>
          <div class="card-img">
            <img src="@/assets/img/portfolio/grid/02.jpg" class="rounded-3" alt="Image" />
          </div>
        </a>
      </div>
    </section>

    <!-- List view -->
    <section id="portfolio-list" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">List view</h2>
      <div class="pt-1">
        <b-row class="pb-lg-3">
          <b-col md="6" class="pb-1 mb-3 pb-md-0 mb-md-0">
            <a href="#">
              <img
                src="@/assets/img/portfolio/list/01.jpg"
                class="rounded-3"
                width="600"
                alt="Image"
              />
            </a>
          </b-col>
          <b-col md="6">
            <div class="ps-md-4 ms-md-2">
              <div class="fs-sm text-muted mb-1">Nov 18, 2023</div>
              <h2 class="h3">SaaS Project Management Tool</h2>
              <a href="#" class="d-table badge bg-faded-primary text-primary fs-sm mb-3"
                >Graphic Design</a
              >
              <p class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
                Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra
                pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque
                bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel
                gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum
                gravida curabitur at vel risus.
              </p>
              <a href="#" class="btn btn-outline-primary">View more</a>
            </div>
          </b-col>
        </b-row>
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
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const anchorData = [
  {
    id: 'portfolio-grid-1',
    title: 'Grid view: Card style 1'
  },
  {
    id: 'portfolio-grid-2',
    title: 'Grid view: Card style 2'
  },
  {
    id: 'portfolio-list',
    title: 'List view'
  }
]
</script>
