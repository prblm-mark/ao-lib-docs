<script setup>
import { computed, inject, ref } from 'vue'
import ColourSwatch from '@/components/colors/ColorSwatch.vue'

const props = defineProps({
    colourRange: {
        type: Object,
        required: true,
    },
})
const darkMode = ref(inject('darkMode'))
const hideRange = computed(() => {
    let display = `display: grid;`
    if (darkMode.value && props.colourRange.darkTheme === false) {
        display = `display: none;`
    }
    if (!darkMode.value && props.colourRange.darkTheme === true) {
        display = `display: none;`
    }
    return display
})
</script>
<template>
    <div class="colour-range" :style="hideRange">
        <div class="colour-range-title">
            {{ colourRange.name }}
        </div>

        <ColourSwatch
            v-for="(reference, index) in colourRange.references"
            :key="reference"
            :swatchReference="reference"
            :index="index"
        />
    </div>
</template>

<style lang="scss" scoped>
.colour-range {
    @include display('grid');
    @include grid-cols(3);
    @include grid-gap('8');
    @include items('end');
    @include mb('20');
    @include xl {
        @include grid-cols(10);
    }
}
.colour-range-title {
    color: var(--main-heading-color);
    @include fs('sm');
    @include fw('700');
    grid-column: 1 / -1;
    @include xl {
        grid-column: 1/1;
    }
}
</style>
