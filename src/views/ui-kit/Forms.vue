<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Forms"
      description="Form control styles, layout options, and custom components."
    />

    <!-- Supported input types -->
    <section id="forms-types" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Supported input types</h2>

      <div class="pt-1">
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="text-input">Text</label>
          <b-col md="10">
            <b-form-input type="text" id="text-input" v-model="inputType.text" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="search-input">Search</label>
          <b-col md="10">
            <b-form-input type="search" id="search-input" v-model="inputType.search" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="email-input">Email</label>
          <b-col md="10">
            <b-form-input type="email" id="email-input" v-model="inputType.email" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="url-input">URL</label>
          <b-col md="10">
            <b-form-input type="url" id="url-input" v-model="inputType.url" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="tel-input">Phone</label>
          <b-col md="10">
            <b-form-input type="tel" id="tel-input" v-model="inputType.phone" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="pass-input">Password</label>
          <b-col md="10">
            <b-form-input type="password" id="pass-input" v-model="inputType.password" />
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <label class="col-md-2 col-form-label fs-sm" for="textarea-input">Textarea</label>
          <b-col md="10">
            <b-form-textarea id="textarea-input" rows="5" v-model="inputType.textarea" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="select-input">Select</label>
          <b-col md="10">
            <b-form-select id="select-input" v-model="inputType.select" :options="selectOptions" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="multiselect-input">Multiselect</label>
          <b-col md="10">
            <b-form-select
              id="multiselect-input"
              v-model="inputType.multiSelect"
              :options="selectOptions"
              multiple
            />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="file-input">File</label>
          <b-col md="10">
            <input class="form-control" type="file" id="file-input" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="number-input">Number</label>
          <b-col md="10">
            <b-form-input type="number" id="number-input" v-model="inputType.number" />
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="datalist-input">Datalist</label>
          <b-col md="10">
            <input
              type="text"
              class="form-control"
              list="datalist-options"
              id="datalist-input"
              placeholder="Type to search..."
            />
            <datalist id="datalist-options">
              <option value="San Francisco"></option>
              <option value="New York"></option>
              <option value="Seattle"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
            </datalist>
          </b-col>
        </b-row>
        <b-row class="mb-4 align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="range-input">Range</label>
          <b-col md="10">
            <b-form-input class="form-range" type="range" id="range-input" />
          </b-col>
        </b-row>
        <b-row class="align-items-center">
          <label class="col-md-2 col-form-label fs-sm" for="color-input">Color</label>
          <b-col md="10">
            <b-form-input
              class="w-100 form-control-color"
              type="color"
              id="color-input"
              v-model="inputType.color"
            />
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Floating labels -->
    <section id="forms-floating-labels" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Floating labels</h2>

      <div class="pt-1">
        <div class="form-floating mb-4">
          <b-form-input type="text" id="fl-text" placeholder="Your name" />
          <label for="fl-text">Your name</label>
        </div>
        <div class="form-floating mb-4">
          <b-form-select id="fl-select" v-model="selectedCountry" :options="countryList" />
          <label for="fl-select">Your country</label>
        </div>
        <div class="form-floating">
          <b-form-textarea
            id="fl-textarea"
            style="height: 8rem"
            placeholder="Your message"
          ></b-form-textarea>
          <label for="fl-textarea">Your message</label>
        </div>
      </div>
    </section>

    <!-- Password visibility toggle -->
    <section id="forms-password-toggle" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Password visibility toggle</h2>

      <div class="pt-1">
        <div style="max-width: 25rem">
          <PasswordInput v-model="inputType.password" />
        </div>
      </div>
    </section>

    <!-- Checkboxes -->
    <section id="forms-checkboxes" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Checkboxes</h2>

      <div class="pt-1">
        <b-form-checkbox id="ex-check-1" class="mb-1">Check this checkbox</b-form-checkbox>

        <b-form-checkbox id="ex-check-2" v-model="checked" class="mb-1"
          >Uncheck this checkbox</b-form-checkbox
        >

        <b-form-checkbox id="ex-check-3" disabled class="mb-1">Disabled checkbox</b-form-checkbox>

        <div class="pt-3">
          <div class="form-check-inline">
            <b-form-checkbox id="ex-check-4" class="mb-1">Check this checkbox</b-form-checkbox>
          </div>
          <div class="form-check-inline">
            <b-form-checkbox id="ex-check-5" v-model="checked" class="mb-1"
              >Uncheck this checkbox</b-form-checkbox
            >
          </div>
          <div class="form-check-inline">
            <b-form-checkbox id="ex-check-6" disabled class="mb-1"
              >Disabled checkbox</b-form-checkbox
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Radios -->
    <section id="forms-radios" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Radios</h2>

      <div class="pt-1">
        <b-form-radio id="ex-radio-1" name="radio" class="mb-1">Toggle this radio</b-form-radio>
        <b-form-radio id="ex-radio-2" name="radio" class="mb-1" v-model="checked"
          >Toggle this radio</b-form-radio
        >
        <b-form-radio id="ex-radio-3" name="radio" class="mb-1" disabled
          >Disabled radio</b-form-radio
        >

        <div class="pt-3">
          <div class="form-check-inline">
            <b-form-radio id="ex-radio-4" name="radio1" class="mb-1"
              >Toggle this radio</b-form-radio
            >
          </div>
          <div class="form-check-inline">
            <b-form-radio id="ex-radio-5" name="radio1" class="mb-1" v-model="checked"
              >Toggle this radio</b-form-radio
            >
          </div>
          <div class="form-check-inline">
            <b-form-radio id="ex-radio-6" name="radio1" class="mb-1" disabled
              >Disabled radio</b-form-radio
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Switches -->
    <section id="forms-switches" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Switches</h2>

      <div class="pt-1">
        <div class="form-switch mb-3">
          <b-form-checkbox id="customSwitch1">Toggle this switch element</b-form-checkbox>
        </div>
        <div class="form-check form-switch mb-3">
          <b-form-checkbox id="customSwitch2" v-model="checked"
            >Toggle this switch element</b-form-checkbox
          >
        </div>
        <div class="form-check form-switch">
          <b-form-checkbox id="customSwitch3" disabled>Disabled switch element</b-form-checkbox>
        </div>
      </div>
    </section>

    <!-- Theme mode switch -->
    <section id="forms-theme-mode-switch" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Theme mode switch</h2>

      <div class="pt-1">
        <div class="form-check form-switch mode-switch mt-1">
          <input type="checkbox" role="button" class="form-check-input" id="theme-mode-1" />
          <label class="form-check-label d-none d-sm-block d-lg-none d-xl-block" for="theme-mode-1"
            >Light</label
          >
          <label class="form-check-label d-none d-sm-block d-lg-none d-xl-block" for="theme-mode-1"
            >Dark</label
          >
        </div>
      </div>
    </section>

    <!-- Sizing -->
    <section id="forms-sizing" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizing</h2>

      <div class="pt-1">
        <div class="d-sm-flex">
          <div class="w-100 me-4">
            <div class="mb-3">
              <b-form-group label="Large input" label-for="input-lg" label-class="fs-base">
                <b-form-input
                  size="lg"
                  id="input-lg"
                  type="text"
                  placeholder="Large input placeholder"
                />
              </b-form-group>
            </div>
            <div class="mb-3">
              <b-form-group label="Normal input" label-for="input-normal" label-class="fs-base">
                <b-form-input
                  id="input-normal"
                  type="text"
                  placeholder="Normal input placeholder"
                />
              </b-form-group>
            </div>
            <div class="mb-3 mb-sm-0">
              <b-form-group label="Small input" label-for="input-sm" label-class="fs-base">
                <b-form-input
                  size="sm"
                  id="input-sm"
                  type="text"
                  placeholder="Small input placeholder"
                />
              </b-form-group>
            </div>
          </div>
          <div class="w-100">
            <div class="mb-3">
              <b-form-group label="Large select" label-for="select-lg" label-class="fs-base">
                <b-form-select
                  size="lg"
                  v-model="inputType.select"
                  :options="selectOptions"
                  id="select-lg"
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="mb-3">
              <b-form-group label="Normal select" label-for="select-normal" label-class="fs-base">
                <b-form-select
                  v-model="inputType.select"
                  :options="selectOptions"
                  id="select-normal"
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="mb-3 mb-sm-0">
              <b-form-group label="Small select" label-for="select-sm" label-class="fs-base">
                <b-form-select
                  size="sm"
                  v-model="inputType.select"
                  :options="selectOptions"
                  id="select-sm"
                ></b-form-select>
              </b-form-group>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Readonly & disabled -->
    <section id="forms-disabled" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Readonly &amp; disabled</h2>

      <div class="pt-1">
        <div class="mb-3">
          <b-form-input type="text" placeholder="Readonly input here..." readonly />
        </div>
        <div class="mb-3">
          <b-form-input
            type="text"
            id="disabled-input"
            placeholder="Disabled input here..."
            disabled
          />
        </div>
        <div class="mb-3">
          <b-form-select
            v-model="inputType.select"
            :options="selectOptions"
            id="disabled-select-input"
            disabled
          ></b-form-select>
        </div>
      </div>
    </section>

    <!-- Inline form -->
    <section id="forms-inline" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Inline form</h2>

      <div class="pt-1">
        <b-form class="row row-cols-sm-auto g-3 align-items-center">
          <b-col cols="12">
            <b-form-input id="inline-form-input" type="text" placeholder="Full name" />
          </b-col>
          <b-col cols="12">
            <b-form-select
              v-model="inputType.select"
              :options="selectOptions"
              id="inline-form-select"
            ></b-form-select>
          </b-col>
          <b-col cols="12">
            <b-form-checkbox id="inline-form-check" type="checkbox">Remember me</b-form-checkbox>
          </b-col>
          <b-col cols="12">
            <b-button variant="primary" type="submit">Submit</b-button>
          </b-col>
        </b-form>
      </div>
    </section>

    <!-- Help text -->
    <section id="forms-help-text" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Help text</h2>

      <div class="pt-1">
        <div style="max-width: 28rem">
          <b-form-group label="Password" label-for="help-text-input" label-class="fs-base">
            <b-form-input id="help-text-input" type="password" placeholder="Your password here" />
            <b-form-text
              >Your password must be 8-20 characters long, contain letters and numbers, and must not
              contain spaces, special characters, or emoji.
            </b-form-text>
          </b-form-group>
        </div>
      </div>
    </section>

    <!-- Validation: status text -->
    <section id="forms-validation-text" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Validation: status text</h2>

      <div class="pt-1">
        <b-form style="max-width: 55rem" novalidate>
          <b-row>
            <b-col md="4" class="mb-3">
              <b-form-group label="First name" label-for="validationCustom01" label-class="fs-base">
                <b-form-input
                  id="validationCustom01"
                  type="text"
                  placeholder="First name"
                  v-model="validationFormData.firstName"
                  :state="validateFirstName"
                  required
                />
                <b-form-valid-feedback :state="validateFirstName"
                  >Looks good!</b-form-valid-feedback
                >
              </b-form-group>
            </b-col>
            <b-col md="4" class="mb-3">
              <b-form-group label="Last name" label-for="validationCustom02" label-class="fs-base">
                <b-form-input
                  id="validationCustom02"
                  type="text"
                  placeholder="Last name"
                  v-model="validationFormData.lastName"
                  :state="validateLastName"
                  required
                />
                <b-form-valid-feedback :state="validateLastName">Looks good!</b-form-valid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="4" class="mb-3">
              <b-form-group
                label="Username"
                label-for="validationCustomUsername"
                label-class="fs-base"
              >
                <b-form-input
                  id="validationCustomUsername"
                  type="text"
                  placeholder="Username"
                  v-model="validationFormData.username"
                  :state="validateUsername"
                  required
                />
                <b-form-valid-feedback :state="validateUsername">Looks good!</b-form-valid-feedback>
                <b-form-invalid-feedback :state="validateUsername"
                  >Please choose a username.</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-form-group label="City" label-for="validationCustom03" label-class="fs-base">
                <b-form-select
                  id="validationCustom03"
                  v-model="validationFormData.city"
                  :options="cityList"
                  :state="validateCity"
                  required
                />
                <b-form-valid-feedback :state="validateCity">Looks good!</b-form-valid-feedback>
                <b-form-invalid-feedback :state="validateCity"
                  >Please choose a valid city.</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>
            <b-col md="3" class="mb-3">
              <b-form-group label="Country" label-for="validationCustom04" label-class="fs-base">
                <b-form-select
                  id="validationCustom04"
                  v-model="validationFormData.country"
                  :options="countryList"
                  :state="validateCountry"
                  required
                />
                <b-form-valid-feedback :state="validateCountry">Looks good!</b-form-valid-feedback>
                <b-form-invalid-feedback :state="validateCountry"
                  >Please choose a valid country.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="3" class="mb-3">
              <b-form-group label="Zip" label-for="validationCustom05" label-class="fs-base">
                <b-form-input
                  id="validationCustom05"
                  type="text"
                  placeholder="Zip"
                  v-model="validationFormData.zip"
                  :state="validateZip"
                  required
                />
                <b-form-valid-feedback :state="validateZip">Looks good!</b-form-valid-feedback>
                <b-form-invalid-feedback :state="validateZip"
                  >Please choose a valid zip.</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>
          </b-row>
          <div class="mb-3 py-2">
            <b-form-group>
              <b-form-checkbox
                v-model="validationFormData.isAgreed"
                :state="validateIsAgreed"
                id="invalidCheck"
                required
                >Agree to terms and conditions
              </b-form-checkbox>
              <b-form-invalid-feedback :state="validateIsAgreed"
                >You must agree before submitting.
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
          <b-button variant="primary" type="submit">Submit Form</b-button>
        </b-form>
      </div>
    </section>

    <!-- Validation: status tooltips -->
    <section id="forms-validation-tooltips" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Validation: status tooltips</h2>

      <div class="pt-1">
        <b-form style="max-width: 55rem" novalidate>
          <b-row>
            <b-col md="4" class="mb-3">
              <b-form-group label="First name" label-for="validationCustom01" label-class="fs-base">
                <b-form-input
                  id="validationCustom01"
                  type="text"
                  placeholder="First name"
                  v-model="validationFormData.firstName"
                  :state="validateFirstName"
                  required
                />
                <b-form-valid-feedback class="valid-tooltip" :state="validateFirstName"
                  >Looks good!
                </b-form-valid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="4" class="mb-3">
              <b-form-group label="Last name" label-for="validationCustom02" label-class="fs-base">
                <b-form-input
                  id="validationCustom02"
                  type="text"
                  placeholder="Last name"
                  v-model="validationFormData.lastName"
                  :state="validateLastName"
                  required
                />
                <b-form-valid-feedback class="valid-tooltip" :state="validateLastName"
                  >Looks good!
                </b-form-valid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="4" class="mb-3">
              <b-form-group
                label="Username"
                label-for="validationCustomUsername"
                label-class="fs-base"
              >
                <b-form-input
                  id="validationCustomUsername"
                  type="text"
                  placeholder="Username"
                  v-model="validationFormData.username"
                  :state="validateUsername"
                  required
                />
                <b-form-valid-feedback class="valid-tooltip" :state="validateUsername"
                  >Looks good!
                </b-form-valid-feedback>
                <b-form-invalid-feedback class="invalid-tooltip" :state="validateUsername"
                  >Please choose a username.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-form-group label="City" label-for="validationCustom03" label-class="fs-base">
                <b-form-select
                  id="validationCustom03"
                  v-model="validationFormData.city"
                  :options="cityList"
                  :state="validateCity"
                  required
                />
                <b-form-valid-feedback class="valid-tooltip" :state="validateCity"
                  >Looks good!</b-form-valid-feedback
                >
                <b-form-invalid-feedback class="invalid-tooltip" :state="validateCity"
                  >Please choose a valid city.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="3" class="mb-3">
              <b-form-group label="Country" label-for="validationCustom04" label-class="fs-base">
                <b-form-select
                  id="validationCustom04"
                  v-model="validationFormData.country"
                  :options="countryList"
                  :state="validateCountry"
                  required
                />
                <b-form-valid-feedback class="valid-tooltip" :state="validateCountry"
                  >Looks good!
                </b-form-valid-feedback>
                <b-form-invalid-feedback class="invalid-tooltip" :state="validateCountry"
                  >Please choose a valid country.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="3" class="mb-3">
              <b-form-group label="Zip" label-for="validationCustom05" label-class="fs-base">
                <b-form-input
                  id="validationCustom05"
                  type="text"
                  placeholder="Zip"
                  v-model="validationFormData.zip"
                  :state="validateZip"
                  required
                />
                <b-form-valid-feedback class="valid-tooltip" :state="validateZip"
                  >Looks good!</b-form-valid-feedback
                >
                <b-form-invalid-feedback class="invalid-tooltip" :state="validateZip"
                  >Please choose a valid zip.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="mb-3 py-2">
            <b-form-group>
              <b-form-checkbox
                v-model="validationFormData.isAgreed"
                :state="validateIsAgreed"
                id="invalidCheck"
                required
                >Agree to terms and conditions
              </b-form-checkbox>
              <b-form-invalid-feedback class="invalid-tooltip" :state="validateIsAgreed"
                >You must agree before submitting.
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
          <b-button variant="primary" type="submit">Submit Form</b-button>
        </b-form>
      </div>
    </section>

    <!-- Input mask (Formatted content) -->
    <section id="forms-formatted" class="py-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Input mask (Formatted content)</h2>

      <div class="pt-1" style="max-width: 25rem">
        <div class="mb-3">
          <label for="cardFormat" class="form-label">Card number</label>
          <div class="d-flex align-items-center border rounded-3">
            <b-form-input
              type="text"
              class="border-0 bg-transparent shadow-none"
              id="cardFormat"
              v-mask="'#### #### #### ####'"
              placeholder="Enter credit card number"
            />
            <div class="p-3">
              <div class="credit-card-icon"></div>
            </div>
          </div>
          <ul class="list-unstyled fs-sm pt-2">
            <li class="mb-1"><span class="fw-semibold">Amex:</span> starts with 34/37</li>
            <li class="mb-1"><span class="fw-semibold">VISA:</span> starts with 4</li>
            <li class="mb-1">
              <span class="fw-semibold">Diners Club:</span> starts with 300-305/309
            </li>
            <li class="mb-1">
              <span class="fw-semibold">MasterCard:</span> starts with 51-55/22-27
            </li>
            <li class="mb-1"><span class="fw-semibold">JCB:</span> starts with 35/2131/1800</li>
            <li class="mb-1">
              <span class="fw-semibold">Discover:</span> starts with 6011/65/644-649
            </li>
          </ul>
        </div>

        <div class="mb-3">
          <b-form-group label="Phone" label-for="phoneFormat" label-class="fs-base">
            <b-form-input
              id="phoneFormat"
              type="tel"
              v-mask="'+1 ### ### ##'"
              placeholder="+1 ___ ___ __"
              required
            />
          </b-form-group>
        </div>

        <div class="mb-3">
          <b-form-group label="Date" label-for="dateFormat" label-class="fs-base">
            <b-form-input
              id="dateFormat"
              type="text"
              v-mask="'####-##-##'"
              placeholder="yyyy-mm-dd"
              required
            />
          </b-form-group>
        </div>

        <div class="mb-3">
          <b-form-group label="Date short" label-for="dateShortFormat" label-class="fs-base">
            <b-form-input
              id="dateShortFormat"
              type="text"
              v-mask="'##/##'"
              placeholder="mm/yy"
              required
            />
          </b-form-group>
        </div>

        <div class="mb-3">
          <b-form-group label="Time" label-for="timeFormat" label-class="fs-base">
            <b-form-input
              id="timeFormat"
              type="text"
              v-mask="'##:##'"
              placeholder="hh:mm"
              required
            />
          </b-form-group>
        </div>

        <div class="mb-3">
          <b-form-group label="Prefix + uppercase" label-for="prefixFormat" label-class="fs-base">
            <b-form-input id="prefixFormat" type="text" v-mask="'PREFI!X-AAA-AAA-AAA'" required />
          </b-form-group>
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
import PasswordInput from '@/components/PasswordInput.vue'
import { computed, ref } from 'vue'

