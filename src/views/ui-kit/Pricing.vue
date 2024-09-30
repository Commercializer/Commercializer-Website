<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Pricing"
      description="Quickly build pricing plans for subscription based pricing model."
      :is-silicon-component="true"
    />

    <!-- Cards: Style 1 -->
    <section id="pricing-cards-1" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Cards: Style 1</h2>
      <div class="pt-1">
        <div class="table-responsive-xxl">
          <b-row class="flex-nowrap pb-4">
            <b-col>
              <div class="card h-100 border-0 shadow-sm p-xxl-3" style="min-width: 18rem">
                <div class="card-body">
                  <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                    <div class="flex-shrink-0 bg-secondary rounded-3">
                      <img
                        src="@/assets/img/landing/saas-1/pricing/basic.png"
                        width="84"
                        alt="Icon"
                      />
                    </div>
                    <div class="ps-4">
                      <h3 class="fs-lg fw-normal text-body mb-2">Basic</h3>
                      <h4 class="h3 lh-1 mb-0">
                        $5.00 <span class="text-body fs-sm fw-normal">/ per month</span>
                      </h4>
                    </div>
                  </div>
                  <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                    <li class="d-flex mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                      Aenean neque tortor, purus faucibus
                    </li>
                    <li class="d-flex mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                      Nullam augue vitae et volutpat sagittis
                    </li>
                    <li class="d-flex text-muted mb-2">
                      <Icon :icon="XIcon" class="fs-xl me-1" />
                      Mauris massa penatibus enim elit quam
                    </li>
                    <li class="d-flex text-muted mb-2">
                      <Icon :icon="XIcon" class="fs-xl me-1" />
                      Nec ac sagittis nunc bibendum
                    </li>
                    <li class="d-flex text-muted">
                      <Icon :icon="XIcon" class="fs-xl me-1" />
                      Odio ut orci volutpat ultricies eleifend
                    </li>
                  </ul>
                </div>
                <div class="card-footer border-0 pt-0 pb-4">
                  <a href="#" class="btn btn-outline-primary w-100">Start free trial</a>
                </div>
              </div>
            </b-col>
            <b-col>
              <div
                class="card h-100 border-0 bg-primary shadow-primary shadow-dark-mode-none p-xxl-3"
                style="min-width: 18rem"
              >
                <div class="card-body">
                  <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                    <div
                      class="flex-shrink-0 rounded-3"
                      style="background-color: rgba(255, 255, 255, 0.1)"
                    >
                      <img
                        src="@/assets/img/landing/saas-1/pricing/standard.png"
                        width="84"
                        alt="Icon"
                      />
                    </div>
                    <div class="ps-4">
                      <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">Standard</h3>
                      <h4 class="h3 text-light lh-1 mb-0">
                        $10.00 <span class="fs-sm fw-normal opacity-70">/ per month</span>
                      </h4>
                    </div>
                  </div>
                  <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                    <li class="d-flex text-light mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl me-1" />
                      <span class="opacity-70">Aenean neque tortor, purus faucibus</span>
                    </li>
                    <li class="d-flex text-light mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl me-1" />
                      <span class="opacity-70">Nullam augue vitae et volutpat sagittis</span>
                    </li>
                    <li class="d-flex text-light mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl me-1" />
                      <span class="opacity-70">Mauris massa penatibus enim elit quam</span>
                    </li>
                    <li class="d-flex text-light mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl me-1" />
                      <span class="opacity-70">Nec ac sagittis nunc bibendum</span>
                    </li>
                    <li class="d-flex text-light opacity-50">
                      <Icon :icon="XIcon" class="fs-xl me-1" />
                      Odio ut orci volutpat ultricies eleifend
                    </li>
                  </ul>
                </div>
                <div class="card-footer border-0 pt-0 pb-4">
                  <a href="#" class="btn btn-light w-100">Start free trial</a>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="card h-100 border-0 shadow-sm p-xxl-3" style="min-width: 18rem">
                <div class="card-body">
                  <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                    <div class="flex-shrink-0 bg-secondary rounded-3">
                      <img
                        src="@/assets/img/landing/saas-1/pricing/ultimate.png"
                        width="84"
                        alt="Icon"
                      />
                    </div>
                    <div class="ps-4">
                      <h3 class="fs-lg fw-normal text-body mb-2">Ultimate</h3>
                      <h4 class="h3 lh-1 mb-0">
                        $15.00 <span class="text-body fs-sm fw-normal">/ per month</span>
                      </h4>
                    </div>
                  </div>
                  <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                    <li class="d-flex mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                      Aenean neque tortor, purus faucibus
                    </li>
                    <li class="d-flex mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                      Nullam augue vitae et volutpat sagittis
                    </li>
                    <li class="d-flex mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                      Mauris massa penatibus enim elit quam
                    </li>
                    <li class="d-flex mb-2">
                      <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                      Nec ac sagittis nunc bibendum
                    </li>
                    <li class="d-flex">
                      <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                      Odio ut orci volutpat ultricies eleifend
                    </li>
                  </ul>
                </div>
                <div class="card-footer border-0 pt-0 pb-4">
                  <a href="#" class="btn btn-outline-primary w-100">Start free trial</a>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </section>

    <!-- Cards: Style 2 -->
    <section id="pricing-cards-2" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Cards: Style 2</h2>
      <div class="pt-1">
        <div class="table-responsive-xxl">
          <div class="d-flex align-items-center pb-4">
            <div
              class="bg-primary rounded-3 shadow-primary p-4"
              style="width: 36%; min-width: 18rem"
            >
              <div class="card bg-transparent border-light py-3 py-sm-4 py-lg-5">
                <div class="card-body text-light text-center">
                  <h3 class="text-light mb-2">Team</h3>
                  <div class="fs-lg opacity-70 pb-4 mb-3">Best for small teams</div>
                  <div class="display-5 mb-1">$10</div>
                  <div class="opacity-50 mb-5">per month</div>
                </div>
                <div class="card-footer border-0 text-center pt-0 pb-4">
                  <a href="#" class="btn btn-light btn-lg shadow-secondary">Get started now</a>
                </div>
              </div>
            </div>
            <b-row
              class="flex-nowrap border rounded-3 rounded-start-0 shadow-sm g-0"
              style="width: 64%; min-width: 32rem"
            >
              <b-col>
                <div class="card bg-light h-100 border-0 border-end rounded-0 py-3 py-sm-4 py-lg-5">
                  <div class="card-body text-center">
                    <h3 class="mb-2">Company</h3>
                    <div class="fs-lg pb-4 mb-3">Best for growing teams</div>
                    <div class="display-5 text-dark mb-1">$25</div>
                    <div class="text-muted mb-5">per month</div>
                  </div>
                  <div class="card-footer border-0 text-center pt-0 pb-4">
                    <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
                  </div>
                </div>
              </b-col>
              <b-col>
                <div class="card bg-light h-100 border-0 rounded-start-0 py-3 py-sm-4 py-lg-5">
                  <div class="card-body text-center">
                    <h3 class="mb-2">Enterprise</h3>
                    <div class="fs-lg pb-4 mb-3">Best for large teams</div>
                    <div class="display-5 text-dark mb-1">$50</div>
                    <div class="text-muted mb-5">per month</div>
                  </div>
                  <div class="card-footer border-0 text-center pt-0 pb-4">
                    <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </section>

    <!-- List -->
    <section id="pricing-list" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">List</h2>
      <div class="pt-1">
        <b-list-group style="max-width: 33rem">
          <b-list-group-item
            class="d-flex flex-column flex-sm-row align-items-center justify-content-between p-4"
          >
            <div class="d-flex align-items-center">
              <svg
                class="flex-shrink-0 me-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.794 1.71278C23.5195 1.43819 23.0743 1.43819 22.7997 1.71278L21.4284 3.08406C20.6078 2.1197 19.3859 1.50686 18.0235 1.50686C16.8653 1.50686 15.7764 1.95789 14.9577 2.77675L0.205961 17.5284C0.00486702 17.7295 -0.0552736 18.0319 0.0535233 18.2947C0.162367 18.5574 0.418726 18.7287 0.703117 18.7287H9.44934L11.8087 21.0881H11.2469C10.8585 21.0881 10.5437 21.4029 10.5437 21.7912C10.5437 22.1795 10.8585 22.4943 11.2469 22.4943H15.7656C16.1539 22.4943 16.4687 22.1795 16.4687 21.7912C16.4687 21.4029 16.1539 21.0881 15.7656 21.0881H13.7975L11.4381 18.7287H14.2594C18.7998 18.7287 22.4937 15.0348 22.4937 10.4943V5.97709C22.4937 5.39355 22.3812 4.83578 22.1769 4.32428L23.794 2.70714C24.0687 2.43255 24.0687 1.98737 23.794 1.71278ZM2.4006 17.3224L13.5562 6.1668V8.98806C13.5562 13.5836 9.81745 17.3224 5.22187 17.3224H2.4006ZM21.0875 10.4943C21.0875 14.2594 18.0244 17.3225 14.2594 17.3225H10.2592C13.0761 15.6134 14.9625 12.5168 14.9625 8.98811V6.15995C14.9625 5.25752 15.3139 4.40913 15.952 3.77116C16.5052 3.21784 17.2409 2.91316 18.0235 2.91316C19.713 2.91316 21.0875 4.28767 21.0875 5.97719L21.0875 10.4943Z"
                  fill="currentColor"
                />
                <path
                  d="M18.7781 5.97526C19.1664 5.97526 19.4812 5.66046 19.4812 5.27213C19.4812 4.88381 19.1664 4.56901 18.7781 4.56901C18.3898 4.56901 18.075 4.88381 18.075 5.27213C18.075 5.66046 18.3898 5.97526 18.7781 5.97526Z"
                  fill="currentColor"
                />
              </svg>
              <h4 class="fs-base fw-semibold text-nowrap ps-1 mb-0">Early birds</h4>
            </div>
            <h5 class="text-primary my-2 my-sm-0">$100</h5>
            <div class="fs-sm">until Sep 1, 2023</div>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex flex-column flex-sm-row align-items-center justify-content-between p-4"
          >
            <div class="d-flex align-items-center">
              <svg
                class="flex-shrink-0 me-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0225 2.91133C17.2397 2.91133 16.5038 3.21602 15.9507 3.76914C15.3132 4.40664 14.9616 5.25508 14.9616 6.15977V8.98633C14.9616 12.516 13.0772 15.6098 10.26 17.3207H14.2585C18.0225 17.3207 21.0882 14.2598 21.0882 10.491V5.97227C21.0882 4.28945 19.71 2.91133 18.0225 2.91133ZM18.7772 5.97695C18.3882 5.97695 18.0741 5.66289 18.0741 5.27383C18.0741 4.88477 18.3882 4.5707 18.7772 4.5707C19.1663 4.5707 19.4804 4.88477 19.4804 5.27383C19.4804 5.66289 19.1663 5.97695 18.7772 5.97695ZM23.7929 1.71133C23.5163 1.43477 23.071 1.43477 22.7991 1.71133L21.4257 3.08477C20.6054 2.11914 19.3819 1.50977 18.0225 1.50977C16.8647 1.50977 15.7772 1.95977 14.9569 2.78008L0.20535 17.527C0.00378752 17.7285 -0.05715 18.0285 0.0506625 18.291C0.158475 18.5535 0.416288 18.727 0.702225 18.727H5.22097H9.4491L11.8069 21.0848H11.2444C10.8553 21.0848 10.5413 21.3988 10.5413 21.7879C10.5413 22.177 10.8553 22.491 11.2444 22.491H15.7632C16.1522 22.491 16.4663 22.177 16.4663 21.7879C16.4663 21.3988 16.1522 21.0848 15.7632 21.0848H13.7944L11.4366 18.727H14.2585C18.8007 18.727 22.4944 15.0332 22.4944 10.491V5.97227C22.4944 5.39102 22.3819 4.8332 22.1757 4.31758L23.7929 2.70039C24.0694 2.4332 24.0694 1.98789 23.7929 1.71133ZM2.3991 17.3207L13.5554 6.16445V8.98633C13.5554 13.5801 9.81472 17.3207 5.22097 17.3207H2.3991ZM21.0882 10.4957C21.0882 14.2598 18.0272 17.3254 14.2585 17.3254H10.26C13.0772 15.6145 14.9616 12.516 14.9616 8.98633V6.15977C14.9616 5.25508 15.3132 4.40664 15.9507 3.76914C16.5038 3.21602 17.2397 2.91133 18.0225 2.91133C19.71 2.91133 21.0882 4.28477 21.0882 5.97695V10.4957Z"
                  fill="currentColor"
                />
              </svg>
              <h4 class="fs-base fw-semibold text-nowrap ps-1 mb-0">Late birds</h4>
            </div>
            <b-badge
              class="fs-5 fw-bold rounded px-3 py-0 my-3 my-sm-0 text-white"
              html-class="h5"
              variant="primary"
            >
              $150
            </b-badge>
            <div class="fs-sm">after Sep 1, 2023</div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </section>

    <!-- Table -->
    <section id="pricing-table" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Table</h2>
      <div class="pt-1">
        <div class="table-responsive border rounded shadow-sm">
          <table class="table table-striped align-middle">
            <thead>
              <tr class="text-center">
                <th scope="col" class="p-4 border-0 text-start text-nowrap fs-lg">Items</th>
                <th scope="col" class="w-20 p-4 border-0">
                  <div class="h4 mt-2 mb-1">Basic</div>
                  <div class="fw-normal text-muted">$20 per m2</div>
                </th>
                <th scope="col" class="w-20 p-4 border-0">
                  <div class="h4 mt-2 mb-1">Standard</div>
                  <div class="fw-normal text-muted">$30 per m2</div>
                </th>
                <th scope="col" class="w-20 p-4 border-0">
                  <div class="h4 mt-2 mb-1">Business</div>
                  <div class="fw-normal text-muted">$40 per m2</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">
                  Installation plan
                </td>

                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">
                  Planning solutions (2-3 options)
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">Lighting plan</td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">Flooring plan</td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">
                  Heating floor laying scheme
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">
                  Air conditioner zones layout
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">
                  3D visualization of all rooms
                </td>
                <td class="w-20 py-3 border-0">simplified</td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">
                  Visualization of each room (3-4 angles)
                </td>
                <td class="w-20 py-3 border-0"></td>
                <td class="w-20 py-3 border-0"></td>
                <td class="w-20 py-3 border-0">
                  <Icon :icon="CheckIcon" class="text-primary fs-3" />
                </td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 fw-medium border-0 text-start text-nowrap">Terms</td>
                <td class="w-20 py-3 border-0">10 days</td>
                <td class="w-20 py-3 border-0">20 days</td>
                <td class="w-20 py-3 border-0">30 days</td>
              </tr>
              <tr class="text-center">
                <td class="py-3 px-4 border-0 text-start text-nowrap"></td>
                <td class="w-20 py-3 border-0">
                  <div class="py-3">
                    <a class="btn btn-outline-primary" href="#">Send request</a>
                  </div>
                </td>
                <td class="w-20 py-3 border-0">
                  <div class="py-3">
                    <a class="btn btn-primary shadow-primary" href="#">Send request</a>
                  </div>
                </td>
                <td class="w-20 py-3 border-0">
                  <div class="py-3">
                    <a class="btn btn-outline-primary" href="#">Send request</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Price switch -->
    <section id="pricing-switch" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Price switch</h2>
      <div class="pt-1">
        <div class="price-switch-wrapper">
          <div
            class="form-check form-switch price-switch justify-content-center mt-2 mb-4"
            data-bs-toggle="price"
          >
            <input type="checkbox" class="form-check-input" id="pricing" v-model="isTabActive" />
            <label class="form-check-label" for="pricing">Monthly</label>
            <label class="form-check-label d-flex align-items-start" for="pricing"
              >Annually <span class="text-danger fs-xs fw-semibold mt-n2 ms-2">-10%</span></label
            >
          </div>
          <div class="table-responsive-xxl pt-md-3">
            <b-tabs no-nav-style>
              <b-tab>
                <b-row class="flex-nowrap pb-4">
                  <b-col>
                    <div class="card h-100 border-0 shadow-sm p-xxl-3" style="min-width: 18rem">
                      <div class="card-body">
                        <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                          <div class="flex-shrink-0 bg-secondary rounded-3">
                            <img
                              src="@/assets/img/landing/saas-1/pricing/basic.png"
                              width="84"
                              alt="Icon"
                            />
                          </div>
                          <div class="ps-4">
                            <h3 class="fs-lg fw-normal text-body mb-2">Basic</h3>
                            <h4 class="h3 lh-1 mb-0">
                              <span data-monthly-price v-if="isTabActive ? '' : 'd-done'"
                                >$6.00</span
                              >
                              <span data-annual-price v-else  
                                >$5.40</span
                              >
                              <span class="text-body fs-sm fw-normal"> / per month</span>
                            </h4>
                          </div>
                        </div>
                        <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                          <li class="d-flex mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                            Aenean neque tortor, purus faucibus
                          </li>
                          <li class="d-flex mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                            Nullam augue vitae et volutpat sagittis
                          </li>
                          <li class="d-flex text-muted mb-2">
                            <Icon :icon="XIcon" class="fs-xl me-1" />
                            Mauris massa penatibus enim elit quam
                          </li>
                          <li class="d-flex text-muted mb-2">
                            <Icon :icon="XIcon" class="fs-xl me-1" />
                            Nec ac sagittis nunc bibendum
                          </li>
                          <li class="d-flex text-muted">
                            <Icon :icon="XIcon" class="fs-xl me-1" />
                            Odio ut orci volutpat ultricies eleifend
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer border-0 pt-0 pb-4">
                        <a href="#" class="btn btn-outline-primary w-100">Start free trial</a>
                      </div>
                    </div>
                  </b-col>
                  <b-col>
                    <div
                      class="card h-100 border-0 bg-primary shadow-primary shadow-dark-mode-none p-xxl-3"
                      style="min-width: 18rem"
                    >
                      <div class="card-body">
                        <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                          <div
                            class="flex-shrink-0 rounded-3"
                            style="background-color: rgba(255, 255, 255, 0.1)"
                          >
                            <img
                              src="@/assets/img/landing/saas-1/pricing/standard.png"
                              width="84"
                              alt="Icon"
                            />
                          </div>
                          <div class="ps-4">
                            <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">Standard</h3>
                            <h4 class="h3 text-light lh-1 mb-0">
                              <span data-monthly-price v-if="isTabActive  ? '' : 'd-none'"
                                >$12.00</span
                              >
                              <span data-annual-price v-else
                                >$10.80</span
                              >
                              <span class="fs-sm fw-normal opacity-70"> / per month</span>
                            </h4>
                          </div>
                        </div>
                        <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                          <li class="d-flex text-light mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl me-1" />
                            <span class="opacity-70">Aenean neque tortor, purus faucibus</span>
                          </li>
                          <li class="d-flex text-light mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl me-1" />
                            <span class="opacity-70">Nullam augue vitae et volutpat sagittis</span>
                          </li>
                          <li class="d-flex text-light mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl me-1" />
                            <span class="opacity-70">Mauris massa penatibus enim elit quam</span>
                          </li>
                          <li class="d-flex text-light mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl me-1" />
                            <span class="opacity-70">Nec ac sagittis nunc bibendum</span>
                          </li>
                          <li class="d-flex text-light opacity-50">
                            <Icon :icon="XIcon" class="fs-xl me-1" />
                            Odio ut orci volutpat ultricies eleifend
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer border-0 pt-0 pb-4">
                        <a href="#" class="btn btn-light w-100">Start free trial</a>
                      </div>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="card h-100 border-0 shadow-sm p-xxl-3" style="min-width: 18rem">
                      <div class="card-body">
                        <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                          <div class="flex-shrink-0 bg-secondary rounded-3">
                            <img
                              src="@/assets/img/landing/saas-1/pricing/ultimate.png"
                              width="84"
                              alt="Icon"
                            />
                          </div>
                          <div class="ps-4">
                            <h3 class="fs-lg fw-normal text-body mb-2">Ultimate</h3>
                            <h4 class="h3 lh-1 mb-0">
                              <span data-monthly-price v-if="isTabActive ? '' : 'd-done'"
                                >$18.00</span
                              >
                              <span data-annual-price v-else
                                >$16.20</span
                              >
                              <span class="text-body fs-sm fw-normal"> / per month</span>
                            </h4>
                          </div>
                        </div>
                        <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                          <li class="d-flex mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                            Aenean neque tortor, purus faucibus
                          </li>
                          <li class="d-flex mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                            Nullam augue vitae et volutpat sagittis
                          </li>
                          <li class="d-flex mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                            Mauris massa penatibus enim elit quam
                          </li>
                          <li class="d-flex mb-2">
                            <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                            Nec ac sagittis nunc bibendum
                          </li>
                          <li class="d-flex">
                            <Icon :icon="CheckIcon" class="fs-xl text-primary me-1" />
                            Odio ut orci volutpat ultricies eleifend
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer border-0 pt-0 pb-4">
                        <a href="#" class="btn btn-outline-primary w-100">Start free trial</a>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CheckIcon from '@iconify/icons-bx/bx-check'
import XIcon from '@iconify/icons-bx/bx-x'

const anchorData = [
  {
    id: 'pricing-cards-1',
    title: 'Cards: Style 1'
  },
  {
    id: 'pricing-cards-2',
    title: 'Cards: Style 2'
  },
  {
    id: 'pricing-list',
    title: 'List'
  },
  {
    id: 'pricing-table',
    title: 'Table'
  },
  {
    id: 'pricing-switch',
    title: 'Price switch'
  }
]

const isTabActive = ref<boolean>(false)
</script>
