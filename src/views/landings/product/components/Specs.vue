<template>
  <b-container class="pb-5 pt-md-2 pt-lg-4 pt-xl-5">
    <h2 class="h1 mb-5">Specs</h2>
    <b-row class="pb-md-2 pb-lg-4 pb-xl-5 mb-xxl-2">
      <b-col lg="8" md="9">
        <div class="table-responsive border-top mb-0">
          <table class="table align-middle">
            <tbody>
              <tr>
                <th scope="row" class="ps-0 h5">Weight (Battery &amp; Propellers Included)</th>
                <td class="pe-0">
                  <span class="d-inline-block my-4 py-1"> 1400 g </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Max Flight Time</th>
                <td class="pe-0">
                  <span class="d-inline-block my-4 py-1"> Approx. 60 minutes </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Vision System</th>
                <td class="pe-0">
                  <div class="d-inline-block my-4 py-1">
                    <ul class="list-unstyled mb-0">
                      <li>Forward Vision System</li>
                      <li>Backward Vision System</li>
                      <li>Downward Vision System</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Obstacle Sensing</th>
                <td class="pe-0">
                  <div class="d-inline-block my-4 py-1">
                    <ul class="list-unstyled mb-0">
                      <li>Front &amp; Rear Obstacle Avoidance</li>
                      <li>Left &amp; Right Infrared Obstacle Avoidance</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Camera Sensor</th>
                <td class="pe-0">
                  <div class="d-inline-block my-4 py-1">
                    <ul class="list-unstyled mb-0">
                      <li>1" CMOS</li>
                      <li>Effective pixels: 20 M</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Max. Video Recording Resolution</th>
                <td class="pe-0">
                  <span class="d-inline-block my-4 py-1"> 4K 60P </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Max Transmission Distance</th>
                <td class="pe-0">
                  <span class="d-inline-block my-4 py-1"> FCC: 4.3 mi </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Video Transmission System</th>
                <td class="pe-0">
                  <span class="d-inline-block my-4 py-1"> Lightbridge </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="ps-0 h5">Operating Frequency</th>
                <td class="pe-0">
                  <span class="d-inline-block my-4 py-1"> 2.4 GHz/5.8 GHz </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
      <b-col md="3" class="offset-lg-1">
        <b-row class="row-cols-2 row-cols-md-1">
          <b-col>
            <img :src="specs1Img" alt="Image" />
          </b-col>
          <b-col>
            <img :src="specs2Img" alt="Image" />
          </b-col>
          <b-col>
            <img :src="specs3Img" alt="Image" />
          </b-col>
          <b-col>
            <img :src="specs4Img" alt="Image" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import specs1Img from '@/assets/img/landing/product/specs/01.png'
import specs2Img from '@/assets/img/landing/product/specs/02.png'
import specs3Img from '@/assets/img/landing/product/specs/03.png'
import specs4Img from '@/assets/img/landing/product/specs/04.png'
</script>
