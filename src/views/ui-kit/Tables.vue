<template>
  <UIKitLayout>
    <UIKitPageTitle title="Tables" description="Examples for opt-in styling of tables." />

    <!-- Basic example -->
    <section id="tables-basic" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Basic example</h2>
      <div class="pt-1">
        <div class="table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Jane</td>
                <td>Birkins</td>
                <td>Support</td>
                <td>+3 774 28 50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Dark table -->
    <section id="tables-dark" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Dark table</h2>

      <div class="pt-1">
        <div class="table-responsive">
          <table class="table table-dark mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Jane</td>
                <td>Birkins</td>
                <td>Support</td>
                <td>+3 774 28 50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Striped rows -->
    <section id="tables-striped-rows" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Striped rows</h2>

      <div class="pt-1">
        <div class="table-responsive mb-3">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
          <table class="table table-dark table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Striped columns -->
    <section id="tables-striped-columns" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Striped columns</h2>

      <div class="pt-1">
        <div class="table-responsive mb-3">
          <table class="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
          <table class="table table-dark table-striped-columns mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Bordered table -->
    <section id="tables-bordered" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Bordered table</h2>

      <div class="pt-1">
        <div class="table-responsive mb-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
          <table class="table table-dark table-bordered mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Hoverable rows -->
    <section id="tables-hoverable" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Hoverable rows</h2>

      <div class="pt-1">
        <div class="table-responsive mb-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
          <table class="table table-dark table-hover mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Color borders -->
    <section id="tables-color-borders" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Color borders</h2>
      <div class="pt-1">
        <div class="table-responsive mb-3">
          <table class="table table-bordered border-success">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered border-danger mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
            </tbody>
          </table>
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

const anchorNavigationData = [
  {
    id: 'tables-basic',
    title: 'Basic example'
  },
  {
    id: 'tables-dark',
    title: 'Dark table'
  },
  {
    id: 'tables-striped-rows',
    title: 'Striped rows'
  },
  {
    id: 'tables-striped-columns',
    title: 'Striped columns'
  },
  {
    id: 'tables-bordered',
    title: 'Bordered table'
  },
  {
    id: 'tables-hoverable',
    title: 'Hoverable rows'
  },
  {
    id: 'tables-color-borders',
    title: 'Color borders'
  }
]
</script>
