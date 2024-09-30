<template>
  <b-container class="py-5">
    <b-row class="mt-xl-2 mb-xl-3 pb-3 py-md-4 py-lg-5">
      <b-col cols="12">
        <h2 class="h1 text-center text-sm-start pb-2 pb-lg-0 mb-4 mb-lg-5">Schedule</h2>
      </b-col>
    </b-row>

    <b-tabs
      vertical
      class="row"
      nav-wrapper-class="col-lg-3 mb-4"
      content-class="col-lg-8 offset-lg-1"
      nav-class="ms-3"
    >
      <b-tab
        v-for="(item, idx) in timelineData"
        :key="idx"
        title-link-class="d-block w-100 rounded-3 p-4 p-xl-5 me-2 me-sm-3 me-lg-0 mb-lg-3"
      >
        <template v-slot:title>
          <div class="fs-xl">{{ item.scheduleFor }}</div>
          <div class="fs-3 fw-bold">{{ item.date }}</div>
        </template>

        <template v-slot:default>
          <div v-for="(schedule, idx) in item.schedule" :key="idx" class="border-bottom py-4">
            <b-row class="py-1 py-xl-3">
              <b-col sm="4" class="mb-3 mb-sm-0">
                <div class="h5 mb-1">{{ schedule.time }}</div>
                <p class="text-muted mb-2 mb-sm-4">{{ item.date }}</p>
                <span
                  class="badge fs-sm"
                  :class="
                    schedule.tag == 'Lecture'
                      ? 'bg-warning shadow-warning'
                      : schedule.tag == 'Workshop'
                        ? 'bg-success shadow-success'
                        : 'bg-primary shadow-primary'
                  "
                  >{{ schedule.tag }}</span
                >
              </b-col>
              <b-col sm="8">
                <h5>{{ schedule.topic }}</h5>
                <p class="mb-4">{{ schedule.description }}</p>
                <b-row class="row-cols-1 row-cols-md-2 g-3">
                  <b-col v-for="(speaker, idx) in schedule.speaker" :key="idx">
                    <div class="d-flex align-items-center">
                      <img
                        :src="speaker.image"
                        class="rounded-circle"
                        width="48"
                        alt="Jerome Bell"
                      />
                      <div class="ps-3">
                        <h6 class="fw-semibold mb-1">{{ speaker.name }}</h6>
                        <p class="fs-sm text-muted mb-0">{{ speaker.position }}</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </template>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script setup lang="ts">
import { timelineData } from '@/views/landings/conference/data'
</script>
