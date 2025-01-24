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
                  <b-form-input
                    id="contact"
                    type="tel"
                    class="form-control-lg dark-placeholder"
                    placeholder="+12 77 123 4567"
                    v-model="formData.contact"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback
                    >Please provide a valid contact number!</b-form-invalid-feedback
                  >
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
import { ref } from 'vue';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  company: '',
  website: '',
  message: '',
  checkbox1: false,
});

const handleSubmit = async () => {
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