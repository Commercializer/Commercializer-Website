<template>
    <div class="form-check form-switch mode-switch pe-lg-1 ms-auto me-4 d-none">
        <input v-model="checked" role="button" id="theme-mode" class="form-check-input" type="checkbox"
            @change="onThemeChange" />
        <label class="form-check-label d-none d-sm-block" for="theme-mode">Light</label>
        <label class="form-check-label d-none d-sm-block" for="theme-mode">Dark</label>
    </div>
</template>
<script lang="ts" setup>

const useTheme = useThemeStore()

const checked = ref(useTheme.theme != 'dark')

const onThemeChange = (e: any) => {
    const html = document.getElementsByTagName('html')[0]
    if (html) {
        if (checked.value) {
            useTheme.setTheme('dark')
        } else {
            useTheme.setTheme('light')
        }
    }
}

onMounted(() => {
    useTheme.setTheme(useTheme.theme)
})
</script>