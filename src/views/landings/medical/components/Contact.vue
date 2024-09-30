<template>
  <b-container class="pb-5 mb-1 mb-md-4 mb-lg-5">
    <b-row class="pb-xl-3">
      <b-col md="6" class="pb-2 pb-md-0 mb-4 mb-md-0">
        <LightGallery custom-class="gallery rounded-3 shadow-sm" :custom-style="{ maxWidth: '636px' }">
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17239.8060668495!2d-122.43668227971098!3d37.741526659411576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1259a3ed73%3A0xaae7371cd8db1e38!2sNoe%20Valley%20Bakery!5e0!3m2!1sen!2sua!4v1637757959377!5m2!1sen!2sua"
            data-iframe="true" class="gallery-item rounded-3"
            data-sub-html='<h6 class="fs-sm text-light">Noe Valley Bakery 24th Street, San Francisco, CA, USA</h6>'>
            <Icon :icon="MapIcon"
              class="bx text-primary display-5 position-absolute top-50 start-50 translate-middle mb-0" />
            <img src="@/assets/img/landing/medical/map.jpg" alt="Map cover" />
            <div class="gallery-item-caption fs-sm fw-medium">Expand the map</div>
          </a>
        </LightGallery>
      </b-col>
      <b-col xl="5" md="6" class="offset-xl-1">
        <h2 class="h1 pb-4 mb-1 mb-lg-3">Get Free Professional Consultation</h2>
        <ul class="list-unstyled pb-3 mb-0 mb-lg-3">
          <li class="d-flex mb-3">
            <Icon :icon="MapBxIcon" class="bx text-muted fs-xl mt-1 me-2"></Icon>
            Noe Valley Bakery 24th Street, San Francisco, CA, USA
          </li>
          <li class="d-flex mb-3">
            <Icon :icon="PhonecallIcon" class="bx text-muted fs-xl mt-1 me-2"></Icon>
            (406) 555-0120
          </li>
          <li class="d-flex mb-3">
            <Icon :icon="TimeIcon" class="bx text-muted fs-xl mt-1 me-2"></Icon>
            <div>
              <div>
                <span class="text-dark fw-semibold me-1">Mon – Fri:</span>9:00 am – 22:00 pm
              </div>
              <div>
                <span class="text-dark fw-semibold me-1">Sat – Sun:</span>9:00 am – 20:00 pm
              </div>
            </div>
          </li>
          <li class="d-flex mb-3">
            <Icon :icon="EnvelopeIcon" class="bx text-muted fs-xl mt-1 me-2"></Icon>
            example@email.com
          </li>
        </ul>
        <a href="#" class="btn btn-primary shadow-primary btn-lg">Make an appointment</a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import MapIcon from '@iconify/icons-bx/bxs-map';
import MapBxIcon from '@iconify/icons-bx/bx-map';
import PhonecallIcon from '@iconify/icons-bx/bx-phone-call';
import TimeIcon from '@iconify/icons-bx/bx-time';
import EnvelopeIcon from '@iconify/icons-bx/bx-envelope';
import LightGallery from '@/components/LightGallery.vue';
</script>
