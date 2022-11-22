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

<style lang="scss">
// .btn-primary {
//     @include btn(var(--primary-color));
//     color: var(--primary-text-color);
//     &:hover,
//     &:focus {
//         background-color: var(--primary-active-color);
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
