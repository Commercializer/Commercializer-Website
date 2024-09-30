<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <h2 class="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Explore Our Featured Projects</h2>

    <Rellax>
      <b-row v-for="(project, idx) in featureProjectData" :key="idx" class="gy-4 mb-4 pb-md-3 pb-2">
        <b-col
          md="6"
          class="rellax"
          data-rellax-percentage="0.5"
          data-rellax-speed="0.5"
          data-disable-parallax-down="md"
        >
          <div class="bg-secondary rounded-3">
            <img :src="project.image" alt="Project image" />
          </div>
        </b-col>
        <b-col
          xl="4"
          lg="5"
          md="6"
          sm="8"
          class="offset-lg-1 d-flex rellax"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.5"
          data-disable-parallax-down="md"
        >
          <div class="align-self-center ps-lg-0 ps-md-4">
            <h4 class="mb-lg-4 mb-3 fs-base fw-normal text-body">{{ project.category }}</h4>
            <h3 class="h2 mb-lg-4 mb-3">{{ project.title }}</h3>
            <p class="mb-lg-4 mb-3">{{ project.description }}</p>
            <ul class="mb-lg-4 mb-3 fs-sm text-muted list-inline" style="max-width: 19.125rem">
              <li v-for="(tag, idx) in project.tags" :key="idx" class="list-inline-item me-1">
                {{ tag }}
                <span v-if="idx != project.tags.length - 1" class="ms-1">/</span>
              </li>
            </ul>
            <a href="#" class="btn btn-lg btn-outline-primary">Read More</a>
          </div>
        </b-col>
      </b-row>
    </Rellax>
  </b-container>
</template>

<script setup lang="ts">
import { featureProjectData } from '@/views/landings/dev-agency-3/data'
import Rellax from '@/components/Rellax.vue'
</script>
