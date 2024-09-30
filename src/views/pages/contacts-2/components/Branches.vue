<template>
  <b-container class="py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
    <b-row class="py-5">
      <b-col lg="6" class="mb-5 mb-lg-0">
        <div class="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
          <iframe
            class="d-block h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5020.057277316842!2d-122.40737351959179!3d37.73986147046842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd5ce6be90058bc85!2sOur%20Planet%20Recycling%20S.F.!5e0!3m2!1sen!2sua!4v1653946944869!5m2!1sen!2sua"
            style="border: 0; min-height: 300px"
            allowfullscreen
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </b-col>
      <b-col lg="5" class="offset-lg-1">
        <h2 class="h4 mb-4">Medical Center 1</h2>
        <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
          <li class="d-flex pb-1 mb-2">
            <Icon :icon="MapIcon" class="text-primary fs-xl me-2" style="margin-top: 0.125rem" />
            445 Bayshor Blvd, San Francisco, CA 94124
          </li>
          <li class="d-flex pb-1 mb-2">
            <Icon
              :icon="PhoneCallIcon"
              class="text-primary fs-xl me-2"
              style="margin-top: 0.125rem"
            />
            (406) 555-0120
          </li>
          <li class="d-flex">
            <Icon
              :icon="TimeFiveIcon"
              class="text-primary fs-xl me-2"
              style="margin-top: 0.125rem"
            />
            <div>
              <strong class="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 am
              <br />
              <strong class="text-nav">Sat - Sun:</strong>: 9:00 am - 20:00 am
            </div>
          </li>
        </ul>
        <h2 class="h4 mb-4">Medical Center 2</h2>
        <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
          <li class="d-flex pb-1 mb-2">
            <Icon :icon="MapIcon" class="text-primary fs-xl me-2" style="margin-top: 0.125rem" />
            2464 Royal Ln. Mesa, New Jersey 45463
          </li>
          <li class="d-flex pb-1 mb-2">
            <Icon
              :icon="PhoneCallIcon"
              class="text-primary fs-xl me-2"
              style="margin-top: 0.125rem"
            />
            (406) 544-0123
          </li>
          <li class="d-flex">
            <Icon
              :icon="TimeFiveIcon"
              class="text-primary fs-xl me-2"
              style="margin-top: 0.125rem"
            />
            <div>
              <strong class="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 am
              <br />
              <strong class="text-nav">Sat - Sun:</strong>: 9:00 am - 20:00 am
            </div>
          </li>
        </ul>
        <div class="d-flex pt-1 pt-md-3 pt-xl-4">
          <a href="#" class="btn btn-icon btn-secondary btn-facebook me-3" aria-label="Facebook">
            <Icon :icon="FacebookIcon" />
          </a>
          <a href="#" class="btn btn-icon btn-secondary btn-instagram me-3" aria-label="Instagram">
            <Icon :icon="InstagramIcon" />
          </a>
          <a href="#" class="btn btn-icon btn-secondary btn-twitter me-3" aria-label="Twitter">
            <Icon :icon="TwitterIcon" />
          </a>
          <a href="#" class="btn btn-icon btn-secondary btn-youtube" aria-label="YouTube">
            <Icon :icon="YoutubeIcon" />
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import MapIcon from '@iconify/icons-bx/bx-map'
import PhoneCallIcon from '@iconify/icons-bx/phone-call'
import TimeFiveIcon from '@iconify/icons-bx/time-five'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
</script>
