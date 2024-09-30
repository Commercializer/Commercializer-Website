import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const html = document.getElementsByTagName('html')[0]

export const useThemeStore = defineStore('theme_store', () => {
  const theme = ref('dark')

  let isSidebarVisible = ref(true)

  const setTheme = (nTheme: 'light' | 'dark') => {
    theme.value = nTheme
    html.setAttribute('data-bs-theme', nTheme)
  }

  const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value
  }

  return {
    theme,
    setTheme,
    isSidebarVisible,
    toggleSidebar
  }
})
