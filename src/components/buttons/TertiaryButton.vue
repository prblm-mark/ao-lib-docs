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
        class="btn-tertiary"
        :class="{ 'btn-full': full, 'btn-sm': small, 'btn-lg': large }"
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

<style lang="scss" scoped>
// .btn-tertiary {
//     @include btn(var(--tertiary-color));
//     color: var(--tertiary-text-color);
//     box-shadow: inset 0 0 0 1px $transparent;
//     &:hover,
//     &:focus {
//         background-color: var(--tertiary-active-color);
//     }

//     .btn-icon-left {
//         @include btn-icon-left;
//     }

//     .btn-icon-right {
//         @include btn-icon-right;
//     }
// }

// .btn-full {
//     @include w('full');
//     @include display('block');
// }
// .btn-sm {
//     @include btn-sm;

//     .btn-icon-left {
//         @include btn-sm-icon-left;
//     }

//     .btn-icon-right {
//         @include btn-sm-icon-left;
//     }
// }
</style>
