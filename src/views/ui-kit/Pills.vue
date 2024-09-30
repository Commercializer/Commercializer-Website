<template>
  <UIKitLayout>
    <UIKitPageTitle title="Pills" description="Button-like navigation component." />

    <!-- Basic example -->
    <section id="pills-basic" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>
      <div class="pt-1">
        <b-nav>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </section>

    <!-- Rounded pills -->
    <section id="pills-rounded" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Rounded pills</h2>
      <div class="pt-1">
        <b-nav pills>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </section>

    <!-- Alignment and fill -->
    <section id="pills-alignment" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alignment and fill</h2>
      <div class="pt-1">
        <b-nav pills align="center" class="mb-5">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
        <b-nav pills align="end" class="mb-5">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
        <b-nav pills justified align="center">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Much longer nav link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </section>

    <!-- Pills with dropdowns -->
    <section id="pills-dropdown" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Pills with dropdowns</h2>
      <div class="pt-1">
        <b-nav pills>
          <b-nav-item active>Active</b-nav-item>

          <b-dropdown text="Dropdown" variant="link">
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>Separated link</b-dropdown-item>
          </b-dropdown>

          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </section>

    <!-- Vertical pills -->
    <section id="pills-vertical" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Vertical pills</h2>
      <div class="pt-1">
        <b-nav pills class="flex-column" style="max-width: 15rem">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </section>

    <!-- Tabs-like behavior -->
    <section id="pills-tabs" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Tabs-like behavior</h2>
      <div class="pt-1">
        <b-tabs content pills content-class="mt-5">
          <b-tab active>
            <template v-slot:title>
              <i class="bx bx-home-alt opacity-70 me-2"></i>
              Home
            </template>

            <p>
              Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis
              anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation
              proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud
              sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip
              cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt
              nostrud.
            </p>
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <i class="bx bx-user opacity-70 me-2"></i>
              Profile
            </template>
            <p>
              Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex.
              Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex
              eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna
              Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit
              adipisicing ut in id occaecat pariatur ut ullamco.
            </p>
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <i class="bx bx-message opacity-70 me-2"></i>
              Messages
            </template>
            <p>
              Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor
              aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit
              laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt
              do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex
              cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do
              ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo
              sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna
              enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua
              incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla
              nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate
              consequat non.
            </p>
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

const anchorData = [
  {
    id: 'pills-basic',
    title: 'Basic example'
  },
  {
    id: 'pills-rounded',
    title: 'Rounded pills'
  },
  {
    id: 'pills-alignment',
    title: 'Alignment and fill'
  },
  {
    id: 'pills-dropdown',
    title: 'Pills with dropdowns'
  },
  {
    id: 'pills-vertical',
    title: 'Vertical pills'
  },
  {
    id: 'pills-tabs',
    title: 'Tabs-like behavior'
  }
]
</script>
