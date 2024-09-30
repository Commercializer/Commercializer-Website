<template>
  <b-container class="py-5 my-1 my-md-4 my-lg-5">
    <b-row>
      <b-col lg="7" class="mb-4 mb-lg-0">
        <div class="pe-lg-4 me-lg-3 pe-xl-0 me-xl-0">
          <h2 class="h1 mb-4">About</h2>
          <p class="fs-lg mb-0">
            Lacinia pulvinar at diam, urna, non blandit. Cras id enim tortor nascetur. Cursus ante
            eu nam ut non vestibulum sem. Ullamcorper quis varius eu, vel. Sagittis ut suspendisse
            et, nec. Parturient eu iaculis sit dolor, erat mauris. Leo at egestas aliquet duis
            pellentesque amet. Proin mattis ac ornare malesuada sed. Diam libero tortor suspendisse
            molestie non duis enim. Lectus pulvinar euismod et risus egestas. Cursus porttitor id
            faucibus eu vestibulum. Eu blandit faucibus nulla adipiscing amet ullamcorper.
          </p>
        </div>
      </b-col>
      <b-col lg="5" xl="4" class="offset-xl-1 border-start-lg">
        <div class="ps-lg-4 ms-lg-3">
          <h3 class="h5 d-flex align-items-center">
            <Icon :icon="HelpCircleIcon" class="text-primary fs-4 me-2" />
            Challenge
          </h3>
          <p class="pb-4 mb-0 mb-lg-3">
            Ultricies massa iaculis vestibulum egestas vestibulum, cursus. Leo non arcu ultricies
            senectus a purus sed.
          </p>
          <h3 class="h5 d-flex align-items-center">
            <Icon :icon="BulbIcon" class="text-primary fs-4 me-2" />
            Solution
          </h3>
          <p class="mb-0">
            Sit tellus id proin viverra iaculis pellentesque ornare. Diam augue sit feugiat
            porttitor leo, fusce vel ac. Placerat vulputate quisque.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import HelpCircleIcon from '@iconify/icons-bx/help-circle'
import BulbIcon from '@iconify/icons-bx/bulb'
</script>
