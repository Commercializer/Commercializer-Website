<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Carousel (Slider)"
      description="A slideshow component for cycling through elements (images or slides with any content) like a carousel."
      :is-silicon-component="true"
    />

    <!-- Info alert -->
    <div class="alert alert-info mt-5 mb-n1 mb-lg-0" role="alert">
      <div class="d-flex">
        <Icon :icon="InfoCircleIcon" class="lead me-2 me-sm-3" />
        <div class="text-break">
          <p class="mb-2">
            <strong>Carousel component</strong> depends on <strong>Swiper plugin</strong>. Make sure
            to link to <strong>Swiper css and js</strong> files in your document:
          </p>
          <ul class="list-unstyled mb-2">
            <li><strong>import 'swiper/swiper-bundle.css'</strong></li>
            <li><strong>import 'swiper/swiper-bundle.min.css'</strong></li>
          </ul>
          <p>Use this page as a reference.</p>
          <p>You can pass almost any slider option to <code>Swiper</code></p>
          <p class="fw-bold mb-2">Usefull links</p>
          <ul class="list-unstyled mb-1">
            <li class="mb-1">
              <a
                href="https://swiperjs.com/demos"
                class="d-flex align-items-center fw-medium text-decoration-none"
                target="_blank"
                rel="noopener"
              >
                <Icon :icon="LinkExternalIcon" class="me-2" />
                Swiper slider demos with code examples
              </a>
            </li>
            <li>
              <a
                href="https://swiperjs.com/vue"
                class="d-flex align-items-center fw-medium text-decoration-none"
                target="_blank"
                rel="noopener"
              >
                <Icon :icon="LinkExternalIcon" class="me-2" />
                Swiper Vue: options, methods and events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Navigation (Prev / next buttons) -->
    <section id="carousel-navigation" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Navigation (Prev / next buttons)</h2>

      <div class="pt-1">
        <div class="d-flex flex-wrap align-items-center">
          <div class="d-flex my-2 me-4">
            <b-button class="btn-prev btn-icon btn-xl me-2" aria-label="Previous">
              <Icon :icon="ChevronLeftIcon" />
            </b-button>
            <b-button class="btn-next btn-icon btn-xl ms-2" aria-label="Next">
              <Icon :icon="ChevronRightIcon" />
            </b-button>
          </div>
          <div class="d-flex my-2 me-4">
            <b-button size="lg" class="btn-prev btn-icon me-2" aria-label="Previous">
              <Icon :icon="ChevronLeftIcon" />
            </b-button>
            <b-button size="lg" class="btn-next btn-icon ms-2" aria-label="Next">
              <Icon :icon="ChevronRightIcon" />
            </b-button>
          </div>
          <div class="d-flex my-2 me-4">
            <b-button size="md" class="btn-prev btn-icon me-2" aria-label="Previous">
              <Icon :icon="ChevronLeftIcon" />
            </b-button>
            <b-button size="md" class="btn-next btn-icon ms-2" aria-label="Next">
              <Icon :icon="ChevronRightIcon" />
            </b-button>
          </div>
          <div class="d-flex my-2">
            <b-button size="sm" class="btn-prev btn-icon me-2" aria-label="Previous">
              <Icon :icon="ChevronLeftIcon" />
            </b-button>
            <b-button size="sm" class="btn-next btn-icon ms-2" aria-label="Next">
              <Icon :icon="ChevronRightIcon" />
            </b-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pagination -->
    <section id="carousel-pagination" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Pagination</h2>

      <div class="pt-1">
        <b-row class="row-cols-md-2 row-cols-xl-2 g-4">
          <b-col>
            <Swiper
              class="swiper-nav-onhover"
              :modules="[Pagination, Navigation]"
              :spaceBetween="20"
              :loop="true"
              :pagination="{
                el: '.swiper-pagination',
                clickable: true
              }"
              :navigation="{
                prevEl: '.btn-prev',
                nextEl: '.btn-next'
              }"
            >
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    1
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    2
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    3
                  </div>
                </div>
              </SwiperSlide>

              <b-button size="sm" class="btn-prev btn-icon me-2" aria-label="Previous">
                <Icon :icon="ChevronLeftIcon" />
              </b-button>
              <b-button size="sm" class="btn-next btn-icon ms-2" aria-label="Next">
                <Icon :icon="ChevronRightIcon" />
              </b-button>
              <div class="swiper-pagination"></div>
            </Swiper>
          </b-col>

          <b-col>
            <Swiper
              class="swiper-nav-onhover"
              :modules="[Pagination, Navigation]"
              :spaceBetween="20"
              :pagination="{
                el: '.swiper-pagination',
                type: 'progressbar'
              }"
              :navigation="{
                prevEl: '.btn-prev',
                nextEl: '.btn-next'
              }"
            >
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    1
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    2
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    3
                  </div>
                </div>
              </SwiperSlide>

              <b-button size="sm" class="btn-prev btn-icon me-2" aria-label="Previous">
                <Icon :icon="ChevronLeftIcon" />
              </b-button>
              <b-button size="sm" class="btn-next btn-icon ms-2" aria-label="Next">
                <Icon :icon="ChevronRightIcon" />
              </b-button>
              <div class="swiper-pagination"></div>
            </Swiper>
          </b-col>

          <b-col>
            <Swiper
              class="swiper-nav-onhover"
              :modules="[Pagination, Navigation]"
              :spaceBetween="20"
              :pagination="{
                el: '.swiper-pagination',
                type: 'fraction'
              }"
              :navigation="{
                prevEl: '.btn-prev',
                nextEl: '.btn-next'
              }"
            >
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    1
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    2
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    3
                  </div>
                </div>
              </SwiperSlide>

              <b-button size="sm" class="btn-prev btn-icon me-2" aria-label="Previous">
                <Icon :icon="ChevronLeftIcon" />
              </b-button>
              <b-button size="sm" class="btn-next btn-icon ms-2" aria-label="Next">
                <Icon :icon="ChevronRightIcon" />
              </b-button>
              <div class="swiper-pagination text-muted fs-4 lh-1 opacity-50 fw-bold"></div>
            </Swiper>
          </b-col>

          <b-col>
            <Swiper
              class="swiper-pager swiper-nav-onhover"
              :modules="[Navigation]"
              :spaceBetween="20"
              :loop="true"
              :pager="true"
              :navigation="{
                prevEl: '.page-prev',
                nextEl: '.page-next'
              }"
            >
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    1
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    2
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="ratio ratio-16x9 bg-secondary">
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
                  >
                    3
                  </div>
                </div>
              </SwiperSlide>

              <b-nav
                class="pagination d-flex justify-content-center position-absolute bottom-0 zindex-2 start-50 translate-middle-x px-2 mb-3"
              >
                <div class="page-item me-2">
                  <a
                    class="page-link page-prev btn-icon btn-sm"
                    href="#"
                    aria-label="Previous page"
                  >
                    <Icon :icon="ChevronLeftIcon" />
                  </a>
                </div>
                <ul class="list-unstyled d-flex justify-content-center mb-0"></ul>
                <div class="page-item ms-2">
                  <a class="page-link page-next btn-icon btn-sm" href="#" aria-label="Next page">
                    <Icon :icon="ChevronRightIcon" />
                  </a>
                </div>
              </b-nav>
            </Swiper>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Multiple slides (Responsive) + Arrows and bullets outside -->
    <section id="carousel-multiple-slides" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Multiple slides (Responsive) + Arrows and bullets outside</h2>

      <div class="pt-1">
        <div class="position-relative px-xl-5">
          <b-button
            size="sm"
            id="prev-news"
            class="btn-prev btn-icon position-absolute top-50 start-0 translate-middle-y d-none d-xl-inline-flex"
            aria-label="Previous"
          >
            <Icon :icon="ChevronLeftIcon" />
          </b-button>
          <b-button
            size="sm"
            id="next-news"
            class="btn-next btn-icon position-absolute top-50 end-0 translate-middle-y d-none d-xl-inline-flex"
            aria-label="Next"
          >
            <Icon :icon="ChevronRightIcon" />
          </b-button>
          <div class="px-xl-2">
            <Swiper
              class="mx-n2"
              :modules="[Pagination, Navigation]"
              :slidesPerView="1"
              :loop="true"
              :pagination="{
                el: '.swiper-pagination',
                clickable: true
              }"
              :navigation="{
                prevEl: '#prev-news',
                nextEl: '#next-news'
              }"
              :breakpoints="{
                500: {
                  slidesPerView: 2
                },
                1600: {
                  slidesPerView: 3
                }
              }"
            >
              <SwiperSlide class="h-auto pb-3">
                <article class="card h-100 border-0 shadow-sm mx-2">
                  <div class="position-relative">
                    <a
                      href="#"
                      class="position-absolute top-0 start-0 w-100 h-100"
                      aria-label="Read more"
                    ></a>
                    <a
                      href="#"
                      class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Read later"
                      aria-label="Read later"
                    >
                      <i class="bx bx-bookmark"></i>
                    </a>
                    <img
                      src="@/assets/img/landing/financial/news/01.jpg"
                      class="card-img-top"
                      alt="Image"
                    />
                  </div>
                  <div class="card-body pb-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none"
                        >Business</a
                      >
                      <span class="fs-sm text-muted">12 hours ago</span>
                    </div>
                    <h3 class="h5 mb-0">
                      <a href="#">How agile is your forecasting process?</a>
                    </h3>
                  </div>
                  <div class="card-footer py-4">
                    <a href="#" class="d-flex align-items-center text-decoration-none">
                      <img
                        src="@/assets/img/avatar/40.jpg"
                        class="rounded-circle"
                        width="48"
                        alt="Avatar"
                      />
                      <div class="ps-3">
                        <h6 class="fs-base fw-semibold mb-0">Marvin McKinney</h6>
                        <span class="fs-sm text-muted">Deputy Director</span>
                      </div>
                    </a>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide class="h-auto pb-3">
                <article class="card h-100 border-0 shadow-sm mx-2">
                  <div class="position-relative">
                    <a
                      href="#"
                      class="position-absolute top-0 start-0 w-100 h-100"
                      aria-label="Read more"
                    ></a>
                    <a
                      href="#"
                      class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Read later"
                      aria-label="Read later"
                    >
                      <i class="bx bx-bookmark"></i>
                    </a>
                    <img
                      src="@/assets/img/landing/financial/news/02.jpg"
                      class="card-img-top"
                      alt="Image"
                    />
                  </div>
                  <div class="card-body pb-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none"
                        >Enterprise</a
                      >
                      <span class="fs-sm text-muted">1 day ago</span>
                    </div>
                    <h3 class="h5 mb-0">
                      <a href="#"
                        >A future with high public debt: low-for-long is not low forever</a
                      >
                    </h3>
                  </div>
                  <div class="card-footer py-4">
                    <a href="#" class="d-flex align-items-center text-decoration-none">
                      <img
                        src="@/assets/img/avatar/04.jpg"
                        class="rounded-circle"
                        width="48"
                        alt="Avatar"
                      />
                      <div class="ps-3">
                        <h6 class="fs-base fw-semibold mb-0">Jenny Wilson</h6>
                        <span class="fs-sm text-muted">Financial Expert</span>
                      </div>
                    </a>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide class="h-auto pb-3">
                <article class="card h-100 border-0 shadow-sm mx-2">
                  <div class="position-relative">
                    <a
                      href="#"
                      class="position-absolute top-0 start-0 w-100 h-100"
                      aria-label="Read more"
                    ></a>
                    <a
                      href="#"
                      class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Read later"
                      aria-label="Read later"
                    >
                      <i class="bx bx-bookmark"></i>
                    </a>
                    <img
                      src="@/assets/img/landing/financial/news/03.jpg"
                      class="card-img-top"
                      alt="Image"
                    />
                  </div>
                  <div class="card-body pb-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none"
                        >Finance</a
                      >
                      <span class="fs-sm text-muted">Nov 24, 2023</span>
                    </div>
                    <h3 class="h5 mb-0">
                      <a href="#">Understanding the rise in long-term rates</a>
                    </h3>
                  </div>
                  <div class="card-footer py-4">
                    <a href="#" class="d-flex align-items-center text-decoration-none">
                      <img
                        src="@/assets/img/avatar/05.jpg"
                        class="rounded-circle"
                        width="48"
                        alt="Avatar"
                      />
                      <div class="ps-3">
                        <h6 class="fs-base fw-semibold mb-0">Albert Flores</h6>
                        <span class="fs-sm text-muted">Financial Counsellor</span>
                      </div>
                    </a>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide class="h-auto pb-3">
                <article class="card h-100 border-0 shadow-sm mx-2">
                  <div class="position-relative">
                    <a
                      href="#"
                      class="position-absolute top-0 start-0 w-100 h-100"
                      aria-label="Read more"
                    ></a>
                    <a
                      href="#"
                      class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Read later"
                      aria-label="Read later"
                    >
                      <i class="bx bx-bookmark"></i>
                    </a>
                    <img
                      src="@/assets/img/landing/financial/news/04.jpg"
                      class="card-img-top"
                      alt="Image"
                    />
                  </div>
                  <div class="card-body pb-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none"
                        >Ticks &amp; Trips</a
                      >
                      <span class="fs-sm text-muted">Oct 13, 2023</span>
                    </div>
                    <h3 class="h5 mb-0">
                      <a href="#">Stocks making the biggest moves after hours</a>
                    </h3>
                  </div>
                  <div class="card-footer py-4">
                    <a href="#" class="d-flex align-items-center text-decoration-none">
                      <img
                        src="@/assets/img/avatar/41.jpg"
                        class="rounded-circle"
                        width="48"
                        alt="Avatar"
                      />
                      <div class="ps-3">
                        <h6 class="fs-base fw-semibold mb-0">Jerome Bell</h6>
                        <span class="fs-sm text-muted">Business Analyst</span>
                      </div>
                    </a>
                  </div>
                </article>
              </SwiperSlide>

              <div class="swiper-pagination position-relative bottom-0 mt-4 mb-lg-2"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    <!-- Link slides to outside content -->
    <section id="carousel-link-to-content" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Link slides to outside content</h2>

      <div class="pt-1">
        <div class="position-relative py-lg-2 py-xl-4">
          <Swiper
            class="position-absolute top-0 start-0 w-100 h-100"
            :slides-Per-View="1"
            @swiper="setThumbsSwiper"
            :modules="[Navigation, Thumbs, FreeMode]"
          >
            <SwiperSlide>
              <div
                class="position-absolute top-0 start-0 w-100 h-100 bg-position-center bg-repeat-0 bg-size-cover"
                :style="{ backgroundImage: `url(${img1})` }"
              >
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="position-absolute top-0 start-0 w-100 h-100 bg-position-center bg-repeat-0 bg-size-cover"
                :style="{ backgroundImage: `url(${img2})` }"
              >
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
              </div>
            </SwiperSlide>
          </Swiper>

          <b-container class="position-relative zindex-5 ps-md-5 py-5">
            <b-row class="py-2 py-md-3">
              <b-col xxl="6" xl="7" md="9">
                <div class="d-flex justify-content-center justify-content-md-start pb-3 mb-3">
                  <b-button
                    size="sm"
                    id="case-study-prev"
                    class="btn-prev btn-icon bg-white me-2"
                    aria-label="Previous"
                  >
                    <Icon :icon="ChevronLeftIcon" />
                  </b-button>
                  <b-button
                    size="sm"
                    id="case-study-next"
                    class="btn-next btn-icon bg-white ms-2"
                    aria-label="Next"
                  >
                    <Icon :icon="ChevronRightIcon" />
                  </b-button>
                </div>
                <b-card class="bg-custom-card shadow-sm p-3">
                  <Swiper
                    :modules="[Navigation, Thumbs, Controller, Pagination]"
                    :spaceBetween="30"
                    :loop="true"
                    :tabs="true"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :pagination="{
                      el: '#case-study-pagination',
                      clickable: true
                    }"
                    :navigation="{
                      prevEl: '#case-study-prev',
                      nextEl: '#case-study-next'
                    }"
                  >
                    <SwiperSlide>
                      <img
                        src="@/assets/img/landing/software-agency-1/case-study-logo01.png"
                        class="d-block mb-3"
                        width="72"
                        alt="Logo"
                      />
                      <h3 class="mb-2">Cashless payment case study</h3>
                      <p class="fs-sm text-muted border-bottom pb-3 mb-3">
                        Payment Service Provider Company
                      </p>
                      <p class="pb-2 pb-lg-3 mb-3">
                        Aenean dolor elit tempus tellus imperdiet. Elementum, ac convallis morbi sit
                        est feugiat ultrices. Cras tortor maecenas pulvinar nec ac justo. Massa sem
                        eget semper...
                      </p>
                      <a href="#" class="btn btn-primary">View case study</a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="@/assets/img/landing/software-agency-1/case-study-logo02.png"
                        class="d-block mb-3"
                        width="72"
                        alt="Logo"
                      />
                      <h3 class="mb-2">Smart tech case study</h3>
                      <p class="fs-sm text-muted border-bottom pb-3 mb-3">Data Analytics Company</p>
                      <p class="pb-2 pb-lg-3 mb-3">
                        Adipiscing quis a at ligula. Gravida gravida diam rhoncus cursus in. Turpis
                        sagittis tempor gravida phasellus sapien. Faucibus donec consectetur sed id
                        sit nisl.
                      </p>
                      <a href="#" class="btn btn-primary">View case study</a>
                    </SwiperSlide>
                  </Swiper>

                  <div class="pt-4 mt-3" data-bs-theme="dark">
                    <div
                      id="case-study-pagination"
                      class="swiper-pagination position-relative bottom-0"
                    ></div>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </section>

    <!-- Fade transition -->
    <section id="carousel-fade" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Fade transition</h2>

      <div class="pt-1">
        <Swiper
          class="swiper-nav-onhover"
          :modules="[EffectFade, Navigation]"
          effect="fade"
          :loop="true"
          :navigation="{
            prevEl: '.btn-prev',
            nextEl: '.btn-next'
          }"
        >
          <SwiperSlide class="bg-light">
            <div class="ratio ratio-21x9 bg-faded-info">
              <div
                class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
              >
                1
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="bg-light">
            <div class="ratio ratio-21x9 bg-faded-success">
              <div
                class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
              >
                2
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="bg-light">
            <div class="ratio ratio-21x9 bg-faded-warning">
              <div
                class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"
              >
                3
              </div>
            </div>
          </SwiperSlide>

          <b-button size="sm" class="btn-prev btn-icon me-2" aria-label="Previous">
            <Icon :icon="ChevronLeftIcon" />
          </b-button>
          <b-button size="sm" class="btn-next btn-icon ms-2" aria-label="Next">
            <Icon :icon="ChevronRightIcon" />
          </b-button>
        </Swiper>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorNavigationData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

