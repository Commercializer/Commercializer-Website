<template>
  <UIKitLayout>
    <!-- Page title -->
    <UIKitPageTitle
      title="Modal"
      description="Add dialogs to your site for lightboxes, user notifications or custom
          content."
    />

    <!-- Small modal-->
    <b-modal size="sm" v-model="modalSm" title="Modal title">
      <p>...</p>
    </b-modal>

    <!-- Default modal-->
    <b-modal v-model="modalDefault" title="Modal title">
      <p>Modal body text goes here.</p>
    </b-modal>

    <!-- Large modal-->
    <b-modal size="lg" v-model="modalLg" title="Modal title">
      <p>Modal body text goes here.</p>
    </b-modal>

    <!-- Extra large modal-->
    <b-modal size="xl" v-model="modalXl" title="Modal title">
      <p>Modal body text goes here.</p>
    </b-modal>

    <!-- Long modal-->
    <b-modal v-model="modalLong" title="Modal title">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
    </b-modal>

    <!-- Scrolling content-->
    <b-modal scrollable v-model="modalScrollable" title="Modal title">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
    </b-modal>

    <!-- Vertically centered modal-->
    <b-modal centered v-model="modalCenter" title="Modal title">
      <p>Modal body text goes here.</p>
    </b-modal>

    <!-- Modal markup -->
    <section id="modal-markup" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Modal markup</h2>
      <div class="pt-1">
        <b-button variant="primary" @click="markupModal = !markupModal">Toggle modal</b-button>

        <div class="example-modal">
          <b-modal v-model="markupModal" title="Modal title">
            <p>Modal body text goes here.</p>
          </b-modal>
        </div>
      </div>
    </section>

    <!-- Tabs and forms -->
    <section id="modal-tabs-forms" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Tabs and forms</h2>
      <div class="pt-1">
        <b-button variant="primary" @click="formModal = !formModal">Toggle modal</b-button>

        <div class="example-modal">
          <b-modal v-model="formModal" hide-header hide-footer>
            <b-tabs pills content-class="py-4">
              <b-tab active>
                <template v-slot:title>
                  <i class="bx bx-lock-open fs-base me-2"></i>
                  Sign in
                </template>

                <b-form>
                  <b-form-group label="Email address" label-for="email1" class="mb-3">
                    <b-form-input type="email" id="email1" placeholder="johndoe@example.com" />
                  </b-form-group>

                  <b-form-group label="Password" label-for="pass1" class="mb-3">
                    <div class="password-toggle">
                      <input class="form-control" type="password" id="pass1" />
                      <label class="password-toggle-btn">
                        <input class="password-toggle-check" type="checkbox" /><span
                          class="password-toggle-indicator"
                        ></span>
                      </label>
                    </div>
                  </b-form-group>

                  <div class="mb-3 d-flex flex-wrap justify-content-between">
                    <div class="mb-2">
                      <b-form-checkbox id="remember">Remember me</b-form-checkbox>
                    </div>
                    <a class="fs-sm" href="#">Forgot password?</a>
                  </div>
                  <b-button variant="primary" class="d-block w-100" type="submit">Sign in</b-button>
                </b-form>
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  <i class="bx bx-user fs-base me-2"></i>
                  Sign up
                </template>

                <b-form>
                  <b-form-group label="Full name" label-for="name" class="mb-3">
                    <b-form-input type="text" id="name" placeholder="John Doe" />
                  </b-form-group>

                  <b-form-group label="Email address" label-for="email2" class="mb-3">
                    <b-form-input type="email" id="email2" placeholder="johndoe@example.com" />
                  </b-form-group>

                  <b-form-group label="Password" label-for="pass2" class="mb-3">
                    <div class="password-toggle">
                      <input class="form-control" type="password" id="pass2" />
                      <label class="password-toggle-btn">
                        <input class="password-toggle-check" type="checkbox" /><span
                          class="password-toggle-indicator"
                        ></span>
                      </label>
                    </div>
                  </b-form-group>

                  <b-form-group label="Confirm password" label-for="pass3" class="mb-4">
                    <div class="password-toggle">
                      <input class="form-control" type="password" id="pass3" />
                      <label class="password-toggle-btn">
                        <input class="password-toggle-check" type="checkbox" /><span
                          class="password-toggle-indicator"
                        ></span>
                      </label>
                    </div>
                  </b-form-group>

                  <b-button variant="primary" class="d-block" type="submit">Sign up</b-button>
                </b-form>
              </b-tab>
            </b-tabs>
          </b-modal>
        </div>
      </div>
    </section>

    <!-- Live demo (Sizes) -->
    <section id="modal-live-demo" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Live demo (Sizes)</h2>
      <div class="pt-1">
        <b-button variant="outline-primary" class="me-2 mb-3" @click="modalSm = !modalSm"
          >Small Modal</b-button
        >

        <b-button variant="outline-primary" class="me-2 mb-3" @click="modalDefault = !modalDefault"
          >Default Modal
        </b-button>

        <b-button variant="outline-primary" class="me-2 mb-3" @click="modalLg = !modalLg"
          >Large Modal</b-button
        >

        <b-button variant="outline-primary" class="me-2 mb-3" @click="modalXl = !modalXl"
          >Extra large modal</b-button
        >

        <b-button variant="outline-primary" class="me-2 mb-3" @click="modalLong = !modalLong"
          >Long modal</b-button
        >

        <b-button
          variant="outline-primary"
          class="me-2 mb-3"
          @click="modalScrollable = !modalScrollable"
          >Scrollable Modal
        </b-button>

        <b-button variant="outline-primary" class="mb-3" @click="modalCenter = !modalCenter"
          >Vertically centered Modal
        </b-button>
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
import { ref } from 'vue'

const anchorData = [
  {
    id: 'modal-markup',
    title: 'Modal markup'
  },
  {
    id: 'modal-tabs-forms',
    title: 'Tabs and forms'
  },
  {
    id: 'modal-live-demo',
    title: 'Live demo (Sizes)'
  }
]

const markupModal = ref(false)
const formModal = ref(false)
const modalSm = ref(false)
const modalDefault = ref(false)
const modalLg = ref(false)
const modalXl = ref(false)
const modalLong = ref(false)
const modalScrollable = ref(false)
const modalCenter = ref(false)
</script>