const anchorNavigationData = [
  {
    id: 'forms-types',
    title: 'Supported input types'
  },
  {
    id: 'forms-floating-labels',
    title: 'Floating labels'
  },
  {
    id: 'forms-password-toggle',
    title: 'Password visibility toggle'
  },
  {
    id: 'forms-checkboxes',
    title: 'Checkboxes'
  },
  {
    id: 'forms-radios',
    title: 'Radios'
  },
  {
    id: 'forms-switches',
    title: 'Switches'
  },
  {
    id: 'forms-theme-mode-switch',
    title: 'Theme mode switch'
  },
  {
    id: 'forms-sizing',
    title: 'Sizing'
  },
  {
    id: 'forms-disabled',
    title: 'Readonly & disabled'
  },
  {
    id: 'forms-inline',
    title: 'Inline form'
  },
  {
    id: 'forms-help-text',
    title: 'Help text'
  },
  {
    id: 'forms-validation-text',
    title: 'Validation: status text'
  },
  {
    id: 'forms-validation-tooltips',
    title: 'Validation: status tooltips'
  },
  {
    id: 'forms-formatted',
    title: 'Input mask (Formatted content)'
  }
]

const inputType = ref({
  text: 'Artisanal kale',
  search: 'How do I shoot web',
  email: 'email@example.com',
  url: 'https://getbootstrap.com',
  phone: '1-(770)-334-2518',
  password: 'mypasswordexample',
  textarea: 'Hello World!',
  select: null,
  multiSelect: [null, 'option1'],
  number: 37,
  color: '#d946ef'
})

