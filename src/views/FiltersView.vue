<script setup>
import BaseInput from '../components/form/BaseInput.vue'
import PrimaryButton from '../components/buttons/PrimaryButton.vue'
import SecondaryButton from '../components/buttons/SecondaryButton.vue'
</script>

<template>
    <div class="w-full">
        <h3 class="heading-border">Filters (Fixed Actions)</h3>

        <div class="flex flex-wrap flex-nowrap@lg justify-end@md card mb-40">
            <div class="w-full grid-col-flow-1234">
                <BaseInput
                    :v-model="inputText"
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                    :error="error"
                    @change="handleChange"
                >
                </BaseInput>
                <BaseInput
                    :v-model="inputText"
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                    :error="error"
                    @change="handleChange"
                >
                </BaseInput>
                <BaseInput
                    :v-model="inputText"
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                    :error="error"
                    @change="handleChange"
                >
                </BaseInput>
                <BaseInput
                    :v-model="inputText"
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                    :error="error"
                    @change="handleChange"
                >
                </BaseInput>
                <BaseInput
                    :v-model="inputText"
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                    :error="error"
                    @change="handleChange"
                >
                </BaseInput>
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
            <div
                class="grid-col-flow-2 grid-rows-2@lg row-gap-12@lg col-gap-6@lg items-end@lg w-full w-10xl@md mt-12 mt-0@lg ml-12@lg"
            >
                <PrimaryButton>Apply</PrimaryButton>
                <SecondaryButton>Cancel</SecondaryButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
