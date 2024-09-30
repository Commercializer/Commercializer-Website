<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Tabs"
      description="Horizontally or vertically stacked list of items. When clicked each item switch content in the tab pane."
    />

    <!-- With icons -->
    <section id="tabs-icon-dropdown" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">With icons</h2>
      <div class="pt-1">
        <b-tabs content-class="mt-4">
          <b-tab active>
            <template v-slot:title>
              <Icon :icon="HomeAltIcon" class="opacity-70 me-2" />
              Home
            </template>
            <p class="mb-0">
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
              stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg
              carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
              sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
              iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </b-tab>

          <b-tab>
            <template v-slot:title>
              <Icon :icon="UserIcon" class="opacity-70 me-2" />
              Profile
            </template>
            <p class="mb-0">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee
              squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
              anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo
              nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica
              VHS salvia yr, vero magna velit sapiente.
            </p>
          </b-tab>

          <b-tab>
            <template v-slot:title>
              <Icon :icon="CogIcon" class="opacity-70 me-2" />
              Settings
            </template>
            <p class="mb-0">
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's
              organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify
              pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy
              hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
              pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie
              etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
              craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
            </p>
          </b-tab>
        </b-tabs>
      </div>
    </section>

    <!-- Alternative style -->
    <section id="tabs-alt" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alternative style</h2>
      <div class="pt-1">
        <b-tabs pills content-class="mt-4">
          <b-tab active>
            <template v-slot:title>
              <Icon :icon="HomeAltIcon" class="opacity-70 me-2" />
              Home
            </template>
            <p class="mb-0">
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
              stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg
              carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
              sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
              iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </b-tab>

          <b-tab>
            <template v-slot:title>
              <Icon :icon="UserIcon" class="opacity-70 me-2" />
              Profile
            </template>
            <p class="mb-0">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee
              squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
              anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo
              nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica
              VHS salvia yr, vero magna velit sapiente.
            </p>
          </b-tab>

          <b-tab>
            <template v-slot:title>
              <Icon :icon="CogIcon" class="opacity-70 me-2" />
              Settings
            </template>
            <p class="mb-0">
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's
              organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify
              pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy
              hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
              pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie
              etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
              craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
            </p>
          </b-tab>
        </b-tabs>
      </div>
    </section>

    <!-- Alignment and fill -->
    <section id="tabs-alignment" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alignment and fill</h2>
      <div class="pt-1">
        <b-tabs align="center" class="mb-5" role="tablist">
          <b-tab class="nav-item">
            <template v-slot:title>Home</template>
          </b-tab>
          <b-tab class="nav-item">
            <template v-slot:title>Profile</template>
          </b-tab>
          <b-tab class="nav-item">
            <template v-slot:title>Settings</template>
          </b-tab>
          <b-tab class="nav-item" disabled>
            <template v-slot:title>Disabled</template>
          </b-tab>
        </b-tabs>

        <b-tabs align="end" class="mb-5" role="tablist">
          <b-tab class="nav-item">
            <template v-slot:title>Home</template>
          </b-tab>
          <b-tab class="nav-item">
            <template v-slot:title>Profile</template>
          </b-tab>
          <b-tab class="nav-item">
            <template v-slot:title>Settings</template>
          </b-tab>
          <b-tab class="nav-item" disabled>
            <template v-slot:title>Disabled</template>
          </b-tab>
        </b-tabs>

        <b-tabs justified align="center">
          <b-tab class="nav-item" active>
            <template v-slot:title>Home</template>
          </b-tab>
          <b-tab class="nav-item">
            <template v-slot:title>Profile</template>
          </b-tab>
          <b-tab class="nav-item">
            <template v-slot:title>Settings</template>
          </b-tab>
          <b-tab class="nav-item" disabled>
            <template v-slot:title>Disabled</template>
          </b-tab>
        </b-tabs>
      </div>
    </section>

    <!-- Vertical tabs -->
    <section id="tabs-vertical" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Vertical tabs</h2>
      <div class="pt-1">
        <b-tabs vertical justified style="max-width: 16rem">
          <b-tab>
            <template v-slot:title>
              <i class="bx bx-home-alt opacity-70 me-2"></i>
              Home
            </template>
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <i class="bx bx-user opacity-70 me-2"></i>
              Profile
            </template>
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <i class="bx bx-message opacity-70 me-2"></i>
              Messages
            </template>
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <i class="bx bx-cog opacity-70 me-2"></i>
              Settings
            </template>
          </b-tab>
        </b-tabs>
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
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import UserIcon from '@iconify/icons-bx/user'
import CogIcon from '@iconify/icons-bx/cog'

const anchorData = [
  {
    id: 'tabs-icon-dropdown',
    title: 'With icons'
  },
  {
    id: 'tabs-alt',
    title: 'Alternative style'
  },
  {
    id: 'tabs-alignment',
    title: 'Alignment and fill'
  },
  {
    id: 'tabs-vertical',
    title: 'Vertical tabs'
  }
]
</script>
