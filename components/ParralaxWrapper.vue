<template>
    <div :class="customClass" :style="customStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import Parallax from 'parallax-js'
import type { StyleValue } from 'vue';

defineProps<{
    customClass?: string;
    customStyle?: StyleValue;
}>()

onMounted(() => {
    if (!import.meta.server) {
        const element = document.querySelectorAll<HTMLElement>('.parallax')
        for (let i = 0; i < element.length; i++) {
            new Parallax(element[i])
        }
    }
})
</script>