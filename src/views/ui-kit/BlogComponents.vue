<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Blog components"
      description="Components that are related to the blog / news section of the website."
      :is-silicon-component="true"
    />

    <!-- Post preview card: Vertical (grid) -->
    <section id="blog-card-vertical" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Post preview card: Vertical (grid)</h2>

      <div class="pt-1">
        <article class="card h-100 border-0 shadow-sm" style="max-width: 26rem">
          <div class="position-relative">
            <a
              href="#"
              class="position-absolute top-0 start-0 w-100 h-100"
              aria-label="Read more"
            ></a>
            <a
              href="#"
              class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
              v-b-tooltip.hover.left
              title="Read later"
            >
              <Icon :icon="BookmarkIcon" />
            </a>
            <img src="@/assets/img/blog/01.jpg" class="card-img-top" alt="Image" />
          </div>
          <div class="card-body pb-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none"
                >Web design</a
              >
              <span class="fs-sm text-muted">May 19, 2023</span>
            </div>
            <h3 class="h5 mb-0">
              <a href="#">5 Bad Landing Page Examples &amp; How We Would Fix Them</a>
            </h3>
          </div>
          <div class="card-footer py-4">
            <a href="#" class="d-flex align-items-center fw-bold text-dark text-decoration-none">
              <img
                src="@/assets/img/avatar/02.jpg"
                class="rounded-circle me-3"
                width="48"
                alt="Avatar"
              />
              Ralph Edwards
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- Post preview card: Horizontal (list) -->
    <section id="blog-card-horizontal" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Post preview card: Horizontal (list)</h2>

      <div class="pt-1">
        <article class="card border-0 shadow-sm overflow-hidden">
          <b-row class="g-0">
            <b-col
              sm="4"
              class="position-relative bg-position-center bg-repeat-0 bg-size-cover"
              :style="{ backgroundImage: `url(${blog9})`, minHeight: '15rem' }"
            >
              <a
                href="#"
                class="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              ></a>
              <a
                href="#"
                class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                v-b-tooltip.hover.left
                title="Read later"
              >
                <Icon :icon="BookmarkIcon" />
              </a>
            </b-col>
            <b-col sm="8">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none"
                    >Strategy</a
                  >
                  <span class="fs-sm text-muted border-start ps-3 ms-3">May 19, 2023</span>
                </div>
                <h3 class="h4">
                  <a href="#">This Long-Awaited Technology May Finally Change the World</a>
                </h3>
                <p>
                  Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a
                  vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae.
                  Aliquam vitae hac phasellus.
                </p>
                <hr class="my-4" />
                <div class="d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
                  >
                    <img
                      src="@/assets/img/avatar/03.jpg"
                      class="rounded-circle me-3"
                      width="48"
                      alt="Avatar"
                    />
                    Esther Howard
                  </a>
                  <div class="d-flex align-items-center text-muted">
                    <div class="d-flex align-items-center me-3">
                      <Icon :icon="LikeIcon" class="fs-lg me-1" />
                      <span class="fs-sm">8</span>
                    </div>
                    <div class="d-flex align-items-center me-3">
                      <Icon :icon="CommentIcon" class="fs-lg me-1" />
                      <span class="fs-sm">7</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                      <span class="fs-sm">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </article>
      </div>
    </section>

    <!-- Alt post preview card: Vertical (grid) -->
    <section id="blog-card-vertical-alt" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alt post preview card: Vertical (grid)</h2>

      <div class="pt-1">
        <div class="d-md-flex align-items-start">
          <article
            class="card border-0 bg-transparent mb-5 mb-md-0 pe-md-3 me-md-4"
            style="max-width: 27rem"
          >
            <div class="position-relative overflow-hidden rounded-3">
              <a
                href="#"
                class="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              ></a>
              <a
                href="#"
                class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                v-b-tooltip.hover.left
                title="Read later"
              >
                <Icon :icon="BookmarkIcon" />
              </a>
              <img src="@/assets/img/blog/05.jpg" alt="Image" />
            </div>
            <div class="card-body px-0 pb-0">
              <a
                href="#"
                class="badge fs-sm text-white bg-info shadow-info text-decoration-none mb-3"
                >Marketing</a
              >
              <h3 class="h4">
                <a href="#">Inclusive Marketing: Why and How Does it Work?</a>
              </h3>
              <p class="mb-4">
                Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio
                at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.
              </p>
              <div class="d-flex align-items-center text-muted">
                <div class="fs-sm border-end pe-3 me-3">Oct 9, 2023</div>
                <div class="d-flex align-items-center me-3">
                  <Icon :icon="LikeIcon" class="fs-lg me-1" />
                  <span class="fs-sm">5</span>
                </div>
                <div class="d-flex align-items-center me-3">
                  <Icon :icon="CommentIcon" class="fs-lg me-1" />
                  <span class="fs-sm">0</span>
                </div>
                <div class="d-flex align-items-center">
                  <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                  <span class="fs-sm">2</span>
                </div>
              </div>
            </div>
          </article>
          <article class="card w-100" style="max-width: 26rem">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <a
                  href="#"
                  class="badge fs-sm text-white bg-success shadow-success text-decoration-none"
                  >Gadgets</a
                >
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                  v-b-tooltip.hover.left
                  title="Read later"
                >
                  <Icon :icon="BookmarkIcon" />
                </a>
              </div>
              <h3 class="h4">
                <a href="#">A Study on Smartwatch Design Qualities and People's Preferences</a>
              </h3>
              <p class="mb-4">
                Dignissim varius vehicula sagittis, cursus purus, congue. Tempor aliquam ut
                ridiculus dolor nibh felis. Feugiat in ut neque pellentesque. Urna adipiscing
                sodales pretium, pretium ornare enim lacus, ultrices amet. Enim in facilisis sit
                scelerisque sit.
              </p>
              <div class="d-flex align-items-center text-muted">
                <div class="fs-sm border-end pe-3 me-3">Sep 3, 2023</div>
                <div class="d-flex align-items-center me-3">
                  <Icon :icon="LikeIcon" class="fs-lg me-1" />
                  <span class="fs-sm">8</span>
                </div>
                <div class="d-flex align-items-center me-3">
                  <Icon :icon="CommentIcon" class="fs-lg me-1" />
                  <span class="fs-sm">7</span>
                </div>
                <div class="d-flex align-items-center">
                  <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                  <span class="fs-sm">4</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Alt post preview card: Horizontal (list) -->
    <section id="blog-card-horizontal-alt" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Alt post preview card: Horizontal (list)</h2>

      <div class="pt-1">
        <article class="card border-0 bg-transparent pb-3 mb-4" style="max-width: 58rem">
          <b-row class="g-0">
            <b-col
              sm="5"
              class="position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3"
              :style="{ backgroundImage: `url(${blog2})`, minHeight: '15rem' }"
            >
              <a
                href="#"
                class="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              ></a>
              <a
                href="#"
                class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                v-b-tooltip.hover.left
                title="Read later"
              >
                <Icon :icon="BookmarkIcon" />
              </a>
            </b-col>
            <b-col sm="7">
              <div class="card-body px-0 pt-sm-0 ps-sm-4 pb-0 pb-sm-4">
                <a
                  href="#"
                  class="badge fs-sm text-white bg-warning shadow-warning text-decoration-none mb-3"
                  >Web design</a
                >
                <h3 class="h4">
                  <a href="#">Why UX Design Matters and How it Affects Ranking</a>
                </h3>
                <p class="mb-4">
                  In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla
                  pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget
                  donec ultricies nibh tristique.
                </p>
                <div class="d-flex align-items-center text-muted">
                  <div class="fs-sm border-end pe-3 me-3">Aug 17, 2023</div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="LikeIcon" class="fs-lg me-1" />
                    <span class="fs-sm">6</span>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <Icon :icon="CommentIcon" class="fs-lg me-1" />
                    <span class="fs-sm">2</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                    <span class="fs-sm">9</span>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </article>
        <article class="card" style="max-width: 58rem">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <a
                href="#"
                class="badge fs-sm text-white bg-danger shadow-danger text-decoration-none"
                >Technology</a
              >
              <a
                href="#"
                class="btn btn-icon btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                v-b-tooltip.hover.left
                title="Read later"
              >
                <Icon :icon="BookmarkIcon" />
              </a>
            </div>
            <h3 class="h4">
              <a href="#">This Week in Search: New Limits and Exciting Features</a>
            </h3>
            <p class="mb-4">
              Sed parturient in faucibus porttitor morbi rutrum in. Amet fermentum, scelerisque
              suspendisse nisi faucibus quis lacus. Convallis eget pretium leo, egestas nisl, congue
              quam et ultrices. Pharetra, elementum pulvinar massa mattis sapien, sit. Id
              sollicitudin viverra morbi vitae ac tempor bibendum pulvinar vel. Integer non mattis
              ultrices est morbi ullamcorper scelerisque hac mi. Id semper ut dui sit magna.
            </p>
            <div class="d-flex align-items-center text-muted">
              <div class="fs-sm border-end pe-3 me-3">Sep 15, 2023</div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="LikeIcon" class="fs-lg me-1" />
                <span class="fs-sm">4</span>
              </div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="CommentIcon" class="fs-lg me-1" />
                <span class="fs-sm">6</span>
              </div>
              <div class="d-flex align-items-center">
                <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                <span class="fs-sm">0</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Color background on hover -->
    <section id="blog-card-hover-bg" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Color background on hover</h2>

      <div class="pt-1">
        <article class="card border-0 shadow-sm card-hover-primary" style="max-width: 26rem">
          <div class="card-body pb-0">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <a
                href="#"
                class="badge fs-sm text-nav bg-secondary text-decoration-none position-relative zindex-2"
                >Software</a
              >
              <span class="fs-sm text-muted">May 24, 2023</span>
            </div>
            <h3 class="h4">
              <a href="#" class="stretched-link"
                >What the Software Stock Slump Means for the Market</a
              >
            </h3>
            <p class="mb-0">
              Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue
              commodo id quis tempus etiam pulvinar at maecenas.
            </p>
          </div>
          <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
            <div class="fs-sm border-end pe-3 me-3">Sep 15, 2023</div>
            <div class="d-flex align-items-center me-3">
              <Icon :icon="LikeIcon" class="fs-lg me-1" />
              <span class="fs-sm">4</span>
            </div>
            <div class="d-flex align-items-center me-3">
              <Icon :icon="CommentIcon" class="fs-lg me-1" />
              <span class="fs-sm">6</span>
            </div>
            <div class="d-flex align-items-center">
              <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
              <span class="fs-sm">0</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Podcast preview card -->
    <section id="blog-podcast" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Podcast preview card</h2>

      <div class="pt-1">
        <article style="max-width: 306px">
          <div class="d-block position-relative rounded-3 mb-3">
            <a
              href="#"
              class="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
              v-b-tooltip.hover.left
              title="Listen later"
            >
              <Icon :icon="BookmarkIcon" />
            </a>
            <img
              src="@/assets/img/avatar/06.jpg"
              class="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3"
              width="48"
              alt="Avatar"
            />
            <span class="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3"
              >1:53:19</span
            >
            <a
              href="#"
              class="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"
              aria-label="Listen podcast"
            ></a>
            <img src="@/assets/img/blog/podcasts/01.jpg" class="rounded-3" alt="Image" />
          </div>
          <div class="d-flex align-items-center mb-2">
            <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">Startups</a>
            <span class="fs-sm text-muted border-start ps-3 ms-3">10 hours ago</span>
          </div>
          <h3 class="h5">
            <a href="#">How to Choose a Fantastic SEO Agency</a>
          </h3>
          <div class="d-flex align-items-center text-muted">
            <div class="d-flex align-items-center me-3">
              <Icon :icon="LikeIcon" class="fs-lg me-1" />
              <span class="fs-sm">18</span>
            </div>
            <div class="d-flex align-items-center me-3">
              <Icon :icon="CommentIcon" class="fs-lg me-1" />
              <span class="fs-sm">9</span>
            </div>
            <div class="d-flex align-items-center">
              <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
              <span class="fs-sm">5</span>
            </div>
          </div>
          <a href="#" class="btn btn-link px-0 mt-3">
            <Icon :icon="PlayCircleIcon" class="fs-lg me-2" />
            Listen now
          </a>
        </article>
      </div>
    </section>

    <!-- Simple feed -->
    <section id="blog-simple-feed" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Simple feed</h2>

      <div class="pt-1">
        <ul class="list-unstyled mb-0">
          <li class="mb-4">
            <h3 class="h4 mb-2">
              <a href="#">5 Bad Landing Page Examples &amp; How We Would Fix Them</a>
            </h3>
            <div class="d-flex align-items-center text-muted pt-1">
              <div class="fs-sm border-end pe-3 me-3">12 hours ago</div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="LikeIcon" class="fs-lg me-1" />
                <span class="fs-sm">8</span>
              </div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="CommentIcon" class="fs-lg me-1" />
                <span class="fs-sm">4</span>
              </div>
              <div class="d-flex align-items-center">
                <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                <span class="fs-sm">2</span>
              </div>
            </div>
          </li>
          <li class="mb-4">
            <h3 class="h4 mb-2">
              <a href="#">How Agile is Your Forecasting Process?</a>
            </h3>
            <div class="d-flex align-items-center text-muted pt-1">
              <div class="fs-sm border-end pe-3 me-3">Oct 9, 2023</div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="LikeIcon" class="fs-lg me-1" />
                <span class="fs-sm">4</span>
              </div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="CommentIcon" class="fs-lg me-1" />
                <span class="fs-sm">1</span>
              </div>
              <div class="d-flex align-items-center">
                <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                <span class="fs-sm">0</span>
              </div>
            </div>
          </li>
          <li>
            <h3 class="h4 mb-2">
              <a href="#">Inclusive Marketing: Why and How Does it Work?</a>
            </h3>
            <div class="d-flex align-items-center text-muted pt-1">
              <div class="fs-sm border-end pe-3 me-3">Sep 13, 2023</div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="LikeIcon" class="fs-lg me-1" />
                <span class="fs-sm">5</span>
              </div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="CommentIcon" class="fs-lg me-1" />
                <span class="fs-sm">2</span>
              </div>
              <div class="d-flex align-items-center">
                <Icon :icon="ShareAltIcon" class="fs-lg me-1" />
                <span class="fs-sm">4</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Categories widget -->
    <section id="blog-categories" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Categories widget</h2>

      <div class="pt-1">
        <div class="card card-body" style="max-width: 306px">
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
      </div>
    </section>

    <!-- Popular / recent posts widget -->
    <section id="blog-recent-posts" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Popular / recent posts widget</h2>

      <div class="pt-1">
        <div class="card card-body border-0 position-relative" style="max-width: 306px">
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
      </div>
    </section>

    <!-- Tags widget -->
    <section id="blog-tags" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Tags widget</h2>

      <div class="pt-1">
        <div class="card card-body" style="max-width: 306px">
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
      </div>
    </section>

    <!-- Post comments -->
    <section id="blog-comments" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Post comments</h2>

      <div class="pt-1">
        <div class="pt-2 pb-4">
          <div class="d-flex align-items-center justify-content-between pb-2 mb-1">
            <div class="d-flex align-items-center me-3">
              <img
                src="@/assets/img/avatar/03.jpg"
                class="rounded-circle"
                width="48"
                alt="Avatar"
              />
              <div class="ps-3">
                <h6 class="fw-semibold mb-0">Esther Howard</h6>
                <span class="fs-sm text-muted">4 mins ago</span>
              </div>
            </div>
            <a href="#" class="nav-link fs-sm px-0">
              <Icon :icon="ShareIcon" class="fs-lg me-2" />
              Reply
            </a>
          </div>
          <p class="mb-0">
            Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper dolor sit mauris.
            Hendrerit eu libero, eu tristique sodales ultrices etiam adipiscing. Donec viverra
            sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus
            scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id
            tincidunt leo placerat luctus.
          </p>
        </div>
        <hr class="my-2" />
        <div class="pt-4 pb-2">
          <div class="d-flex align-items-center justify-content-between pb-2 mb-1">
            <div class="d-flex align-items-center me-3">
              <img
                src="@/assets/img/avatar/02.jpg"
                class="rounded-circle"
                width="48"
                alt="Avatar"
              />
              <div class="ps-3">
                <h6 class="fw-semibold mb-0">Ralph Edwards</h6>
                <span class="fs-sm text-muted">September 9 at 12:48</span>
              </div>
            </div>
            <a href="#" class="nav-link fs-sm px-0">
              <Icon :icon="ShareIcon" class="fs-lg me-2" />
              Reply
            </a>
          </div>
          <p class="mb-0 pb-2">
            Eget amet, ac scelerisque tellus sed. Sapien duis sit neque pulvinar. Est sit aenean
            nisl etiam donec mattis ut diam. Luctus massa eu nunc aliquam viverra tempus, eu amet,
            luctus. Ac faucibus vestibulum eu lacus. Ullamcorper sem ultrices tincidunt pharetra?
          </p>
          <div class="position-relative ps-4 mt-4">
            <span class="position-absolute top-0 start-0 w-1 h-100 bg-primary"></span>
            <div class="d-flex align-items-center justify-content-between ps-3 pb-2 mb-1">
              <div class="d-flex align-items-center me-3">
                <img
                  src="@/assets/img/avatar/05.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
                <div class="ps-3">
                  <h6 class="fw-semibold mb-0">Albert Flores</h6>
                  <span class="fs-sm text-muted">16 hours ago</span>
                </div>
              </div>
              <a href="#" class="nav-link fs-sm px-0">
                <Icon :icon="ShareIcon" class="fs-lg me-2" />
                Reply
              </a>
            </div>
            <p class="ps-3 mb-0">
              <a href="#" class="fw-semibold text-decoration-none">@Ralph Edwards</a> Vulputate
              malesuada amet, consequat ullamcorper. Orci, cras maecenas in sit purus pellentesque.
              Ridiculus blandit pellentesque eget arcu morbi nisl. Morbi volutpat adipiscing sapien
              sed ut tempor.
            </p>
          </div>
        </div>
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

