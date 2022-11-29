<script setup>
import { computed } from 'vue'

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        required: false,
        default: '',
    },
    modelValue: {
        type: [String, Number, File],
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
})
defineEmits(['update:modelValue'])
const errorClass = computed(() => {
    return {
        'form-field-error': props.error.length > 1,
    }
})
</script>
<script>
export default {
    inheritAttrs: false,
}
</script>
<template>
    <!-- <div class="form-element">
        <label class="form-label">Text</label>
        <input class="form-field" type="text" placeholder="Enter your name" />
    </div> -->
    <div class="form-element">
        <label v-if="label" class="form-label">{{ label }}</label>
        <input
            class="form-field"
            :class="errorClass"
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            :error="error"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <div v-if="error" class="form-error">
            {{ error }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Hide calendar icon on Chrome/Date Input */
// .cc__form-field[type='date']::-webkit-calendar-picker-indicator {
//     background: none;
// }

/* Hack to remove autofill color on Browser default */
/* .cc__form-field:-webkit-autofill,
.cc__form-field:-webkit-autofill:hover,
.cc__form-field:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-text-fill-color: #667f89;
    @apply border-ao-mid-blue-300;
}
.cc__form-field:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset, 0 0 0 2px #7192a4;
    @apply border-white;
}
.dark .cc__form-field:-webkit-autofill,
.dark .cc__form-field:-webkit-autofill:hover {
    -webkit-box-shadow: 0 0 0px 1000px #0f172a inset;
    @apply border-slate-700;
}
.dark .cc__form-field:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #0f172a inset, 0 0 0 2px #00afbe;
    @apply border-slate-900;
} */
</style>
