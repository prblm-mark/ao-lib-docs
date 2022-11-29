<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    value: {
        type: [String, Number],
        required: true,
    },
})
</script>

<template>
    <div class="form-element form-element-radio">
        <input
            type="radio"
            :checked="modelValue === value"
            :value="value"
            v-bind="$attrs"
            class="form-radio form-field"
            @change="$emit('update:modelValue', value)"
        />
        <label v-if="label" class="form-label">{{ label }}</label>
    </div>
</template>

<style lang="scss">
// .cc__form-radio {
//     @apply w-5 h-5 p-2 !rounded-full mr-2 focus:ring-transparent focus:ring-0 focus:outline-none focus:ring-offset-0 focus:hover:border-transparent dark:checked:bg-ao-light-blue dark:focus:ring-0 appearance-none transition-colors;
// }
// .cc__form-radio + label {
//     @apply mb-0;
// }
</style>