import blog2 from '@/assets/img/blog/02.jpg'
import blog9 from '@/assets/img/blog/09.jpg'

import { Icon } from '@iconify/vue'
import BookmarkIcon from '@iconify/icons-bx/bookmark'
import LikeIcon from '@iconify/icons-bx/bx-like'
import CommentIcon from '@iconify/icons-bx/comment'
import ShareIcon from '@iconify/icons-bx/share'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import PlayCircleIcon from '@iconify/icons-bx/play-circle'

const anchorNavigationData = [
  {
    id: 'blog-card-vertical',
    title: 'Post preview card: Vertical (grid)'
  },
  {
    id: 'blog-card-horizontal',
    title: 'Post preview card: Horizontal (list)'
  },
  {
    id: 'blog-card-vertical-alt',
    title: 'Alt post preview card: Vertical (grid)'
  },
  {
    id: 'blog-card-horizontal-alt',
    title: 'Alt post preview card: Horizontal (list)'
  },
  {
    id: 'blog-card-hover-bg',
    title: 'Color background on hover'
  },
  {
    id: 'blog-podcast',
    title: 'Podcast preview card'
  },
  {
    id: 'blog-simple-feed',
    title: 'Simple feed'
  },
  {
    id: 'blog-categories',
    title: 'Categories widget'
  },
  {
    id: 'blog-recent-posts',
    title: 'Popular / recent posts widget'
  },
  {
    id: 'blog-tags',
    title: 'Tags widget'
  },
  {
    id: 'blog-comments',
    title: 'Post comments'
  }
]
</script>