const selectOptions = [
  { text: 'Choose option...', value: null },
  { text: 'Option item 1', value: 'option1' },
  { text: 'Option item 2', value: 'option2' },
  { text: 'Option item 3', value: 'option3' },
  { text: 'Option item 4', value: 'option4' },
  { text: 'Option item 5', value: 'option5' }
]

const selectedCountry = ref('Argentina')
const countryList = [
  { text: 'Choose country...', value: null },
  { text: 'Argentina', value: 'Argentina' },
  { text: 'Belgium', value: 'Belgium' },
  { text: 'France', value: 'France' },
  { text: 'Germany', value: 'Germany' },
  { text: 'Japan', value: 'Japan' },
  { text: 'Spain', value: 'Spain' },
  { text: 'USA', value: 'USA' }
]

const checked = ref(true)

const validationFormData = ref({
  firstName: 'John',
  lastName: 'Doe',
  username: '',
  city: null,
  country: null,
  zip: '',
  isAgreed: false
})

const cityList = [
  { text: 'Choose city...', value: null },
  { text: 'Dallas', value: 'Dallas' },
  { text: 'Houston', value: 'Houston' },
  { text: 'Los Angeles', value: 'Los Angeles' },
  { text: 'Miami', value: 'Miami' },
  { text: 'New York', value: 'New York' }
]

const validateFirstName = computed(() => {
  return validationFormData.value.firstName.length >= 2
})
const validateLastName = computed(() => {
  return validationFormData.value.lastName.length >= 2
})
const validateUsername = computed(() => {
  return validationFormData.value.username.length >= 2
})
const validateCity = computed(() => {
  return validationFormData.value.city != null
})
const validateCountry = computed(() => {
  return validationFormData.value.country != null
})
const validateZip = computed(() => {
  return validationFormData.value.zip.length > 0 && validationFormData.value.zip.length <= 6
})
const validateIsAgreed = computed(() => {
  return validationFormData.value.isAgreed == true
})
</script>
