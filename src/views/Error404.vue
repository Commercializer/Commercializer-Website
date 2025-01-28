```vue
<template>
    <div class="position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center" style="min-height: 100vh;">
        
    <Navbar :absolute="false" :fixedTop="true"/>

    <!-- Page content -->
    <section class="container d-flex flex-column h-100 align-items-center justify-content-center position-relative zindex-5 pt-2">
    <div class="text-center pt-5 pb-3 mt-auto">
        <!-- Parallax gfx (Dark version) -->
        <Parallax custom-class="parallax mx-auto" :custom-style="{ maxWidth: '574px' }">
            <div class="parallax-layer zindex-5" data-depth="-0.15" >
                <img :src="darkLayer3" alt="Layer"/>
            </div>
            <div class="parallax-layer" data-depth="0.12"  >
                <img :src="darkLayer2" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="-0.15">
            <img :src="darkLayer1" alt="Layer" />
            </div>
        </Parallax>

        <h2 class="display-5">Page not Found</h2>
        <p class="fs-xl pb-3 pb-md-0 mb-md-5">Unfortunately, The page you are looking for is not available at the moment.</p>
        <button @click="goToLanding" class="btn btn-lg btn-primary shadow-primary w-sm-auto w-100 mb-5">
        <i class="bx bx-home-alt me-2 ms-n1 lead"></i>
        Go to homepage
        </button>
    </div>
    </section>
    </div>
    <FooterSection />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue';

import darkLayer1 from '@/assets/img/404/dark/left.webp';
import darkLayer2 from '@/assets/img/404/dark/middle.webp';
import darkLayer3 from '@/assets/img/404/dark/right.webp';

import Parallax from '@/components/Parallax.vue';
import FooterSection from '@/components/FooterSection.vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const goToLanding = () => {
    router.push({ name: "home-page" });
}
</script>
