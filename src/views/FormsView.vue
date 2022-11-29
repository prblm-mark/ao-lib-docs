<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/form/BaseInput.vue'
import formSelectOptions from '@/data/formSelectOptions'
import BaseSelect from '../components/form/BaseSelect.vue'
import BaseRadioGroup from '../components/form/BaseRadioGroup.vue'
import BaseCheckbox from '../components/form/BaseCheckbox.vue'

const inputText = ref('')
const inputDate = ref('')
const inputDisabled = ref('')
const inputNumber = ref('')
const inputEmail = ref('')
const inputSelect = ref('Default Option')
const inputRadio = ref(1)
const radioOptions = ref([
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
])
const inputCheckbox = ref()
const error = ref('')

const handleChange = (e) => {
    // Create a dummy error if 'error' is typed
    const result = e.target.value
    result.toLowerCase()
    result === 'error'
        ? (error.value = 'This is some error text')
        : (error.value = '')
}
</script>

<template>
    <div class="w-full">
        <h3 class="heading-border">Form Elements</h3>

        <div class="card">
            <div class="flex-row flex-gap-8">
                <div class="col-12 col-6@md col-4@lg">
                    <BaseInput
                        :v-model="inputText"
                        label="Text Input"
                        type="text"
                        placeholder="Enter your name"
                        :error="error"
                        @change="handleChange"
                    >
                    </BaseInput>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <BaseInput
                        :v-model="inputDate"
                        label="Datepicker"
                        type="date"
                        :error="error"
                        @change="handleChange"
                    >
                    </BaseInput>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <BaseInput
                        :v-model="inputDisabled"
                        label="Disabled Input"
                        type="text"
                        disabled
                        placeholder="This is disabled"
                        :error="error"
                        @change="handleChange"
                    >
                    </BaseInput>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <BaseInput
                        :v-model="inputEmail"
                        label="Email Input"
                        type="email"
                        placeholder="Enter your email"
                        :error="error"
                        @change="handleChange"
                    >
                    </BaseInput>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <BaseInput
                        :v-model="inputNumber"
                        label="Number Input"
                        type="number"
                        placeholder="Enter age"
                        :error="error"
                        @change="handleChange"
                    >
                    </BaseInput>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <BaseSelect
                        :modelValue="inputSelect"
                        :options="formSelectOptions"
                        label="Basic Select"
                        @change="handleChange"
                    >
                    </BaseSelect>
                </div>
                <div class="col-12 col-6@md col-8@lg grid-col-flow-2">
                    <BaseRadioGroup
                        :modelValue="inputRadio"
                        :options="radioOptions"
                        :name="inputRadio"
                    >
                    </BaseRadioGroup>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <BaseCheckbox
                        :modelValue="inputCheckbox"
                        label="Checkbox"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
