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
    large: {
        type: Boolean,
        required: false,
        default: false,
    },
})
</script>

<template>
    <button
        class="btn-primary"
        :class="{ 'btn-full': full, 'btn-lg': large, 'btn-sm': small }"
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
