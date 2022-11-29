<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
})
</script>
<template>
    <div class="form-element form-element-checkbox">
        <input
            type="checkbox"
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
            class="form-checkbox form-field"
        />
        <label v-if="label" class="form-label">{{ label }}</label>
    </div>
</template>
