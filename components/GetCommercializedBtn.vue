<template>
    <a href="https://calendly.com/commercializer/30min" target="_blank" class="btn btn-lg d-lg-none"
        :class="{ 'in-header': props.header }" style="background: #fff;color: #121212">
        Get Commercialized
        &nbsp;
        <Icon :icon="LeftArrowIcon" class="fs-4 lh-1 me-1" />
    </a>
</template>

<script setup lang="ts">
import LeftArrowIcon from '@iconify/icons-bx/right-arrow-alt';
import { Icon } from '@iconify/vue';

const props = withDefaults(defineProps<{
    header?: boolean
}>(), {
    header: false
})
</script>


<style lang="scss" scoped>
.in-header {
    display: none;

    @media (min-width: 992px) {
        display: block;
    }
}
</style>