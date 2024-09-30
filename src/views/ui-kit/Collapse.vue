<template>
  <UIKitLayout>
    <UIKitPageTitle title="Collapse" description="Toggle the visibility of content." />

    <!-- Basic example -->
    <section class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>

      <div class="pt-1">
        <a class="btn btn-outline-primary me-2" v-b-toggle.collapseExample>Link with v-b-toggle</a>

        <b-button variant="outline-primary" v-b-toggle.collapseExample
          >Button with v-b-toggle</b-button
        >

        <b-collapse id="collapseExample">
          <b-card class="mt-3"
            >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </b-card>
        </b-collapse>
      </div>
    </section>

    <!-- Horizontal -->
    <section class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Horizontal</h2>

      <div class="pt-1">
        <b-button variant="outline-primary" v-b-toggle.collapseHorizontal
          >Toggle width collapse</b-button
        >
        <b-collapse horizontal id="collapseHorizontal">
          <b-card class="mt-3" style="width: 25rem">
            This is some placeholder content for a horizontal collapse. It's hidden by default and
            shown when triggered.
          </b-card>
        </b-collapse>
      </div>
    </section>

    <!-- Multiple targets -->
    <section class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Multiple targets</h2>

      <div class="pt-1">
        <a class="btn btn-outline-primary my-1 me-2" v-b-toggle.multiCollapseExample1
          >Toggle first element</a
        >
        <b-button variant="outline-primary" class="my-1 me-2" v-b-toggle.multiCollapseExample2
          >Toggle second element
        </b-button>
        <b-button
          variant="outline-primary"
          class="my-1"
          v-b-toggle.multiCollapseExample1.multiCollapseExample2
          >Toggle both elements
        </b-button>

        <b-row>
          <b-col sm="6" class="mb-2 mb-sm-0">
            <b-collapse class="multi-collapse" id="multiCollapseExample1">
              <b-card class="mt-3"
                >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </b-card>
            </b-collapse>
          </b-col>
          <b-col sm="6">
            <b-collapse class="multi-collapse" id="multiCollapseExample2">
              <b-card class="mt-3"
                >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </b-card>
            </b-collapse>
          </b-col>
        </b-row>
      </div>
    </section>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
</script>
