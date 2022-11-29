<script setup>
defineProps({
    label: {
        type: String,
        default: '',
        required: false,
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    options: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div class="form-element">
        <label v-if="label" class="form-label">{{ label }}</label>
        <select
            class="form-field"
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
        >
            <option
                v-for="option in options"
                :value="option"
                :key="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>
