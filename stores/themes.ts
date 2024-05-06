
export const useThemeStore = defineStore('theme_store', () => {
  const html = import.meta.server ? null : document.getElementsByTagName('html')[0]
  const theme = useLocalStorage<'light' | 'dark'>('silicon_vue_theme_store', 'dark')

  let isSidebarVisible = ref(true)

  const setTheme = (nTheme: 'light' | 'dark') => {
    theme.value = nTheme
    html?.setAttribute('data-bs-theme', nTheme)
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
