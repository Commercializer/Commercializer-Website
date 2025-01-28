<template>
  <section>
    <b-container class="pt-3 pb-lg-4 pb-xl-5">
      <b-row class="pt-md-2 pt-lg-3 pb-2 pb-md-4">
        <b-col xxl="4" xl="5" lg="6" class="pt-3 mt-3">
          <h1 class="h3 mb-2">Let's Get</h1>
          <h2 class="display-2 text-gradient-primary pb-sm-0 pb-md-0 mb-1 commercialized-text">Commercialized</h2>
          <p class="lead my-2 mb-4 mb-lg-6 smaller-text">Unlock the full potential of your venture with our expertise in strategy, innovation, and execution.</p>
          <div class="d-block pt-lg-5 smaller-text">
            <div class="nav d-block pt-lg-5 smaller-text">
              <a href="mailto:sales@commercializer.global" class="nav-link fw-normal text-decoration-underline p-0 mb-3">sales@commercializer.global</a>
              <div class="text-nav">+94 77 898 2010</div>
            </div>
          </div>
        </b-col>
        <b-col lg="6" class="offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
          <b-form @submit.prevent="handleSubmit">
            <b-row class="g-4">
              <b-col sm="6">
                <b-form-group label="First name" label-for="first-name" label-class="fs-base">
                  <b-form-input id="first-name" type="text" class="form-control-lg dark-placeholder" v-model="formData.firstName" required></b-form-input>
                  <b-form-invalid-feedback>Please enter your first name!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group label="Last name" label-for="last-name" label-class="fs-base">
                  <b-form-input id="last-name" type="text" class="form-control-lg dark-placeholder" v-model="formData.lastName" required></b-form-input>
                  <b-form-invalid-feedback>Please enter your last name!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group label="Email address" label-for="email" label-class="fs-base">
                  <b-form-input
                    id="email"
                    type="email"
                    class="form-control-lg dark-placeholder"
                    v-model="formData.email"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback
                    >Please provide a valid email address!</b-form-invalid-feedback
                  >
                </b-form-group>
              </b-col>

             <b-col sm="6">
                <b-form-group label="Contact Number" label-for="contact" label-class="fs-base">
                    <vue-tel-input
                      id="contact"
                      class="form-control-lg"
                      v-model="formData.contact"
                      @country-change="handleCountryChange"
                      :default-country="'LK'"
                    />
                     <b-form-invalid-feedback>Please provide a valid contact number!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                 <b-col sm="6">
                <b-form-group label="Brand / Company" label-for="company" label-class="fs-base">
                  <b-form-input id="company" type="text" class="form-control-lg dark-placeholder" v-model="formData.company"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group label="Website" label-for="website" label-class="fs-base">
                  <b-form-input id="website" type="url" class="form-control-lg dark-placeholder" v-model="formData.website"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group label="Let us know about your project" label-for="message" label-class="fs-base">
                  <b-form-textarea
                    id="message"
                    rows="3"
                    class="form-control-lg dark-placeholder"
                    v-model="formData.message"
                    required
                  ></b-form-textarea>
                  <b-form-invalid-feedback>Please provide a valid message!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12" class="pb-2">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="true"
                  v-model="formData.checkbox1"
                >
                  Be part of the Commercializer journey—get exclusive updates and insights,
                  with the freedom to opt out anytime!
                </b-form-checkbox>
              </b-col>

              <b-col cols="12">
                 <b-button size="lg" variant="primary" type="submit" class="w-100 w-sm-auto gradient-button">Send a request</b-button>
                </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  company: '',
  website: '',
  message: '',
  checkbox1: false,
  countryCode: '',
});

const handleCountryChange = (country: any) => {
  formData.value.countryCode = country.dialCode;
  console.log('Selected country code', formData.value.countryCode);
};

const handleSubmit = async () => {
  console.log('Form Data Submitted:',formData.value);

  try {
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (!response.ok) {
      console.error('HTTP Error:', response.status, response.statusText);
      alert('Failed to send your request. Please try again later.');
      return;
    }

    const data = await response.json();

    if (data.status === 'success') {
         formData.value = {
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            company: '',
            website: '',
            message: '',
            checkbox1: false,
            countryCode: '',
        };
      alert('Your request has been successfully sent!');
    } else {
      console.error('Server error:', data.message);
      alert('Failed to send your request. Please try again.');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    alert('An error occurred while sending your request. Please try again later.');
  }
};
</script>

<style scoped>
.commercialized-text {
  background: linear-gradient(90deg, #81cb30 0%, #14b7c6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}
.smaller-text {
  font-size: 1.2rem;
}
.dark-placeholder::placeholder {
    color: #666;
}
.gradient-button {
  background: linear-gradient(90deg, #81cb30 0%, #14b7c6 100%) !important;
  border: none;
}
</style>

<style>
.vue-tel-input {
  border-radius: 3px;
  display: flex;
  border: 1px solid #444; /* Changed border color to a darker gray */
  text-align: left;
}

.vue-tel-input:focus-within {
  box-shadow: inset 0 1px 1px #00000013; /* Changed focus box-shadow color */
  border-color: #aeafb0; /* Changed focus border color */
}

.vti__dropdown.open {
  background-color: #030202; /* Changed open background color to a dark gray */
}

.vti__dropdown.disabled {
  cursor: no-drop;
  outline: none;
  background-color: #222; /* Changed disabled background color to a dark gray */
}

.vti__dropdown:hover {
  background-color: #222; /* Changed hover background color to a dark gray */
}
.vti__selection .vti__country-code {
  color: #aaa; /* Changed country code color to light gray */
}
.vti__dropdown-list {
  z-index: 1;
  padding: 0;
  margin: 0;
  text-align: left;
  list-style: none;
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  left: -1px;
  background-color: #333; /* Changed dropdown list background color to a darker gray */
  border: 1px solid #555; /* Changed dropdown list border color */
  width: 390px;
}

.vti__dropdown-item.highlighted {
  background-color: #444;  /* Changed highlighted item background to a darker gray */
}

.vti__dropdown-item.last-preferred {
  border-bottom: 1px solid #555; /* Changed last preferred item border color */
}
.vti__input {
  border: none;
  border-radius: 0 2px 2px 0;
  width: 100%;
  outline: none;
  padding-left: 7px;
  color: #fff;  /* Changed input text color to white */
}

.vti__search_box {
  border: 1px solid #555; /* Changed search box border color */
  width: 94%;
  padding: 7px;
  margin: 2px;
  background-color: #222; /* Changed search box background color to a darker gray */
  color: #fff; /* Changed search box text color to white */
}
</style>