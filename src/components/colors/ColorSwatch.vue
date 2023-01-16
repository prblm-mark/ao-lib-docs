<script setup>
import { computed } from 'vue'

const props = defineProps({
    swatchReference: {
        type: String,
        required: true,
        default: '',
    },
    index: {
        type: Number,
        required: true,
        default: 0,
    },
})

const swatchColour = computed(() => {
    return `background-color: ${props.swatchReference}`
})
</script>

<template>
    <div>
        <div :style="swatchColour" class="swatch-colour"></div>
        <p class="swatch-reference">
            <span>{{ props.index + 1 }}00</span>
            {{ swatchReference }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.swatch-colour {
    @include display('grid');
    @include items('center');
    @include justify('center');
    @include h('40');
    @include rounded('xs');
    @include mb('4');
    @include fs('sm');
    @include fw('700');
    @include tracking('wider');
    color: var(--primary-text-color);
    border: 1px solid var(--content-border-color);
}
.swatch-reference {
    color: var(--content-text-color);
    @include fs('xxxs');
    @include leading('tight');
    @include tracking('wider');
    @include fw('600');
    @include md {
        @include fs('xxs');
        @include leading('snug');
    }
}
.swatch-reference span {
    color: var(--content-text-color);
    @include fw('700');
    @include display('block');
}
</style>
