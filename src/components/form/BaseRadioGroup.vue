<script setup>
import BaseRadio from '@/components/form/BaseRadio.vue'

defineProps({
    options: {
        type: Array,
        required: true,
    },
    name: {
        type: Number,
        required: true,
    },
    modelValue: {
        type: [String, Number],
        required: true,
    },
})
</script>

<template>
    <BaseRadio
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
        :name="name"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>