import { Icon } from '@iconify/vue'
import InfoCircleIcon from '@iconify/icons-bx/bx-info-circle'
import LinkExternalIcon from '@iconify/icons-bx/link-external'
import ChevronLeftIcon from '@iconify/icons-bx/chevron-left'
import ChevronRightIcon from '@iconify/icons-bx/chevron-right'

import img1 from '@/assets/img/landing/software-agency-1/case-study01.jpg'
import img2 from '@/assets/img/landing/software-agency-1/case-study02.jpg'

import { Swiper, SwiperSlide } from 'swiper/vue'
import type { SwiperType } from '@/types'
import { Navigation, Pagination, Controller, FreeMode, Thumbs, EffectFade } from 'swiper/modules'

import { ref } from 'vue'

const anchorNavigationData = [
  {
    id: 'carousel-navigation',
    title: 'Navigation (Prev / next buttons)'
  },
  {
    id: 'carousel-pagination',
    title: 'Pagination'
  },
  {
    id: 'carousel-multiple-slides',
    title: 'Multiple slides (Responsive) + Arrows and bullets outside'
  },
  {
    id: 'carousel-link-to-content',
    title: 'Link slides to outside content'
  },
  {
    id: 'carousel-fade',
    title: 'Fade transition'
  }
]

const thumbsSwiper = ref<SwiperType | null>(null)
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper)
}
</script>

<style lang="css">
[data-bs-theme=dark] .bg-custom-card {
  background-color: #0b0f19 !important;
}
</style>
