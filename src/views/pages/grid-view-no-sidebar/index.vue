<template>
  <Navbar :fixedTop="true" :isTransparent="false" :absolute="false" :navbarSticky="false" :stuck="true"/>

  <Breadcrumb subTitle="Blog Grid no Sidebar" />

  <Content />

  <Cta />

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Content from '@/views/pages/grid-view-no-sidebar/components/Content.vue'
import Cta from '@/views/landings/blog/components/Cta.vue'
import Footer from '@/views/pages/list-view-no-sidebar/components/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
