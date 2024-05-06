<template>
    <a href="https://calendly.com/commercializer/30min" target="_blank" class="btn"
        :class="{ 'in-header': props.header, 'btn-lg': !props.header, 'in-hero': props.inHero }"
        style="background: #fff;color: #121212">
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
    inHero?: boolean
}>(), {
    header: false,
    inHero: false
})
</script>


<style lang="scss" scoped>
.in-header {
    display: none;

    @media (min-width: 992px) {
        display: inline-flex;
    }
}


.in-hero {
    @media (min-width: 992px) {
        display: none;
    }
}
</style>