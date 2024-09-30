<template>
  <UIKitLayout>
    <UIKitPageTitle title="Cards" description="Flexible and extensible content container." />

    <!-- Basic example -->
    <section id="cards-basic" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>

      <div class="pt-1">
        <b-card style="max-width: 20rem">
          <h5 class="">Card title</h5>
          <p class="fs-sm">
            Some quick example text to build on the card title and make up the bulk of the card's
            content within card's body.
          </p>
          <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
        </b-card>
      </div>
    </section>

    <!-- Alternative style -->
    <section id="cards-alt" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alternative style</h2>

      <div class="pt-1">
        <div class="d-sm-flex">
          <b-card class="border-0 shadow-sm mb-4 mb-sm-0 me-sm-4" style="max-width: 20rem">
            <h5 class="">Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>
          <b-card class="shadow-sm" style="max-width: 20rem">
            <h5 class="">Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>
        </div>
      </div>
    </section>

    <!-- Hover effect -->
    <section id="cards-hover" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Hover effect</h2>

      <div class="pt-1">
        <div class="d-sm-flex mb-4">
          <b-card class="card card-hover mb-4 mb-sm-0 me-sm-4" style="max-width: 20rem">
            <h5>Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>
          <b-card class="border-0 shadow-sm card-hover" style="max-width: 20rem">
            <h5>Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>
        </div>
        <div class="d-sm-flex">
          <b-card
            class="border-0 shadow-sm card-hover card-hover-primary mb-4 mb-sm-0 me-sm-4"
            style="max-width: 20rem"
          >
            <h5>Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>
          <b-card border-variant="primary" class="card-hover" style="max-width: 20rem">
            <h5>Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>
        </div>
      </div>
    </section>

    <!-- Image top / bottom -->
    <section id="cards-image-position" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Image top / bottom</h2>

      <div class="pt-1">
        <div class="d-sm-flex">
          <b-card class="mb-4 mb-sm-0 me-sm-4" img-top style="max-width: 20rem">
            <template v-slot:img>
              <img
                class="card-img-top"
                src="@/assets/img/landing/financial/services/01.jpg"
                alt="Card image"
              />
            </template>
            <h5>Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>

          <b-card class="mb-4 mb-sm-0 me-sm-4" img-bottom style="max-width: 20rem">
            <template v-slot:img>
              <img
                class="card-img-bottom"
                src="@/assets/img/landing/financial/services/03.jpg"
                alt="Card image"
              />
            </template>
            <h5>Card title</h5>
            <p class="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card's
              content within card's body.
            </p>
            <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
          </b-card>
        </div>
      </div>
    </section>

    <!-- Horizontal layout -->
    <section id="cards-horizontal" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Horizontal layout</h2>

      <div class="pt-1">
        <b-card class="overflow-hidden mb-4" body-class="p-0" style="max-width: 42rem">
          <b-row class="g-0">
            <b-col
              sm="4"
              class="bg-repeat-0 bg-size-cover"
              :style="{ backgroundImage: `url(${team1})`, minHeight: '12rem' }"
            ></b-col>
            <b-col sm="8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text fs-sm">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content within card's body.
                </p>
                <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
              </div>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="overflow-hidden" body-class="p-0" style="max-width: 42rem">
          <b-row class="g-0">
            <b-col
              sm="4"
              class="order-sm-2 bg-repeat-0 bg-size-cover"
              :style="{ backgroundImage: `url(${team2})`, minHeight: '12rem' }"
            ></b-col>
            <b-col sm="8" class="order-sm-1">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text fs-sm">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content within card's body.
                </p>
                <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </section>

    <!-- Header and footer -->
    <section id="cards-header-footer" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Header and footer</h2>

      <div class="pt-1">
        <b-card class="text-center" style="max-width: 42rem">
          <template v-slot:header>
            <div>Featured</div>
          </template>

          <h4>Special title treatment</h4>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <a class="btn btn-primary" href="#">Go somewhere</a>

          <template v-slot:footer>
            <div class="fs-sm text-muted">3 days ago</div>
          </template>
        </b-card>
      </div>
    </section>

    <!-- Text alignment -->
    <section id="cards-text-alignment" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Text alignment</h2>

      <div class="pt-1">
        <b-row>
          <b-col md="4" class="mb-4 mb-md-0">
            <b-card>
              <h5>Card title</h5>
              <p class="fs-sm">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
            </b-card>
          </b-col>
          <b-col md="4" class="mb-4 mb-md-0">
            <b-card class="text-center">
              <h5>Card title</h5>
              <p class="fs-sm">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="text-end">
              <h5>Card title</h5>
              <p class="fs-sm">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Navigation: Tabs -->
    <section id="cards-nav-tabs" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Navigation: Tabs</h2>

      <div class="pt-1">
        <b-card class="text-center" style="max-width: 42rem">
          <template v-slot:header>
            <b-nav card-header tabs>
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </template>

          <h4>Special title treatment</h4>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <a class="btn btn-primary" href="#">Go somewhere</a>
        </b-card>
      </div>
    </section>

    <!-- Navigation: Alt tabs -->
    <section id="cards-nav-tabs-alt" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Navigation: Alt tabs</h2>

      <div class="pt-1">
        <b-card class="text-center" style="max-width: 42rem">
          <template v-slot:header>
            <b-nav card-header>
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </template>

          <h4>Special title treatment</h4>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <a class="btn btn-primary" href="#">Go somewhere</a>
        </b-card>
      </div>
    </section>

    <!-- Navigation: Pills -->
    <section id="cards-nav-pills" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Navigation: Pills</h2>

      <div class="pt-1">
        <b-card class="text-center" style="max-width: 42rem">
          <template v-slot:header>
            <b-nav card-header pills>
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </template>

          <h4>Special title treatment</h4>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <a class="btn btn-primary" href="#">Go somewhere</a>
        </b-card>
      </div>
    </section>

    <!-- List group inside card -->
    <section id="cards-list-group" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">List group inside card</h2>

      <div class="pt-1">
        <b-row>
          <b-col md="6">
            <b-card class="mb-4 mb-md-0" body-class="p-0">
              <div class="card-body pb-0">
                <h5>Card title</h5>
                <p class="fs-sm text-muted">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
              <b-list-group flush>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>
              <div class="card-body">
                <a class="btn btn-primary" href="#">Go somewhere</a>
              </div>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card body-class="p-0">
              <div class="card-body pb-0">
                <h5>Card title</h5>
                <p class="fs-sm text-muted">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
              <b-list-group flush>
                <b-list-group-item action>Cras justo odio</b-list-group-item>
                <b-list-group-item action>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item action>Vestibulum at eros</b-list-group-item>
              </b-list-group>
              <div class="card-body">
                <a class="btn btn-primary" href="#">Go somewhere</a>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Card styles: Solid background -->
    <section id="cards-bg-solid" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Card styles: Solid background</h2>

      <div class="pt-1">
        <b-row class="g-4" style="max-width: 58rem">
          <b-col sm="6">
            <b-card bg-variant="primary" class="text-white">
              <template v-slot:header>
                <div class="border-light">Header</div>
              </template>
              <h5 class="text-white">Primary card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card bg-variant="secondary">
              <template v-slot:header>
                <div>Header</div>
              </template>

              <h5>Secondary card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card bg-variant="success" class="text-white">
              <template v-slot:header>
                <div class="border-light">Header</div>
              </template>

              <h5 class="text-white">Success card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card bg-variant="danger" class="text-white">
              <template v-slot:header>
                <div class="border-light">Header</div>
              </template>

              <h5 class="text-white">Danger card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card bg-variant="warning" class="text-white">
              <template v-slot:header>
                <div class="border-light">Header</div>
              </template>

              <h5 class="text-white">Warning card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card bg-variant="info" class="text-white">
              <template v-slot:header>
                <div class="border-light">Header</div>
              </template>

              <h5 class="text-white">Info card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card bg-variant="dark" class="text-white">
              <template v-slot:header>
                <div class="border-light">Header</div>
              </template>

              <h5 class="text-white">Dark card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card class="bg-gradient-primary text-white">
              <template v-slot:header>
                <div class="border-light">Header</div>
              </template>

              <h5 class="text-white">Gradient card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Card styles: Faded background, border and color -->
    <section id="cards-bg-faded" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Card styles: Faded background, border and color</h2>

      <div class="pt-1">
        <b-row class="g-4" style="max-width: 58rem">
          <b-col md="6">
            <b-card
              class="bg-faded-primary"
              border-variant="primary"
              header-border-variant="primary"
            >
              <template v-slot:header>
                <div class="text-primary">Header</div>
              </template>
              <h5 class="text-primary">Primary card title</h5>
              <p class="fs-sm text-primary">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>

          <b-col md="6">
            <b-card
              class="bg-faded-success"
              border-variant="success"
              header-border-variant="success"
            >
              <template v-slot:header>
                <div class="text-success">Header</div>
              </template>
              <h5 class="text-success">Success card title</h5>
              <p class="fs-sm text-success">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>

          <b-col md="6">
            <b-card class="bg-faded-danger" border-variant="danger" header-border-variant="danger">
              <template v-slot:header>
                <div class="text-danger">Header</div>
              </template>
              <h5 class="text-danger">Danger card title</h5>
              <p class="fs-sm text-danger">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>

          <b-col md="6">
            <b-card
              class="bg-faded-warning"
              border-variant="warning"
              header-border-variant="warning"
            >
              <template v-slot:header>
                <div class="text-warning">Header</div>
              </template>
              <h5 class="text-warning">Warning card title</h5>
              <p class="fs-sm text-warning">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>

          <b-col md="6">
            <b-card class="bg-faded-info" border-variant="info" header-border-variant="info">
              <template v-slot:header>
                <div class="text-info">Header</div>
              </template>
              <h5 class="text-info">Info card title</h5>
              <p class="fs-sm text-info">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>

          <b-col md="6">
            <b-card class="bg-faded-dark" border-variant="dark" header-border-variant="dark">
              <template v-slot:header>
                <div class="text-dark">Header</div>
              </template>
              <h5 class="text-dark">Dark card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Card styles: Border and color -->
    <section id="cards-border-color" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Card styles: Border and color</h2>

      <div class="pt-1">
        <b-row class="g-4" style="max-width: 58rem">
          <b-col md="6">
            <b-card border-variant="primary" header-border-variant="primary">
              <template v-slot:header>
                <div class="text-primary">Header</div>
              </template>
              <h5 class="text-primary">Primary card title</h5>
              <p class="fs-sm text-primary">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card border-variant="success" header-border-variant="success">
              <template v-slot:header>
                <div class="text-success">Header</div>
              </template>
              <h5 class="text-success">Success card title</h5>
              <p class="fs-sm text-success">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card border-variant="danger" header-border-variant="danger">
              <template v-slot:header>
                <div class="text-danger">Header</div>
              </template>
              <h5 class="text-danger">Danger card title</h5>
              <p class="fs-sm text-danger">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card border-variant="warning" header-border-variant="warning">
              <template v-slot:header>
                <div class="text-warning">Header</div>
              </template>
              <h5 class="text-warning">Warning card title</h5>
              <p class="fs-sm text-warning">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card border-variant="info" header-border-variant="info">
              <template v-slot:header>
                <div class="text-info">Header</div>
              </template>
              <h5 class="text-info">Info card title</h5>
              <p class="fs-sm text-info">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card border-variant="dark" header-border-variant="dark">
              <template v-slot:header>
                <div class="text-dark">Header</div>
              </template>
              <h5 class="text-dark">Dark card title</h5>
              <p class="fs-sm">
                Some quick example text to build on the card title and make up the bulk of the
                card's content within card's body.
              </p>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Card group -->
    <section id="cards-group" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Card group</h2>

      <div class="pt-1">
        <b-card-group>
          <b-card img-top>
            <template v-slot:img>
              <img
                class="card-img-top"
                src="@/assets/img/landing/financial/services/01.jpg"
                alt="Card image"
              />
            </template>

            <h5>Card title</h5>
            <p class="fs-sm">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>

            <template v-slot:footer>
              <div class="border-top-0 pt-0">
                <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
              </div>
            </template>
          </b-card>
          <b-card img-top>
            <template v-slot:img>
              <img
                class="card-img-top"
                src="@/assets/img/landing/financial/services/02.jpg"
                alt="Card image"
              />
            </template>

            <h5>Card title</h5>
            <p class="fs-sm">
              This card has supporting text below as a natural lead-in to additional content.
            </p>

            <template v-slot:footer>
              <div class="border-top-0 pt-0">
                <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
              </div>
            </template>
          </b-card>
          <b-card img-top>
            <template v-slot:img>
              <img
                class="card-img-top"
                src="@/assets/img/landing/financial/services/03.jpg"
                alt="Card image"
              />
            </template>

            <h5>Card title</h5>
            <p class="fs-sm">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </p>

            <template v-slot:footer>
              <div class="border-top-0 pt-0">
                <a class="btn btn-sm btn-primary" href="#">Go somewhere</a>
              </div>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorNavigationData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

