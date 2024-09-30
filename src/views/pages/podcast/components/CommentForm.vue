<template>
  <b-container class="mb-4 pb-2 mb-md-5 pb-lg-5">
    <b-row class="gy-5">
      <!-- Comment form -->
      <b-col lg="9">
        <div class="card p-md-5 p-4 border-0 bg-secondary">
          <div class="card-body w-100 mx-auto px-0" style="max-width: 746px">
            <h2 class="mb-4 pb-3">Leave a Comment</h2>
            <b-form class="row gy-4">
              <b-col sm="6" cols="12">
                <b-form-group label-for="c-name" label="Name" label-class="fs-base">
                  <b-form-input id="c-name" type="text" class="form-control-lg" required />
                  <b-form-invalid-feedback class="invalid-tooltip"
                    >Please, enter your name.</b-form-invalid-feedback
                  >
                </b-form-group>
              </b-col>
              <b-col sm="6" cols="12">
                <b-form-group label-for="c-email" label="Email" label-class="fs-base">
                  <b-form-input id="c-email" type="email" class="form-control-lg" required />
                  <b-form-invalid-feedback class="invalid-tooltip"
                    >Please, provide a valid email address.
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group label-for="c-comment" label="Comment" label-class="fs-base">
                  <b-form-textarea
                    id="c-comment"
                    class="form-control-lg"
                    rows="3"
                    placeholder="Type your comment here..."
                    required
                  ></b-form-textarea>
                  <b-form-invalid-feedback class="invalid-tooltip"
                    >Please, enter your comment.
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-checkbox id="c-save" class="form-check-input">
                  Save my name and email in this browser for the next time I comment.
                </b-form-checkbox>
              </b-col>
              <b-col cols="12">
                <b-button type="submit" size="lg" variant="primary" class="w-sm-auto w-100 mt-2"
                  >Post comment</b-button
                >
              </b-col>
            </b-form>
          </div>
        </div>
      </b-col>

      <!-- Subscription form + Sharing -->
      <b-col lg="3" class="position-relative">
        <div class="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4" style="top: 70px !important">
          <b-row class="gy-lg-5 gy-4 justify-content-center text-lg-start text-center">
            <!-- Subscription form -->
            <b-col lg="12" sm="7" cols="11" class="col-lg-12 col-sm-7 col-11">
              <h6 class="fs-lg">Enjoy this post? Join our newsletter</h6>
              <b-form>
                <div class="input-group mb-3">
                  <Icon
                    :icon="EnvelopeIcon"
                    class="position-absolute start-0 top-50 translate-middle-y zindex-5 ms-3 text-muted d-lg-inline-block d-none"
                  />
                  <b-form-input
                    type="email"
                    placeholder="Your Email"
                    class="ps-lg-5 rounded text-lg-start text-center"
                    required
                  />
                </div>
                <b-button type="submit" class="w-100" variant="primary">Subscribe</b-button>
              </b-form>
            </b-col>

            <!-- Sharing -->
            <b-col lg="12" sm="7" cols="11">
              <h6 class="fs-lg">Don’t forget to share it</h6>
              <div class="mb-4 pb-lg-3">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-linkedin me-2 mb-2"
                  aria-label="LinkedIn"
                >
                  <Icon :icon="LinkedinIcon" />
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-facebook me-2 mb-2"
                  aria-label="Facebook"
                >
                  <Icon :icon="FacebookIcon" />
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-twitter me-2 mb-2"
                  aria-label="Twitter"
                >
                  <Icon :icon="TwitterIcon" />
                </a>
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-instagram me-2 mb-2"
                  aria-label="Instagram"
                >
                  <Icon :icon="InstagramIcon" />
                </a>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
</script>
