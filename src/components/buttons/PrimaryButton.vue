<script setup>
defineProps({
    full: {
        type: Boolean,
        required: false,
        default: false,
    },
    small: {
        type: Boolean,
        required: false,
        default: false,
    },
    xsmall: {
        type: Boolean,
        required: false,
        default: false,
    },
})
</script>

<template>
    <button
        class="btn-primary"
        :class="{ 'btn-full': full, 'btn-sm': small, 'btn-xs': xsmall }"
    >
        <span v-if="$slots.iconLeft" class="btn-icon-left">
            <slot name="iconLeft" />
        </span>
        <slot />
        <span v-if="$slots.iconRight" class="btn-icon-right">
            <slot name="iconRight" />
        </span>
    </button>
</template>

<style lang="scss"></style>