import team1 from '@/assets/img/team/01.jpg'
import team2 from '@/assets/img/team/02.jpg'

const anchorNavigationData = [
  {
    id: 'cards-basic',
    title: 'Basic example'
  },
  {
    id: 'cards-alt',
    title: 'Alternative style'
  },
  {
    id: 'cards-hover',
    title: 'Hover effect'
  },
  {
    id: 'cards-image-position',
    title: 'Image top / bottom'
  },
  {
    id: 'cards-horizontal',
    title: 'Horizontal layout'
  },
  {
    id: 'cards-header-footer',
    title: 'Header and footer'
  },
  {
    id: 'cards-text-alignment',
    title: 'Text alignment'
  },
  {
    id: 'cards-nav-tabs',
    title: 'Navigation: Tabs'
  },
  {
    id: 'cards-nav-tabs-alt',
    title: 'Navigation: Alt tabs'
  },
  {
    id: 'cards-nav-pills',
    title: 'Navigation: Pills'
  },
  {
    id: 'cards-list-group',
    title: 'List group inside card'
  },
  {
    id: 'cards-bg-solid',
    title: 'Card styles: Solid background'
  },
  {
    id: 'cards-bg-faded',
    title: 'Card styles: Faded background, border and color'
  },
  {
    id: 'cards-border-color',
    title: 'Card styles: Border and color'
  },
  {
    id: 'cards-group',
    title: 'Card group'
  }
]
</script>
