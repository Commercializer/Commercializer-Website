<template>
  <b-col xl="3" lg="4">
    <div class="offcanvas-lg offcanvas-end" id="blog-sidebar" tabindex="-1">
      <!-- Header -->
      <div class="offcanvas-header border-bottom">
        <h3 class="offcanvas-title fs-lg">Sidebar</h3>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#blog-sidebar"
          aria-label="Close"
        ></button>
      </div>

      <!-- Body -->
      <div class="offcanvas-body">
        <!-- Search form -->
        <b-form class="input-group mb-4">
          <input type="text" placeholder="Search the blog..." class="form-control rounded pe-5" />
          <Icon
            :icon="SearchIcon"
            class="position-absolute top-50 end-0 translate-middle-y me-3 fs-lg zindex-5"
          />
        </b-form>

        <!-- Categories -->
        <div class="card card-body mb-4">
          <h3 class="h5">Categories</h3>
          <ul class="nav flex-column fs-sm">
            <li class="nav-item mb-1">
              <a href="#" class="nav-link py-1 px-0 active"
                >All topics <span class="fw-normal opacity-60 ms-1">(48)</span></a
              >
            </li>
            <li class="nav-item mb-1">
              <a href="#" class="nav-link py-1 px-0"
                >Digital <span class="fw-normal opacity-60 ms-1">(12)</span></a
              >
            </li>
            <li class="nav-item mb-1">
              <a href="#" class="nav-link py-1 px-0"
                >Marketing <span class="fw-normal opacity-60 ms-1">(5)</span></a
              >
            </li>
            <li class="nav-item mb-1">
              <a href="#" class="nav-link py-1 px-0"
                >Startups <span class="fw-normal opacity-60 ms-1">(10)</span></a
              >
            </li>
            <li class="nav-item mb-1">
              <a href="#" class="nav-link py-1 px-0"
                >Technology <span class="fw-normal opacity-60 ms-1">(9)</span></a
              >
            </li>
            <li class="nav-item mb-1">
              <a href="#" class="nav-link py-1 px-0"
                >Business <span class="fw-normal opacity-60 ms-1">(4)</span></a
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link py-1 px-0"
                >Processes &amp; Tools <span class="fw-normal opacity-60 ms-1">(3)</span></a
              >
            </li>
          </ul>
        </div>

        <!-- Popular posts -->
        <div class="card card-body border-0 position-relative mb-4">
          <span
            class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"
          ></span>
          <div class="position-relative zindex-2">
            <h3 class="h5">Popular posts</h3>
            <ul class="list-unstyled mb-0">
              <li class="border-bottom pb-3 mb-3">
                <h4 class="h6 mb-2">
                  <a href="#">5 Bad Landing Page Examples &amp; How We Would Fix Them</a>
                </h4>
                <div class="d-flex align-items-center text-muted pt-1">
                  <div class="fs-xs border-end pe-3 me-3">12 hours ago</div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="LikeIcon" class="fs-base me-1" />
                    <span class="fs-xs">8</span>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="CommentIcon" class="fs-base me-1" />
                    <span class="fs-xs">4</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <Icon :icon="ShareAltIcon" class="fs-base me-1" />
                    <span class="fs-xs">2</span>
                  </div>
                </div>
              </li>
              <li class="border-bottom pb-3 mb-3">
                <h4 class="h6 mb-2">
                  <a href="#">How Agile is Your Forecasting Process?</a>
                </h4>
                <div class="d-flex align-items-center text-muted pt-1">
                  <div class="fs-xs border-end pe-3 me-3">Oct 9, 2023</div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="LikeIcon" class="fs-base me-1" />
                    <span class="fs-xs">4</span>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="CommentIcon" class="fs-base me-1" />
                    <span class="fs-xs">1</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <Icon :icon="ShareAltIcon" class="fs-base me-1" />
                    <span class="fs-xs">0</span>
                  </div>
                </div>
              </li>
              <li>
                <h4 class="h6 mb-2">
                  <a href="#">Inclusive Marketing: Why and How Does it Work?</a>
                </h4>
                <div class="d-flex align-items-center text-muted pt-1">
                  <div class="fs-xs border-end pe-3 me-3">Sep 13, 2023</div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="LikeIcon" class="fs-base me-1" />
                    <span class="fs-xs">5</span>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="CommentIcon" class="fs-base me-1" />
                    <span class="fs-xs">2</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <Icon :icon="ShareAltIcon" class="fs-base me-1" />
                    <span class="fs-xs">4</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Tags -->
        <div class="card card-body mb-4">
          <h3 class="h5">Tags</h3>
          <div class="d-flex flex-wrap">
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#lifestyle</a>
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#ux</a>
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#tech</a>
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#user</a>
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#software</a>
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#it</a>
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#network</a>
            <a href="#" class="btn btn-outline-secondary btn-sm px-3 my-1 me-2">#engineering</a>
          </div>
        </div>

        <!-- Follow Us -->
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="mb-4">Follow Us</h5>
            <a
              href="#"
              class="btn btn-icon btn-sm btn-secondary btn-linkedin me-2 mb-2"
              aria-label="LinkedIn"
            >
              <Icon :icon="LinkedinIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-sm btn-secondary btn-facebook me-2 mb-2"
              aria-label="Facebook"
            >
              <Icon :icon="FacebookIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-sm btn-secondary btn-twitter me-2 mb-2"
              aria-label="Twitter"
            >
              <Icon :icon="TwitterIcon" />
            </a>
            <a
              href="#"
              class="btn btn-icon btn-sm btn-secondary btn-instagram me-2 mb-2"
              aria-label="Instagram"
            >
              <Icon :icon="InstagramIcon" />
            </a>
          </div>
        </div>

        <!-- Advertising -->
        <div
          class="card border-0 bg-faded-primary bg-repeat-0 bg-size-cover"
          style="min-height: 25rem"
          :style="{ backgroundImage: `url('${banner}')` }"
        >
          <div class="card-body">
            <h5 class="h3 mb-4 pb-2 text-center">Ad Banner</h5>
          </div>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script setup lang="ts">
import banner from '@/assets/img/blog/banner.png'
import { Icon } from '@iconify/vue'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import CommentIcon from '@iconify/icons-bx/comment'
import LikeIcon from '@iconify/icons-bx/bx-like'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import SearchIcon from '@iconify/icons-bx/bx-search'
</script>
