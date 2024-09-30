<template>
  <b-container class="pb-sm-1 pb-md-3">
    <!-- Row 1 -->
    <b-row class="align-items-lg-center pb-5 mb-2 mb-lg-4 mb-xl-5">
      <b-col md="6" class="mb-4 mb-md-0">
        <img :src="img1" class="rounded-3" alt="Image" />
      </b-col>
      <b-col md="6">
        <div class="ps-xl-5 ms-md-2 ms-lg-4">
          <h2 class="h1 mb-3 mb-sm-4">We personalize how we work to fit your project needs</h2>
          <p class="mb-4 mb-lg-5">
            Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna
            ullamcorper consectetur purus quisque.
          </p>
          <a href="#" class="btn btn-lg btn-primary shadow-primary">Start your project</a>
        </div>
      </b-col>
    </b-row>

    <!-- Row 2 -->
    <b-row class="align-items-lg-center pt-md-3 pb-5 mb-2 mb-lg-4 mb-xl-5">
      <b-col md="6" class="order-md-2 mb-4 mb-md-0">
        <img :src="img2" class="rounded-3" alt="Image" />
      </b-col>
      <b-col md="6" class="order-md-1">
        <div class="pe-xl-5 me-md-2 me-lg-4">
          <h2 class="h1 mb-3 mb-sm-4">Product development with the best experience</h2>
          <p class="mb-3 mb-sm-4">
            We create diverse, complex, web and mobile solutions for any business need. With us you
            get quality software and perfect service every time. Quisque integer eget velit
            facilisis enim malesuada metus, risus amet ultricies.
          </p>
          <ul class="list-unstyled mb-0">
            <li class="d-flex mb-2">
              <i class="bx bx-check text-primary lead me-2"></i>
              Quis euismod lacus, at consectetur porta
            </li>
            <li class="d-flex mb-2">
              <i class="bx bx-check text-primary lead me-2"></i>
              Dictumst enim lectus dis eget non metus cras
            </li>
            <li class="d-flex">
              <i class="bx bx-check text-primary lead me-2"></i>
              Risus volutpat tellus hendrerit nibh
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import img1 from '@/assets/img/services/single/image01.jpg'
import img2 from '@/assets/img/services/single/image02.jpg'
</script>
