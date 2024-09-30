<template>
  <label class="form-label fs-base" :for="id ?? 'form-password'">{{ label ?? 'Password' }}</label>
  <div class="password-toggle">
    <input
      :type="showPassword ? 'text' : 'password'"
      :id="id ?? 'form-password'"
      class="form-control form-control-lg"
      :placeholder="placeHolder ?? 'Enter your password'"
      :value="modelValue"
      @input="updateValue"
      v-bind="$attrs"
    />
    <label class="password-toggle-btn" aria-label="Show/hide password">
      <input class="password-toggle-check" type="checkbox" @change="setShowPassword" />
      <span class="password-toggle-indicator"></span>
    </label>
    <div class="invalid-tooltip position-absolute top-100 start-0">
      {{ error ?? 'Incorrect password!' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

type PasswordInputType = {
  id?: string
  value?: string
  label?: string
  placeHolder?: string
  error?: string
  modelValue?: string
}

const props = defineProps<PasswordInputType>()

const showPassword = ref<boolean>(false)

const setShowPassword = () => {
  return (showPassword.value = !showPassword.value)
}

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
