<script setup lang="ts">
import { Icon } from '@iconify/vue';
import LeftArrowIcon from '@iconify/icons-bx/right-arrow-alt';
</script>

<template>
    <section class="bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4"
        data-bs-theme="dark">
        <b-container class="position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
            <b-row class="pt-3 pb-2 py-md-4 flex-lg-row-reverse gap-5 gap-lg-0 justify-content-between pe-lg-4">

                <b-col xl="4" md="4" class="d-md-flex justify-content-center">
                    <ParralaxWrapper custom-class="parallax mx-auto ms-md-0 me-md-n5"
                        :custom-style="{ maxWidth: '100%' }">
                        <div class="parallax-layer zindex-2" data-depth="0.1">
                            <nuxt-img src="/images/logo.png" alt="Ca" :style="{ width: '100%' }" />
                        </div>
                        <!-- <div class="parallax-layer zindex-3" data-depth="0.25">
                            <nuxt-img src="/images/logo.png" alt="Bubble" />
                        </div>
                        <div class="parallax-layer" data-depth="-0.15">
                            <nuxt-img src="/images/logo.png" alt="Bubble" />
                        </div> -->
                    </ParralaxWrapper>
                </b-col>
                <!-- Text -->
                <b-col xl="7" md="7" class="pt-lg-5 text-center text-md-start mb-4 mb-md-0">
                    <h1 class="display-3 pb-2 pb-sm-3 brand-gradient-text">Commercializing Innovations</h1>
                    <p class="d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5 description">
                        Transforming groundbreaking ideas into market-leading products
                    </p>
                    <div class="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0">
                        <a href="#" class="btn btn-lg me-3 me-sm-4 d-lg-none " style="background: #fff;color: #121212">
                            Get Commercialized
                            &nbsp;
                            <Icon :icon="LeftArrowIcon" class="fs-4 lh-1 me-1" />
                        </a>
                        <!-- <a href="#" class="btn btn-lg btn-outline-secondary">Contact us</a> -->
                    </div>
                    <!-- <div
                        class="d-flex align-items-center justify-content-center justify-content-md-start text-start pt-4 pt-lg-5 mt-xxl-5">
                        <div class="d-flex me-3">
                            <div class="d-flex align-items-center justify-content-center bg-light rounded-circle"
                                style="width: 52px; height: 52px">
                                <nuxt-img :src="avatar14Img" class="rounded-circle" width="48" alt="Avatar" />
                            </div>
                            <div class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                                style="width: 52px; height: 52px">
                                <nuxt-img :src="avatar8Img" class="rounded-circle" width="48" alt="Avatar" />
                            </div>
                            <div class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                                style="width: 52px; height: 52px">
                                <nuxt-img :src="avatar15Img" class="rounded-circle" width="48" alt="Avatar" />
                            </div>
                        </div>
                        <div class="text-light"><strong>400k+</strong> users already with us</div>
                    </div> -->
                </b-col>

            </b-row>
            <div class="country-list mt-4">
                <div class="country">
                    <nuxt-img src="/images/flags/usa.svg" />
                    <span>
                        Delaware, USA
                    </span>
                </div>
                <div class="country">
                    <nuxt-img src="/images/flags/qatar.svg" />
                    <span>
                        Doha, Qatar
                    </span>
                </div>
                <div class="country">
                    <nuxt-img src="/images/flags/sri_lanka.svg" />
                    <span>
                        Colombo, Sri Lanka
                    </span>
                </div>
            </div>
        </b-container>
    </section>
</template>


<style lang="scss" scoped>
.brand-gradient-text {
    background: linear-gradient(90deg, #81cb30, #14b7c6);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}


.description {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
}

.country-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
}


.country {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    font-size: 1.25rem;
    img {
        height: 32px;
    }

    span {
        text-align: center;
        font-weight: 600;
        color: #fff
    }
}
</style>