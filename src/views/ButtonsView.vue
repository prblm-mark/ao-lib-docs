<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import TertiaryButton from '@/components/buttons/TertiaryButton.vue'
import IconSmChevronLeft from '@/components/icons/IconSmChevronLeft.vue'
import IconSmChevronDown from '@/components/icons/IconSmChevronDown.vue'
import IconCircleArrowDown from '@/components/icons/IconCircleArrowDown.vue'
import IconCircleArrowRight from '@/components/icons/IconCircleArrowRight.vue'
import IconSmCircleArrowDown from '@/components/icons/IconSmCircleArrowDown.vue'
import IconSmCircleArrowRight from '@/components/icons/IconSmCircleArrowRight.vue'
</script>

<template>
    <h3 class="heading-border mt-xl">Buttons</h3>

    <p class="txt-md mb-12"><strong>Standard</strong></p>

    <div class="flex mb-sm">
        <PrimaryButton class="mr-6">Primary</PrimaryButton>

        <PrimaryButton class="mr-6">
            <template #iconLeft>
                <IconSmChevronLeft />
            </template>
            Icon Left
        </PrimaryButton>

        <PrimaryButton class="mr-6">
            <template #iconRight>
                <IconSmChevronDown />
            </template>
            Icon Right
        </PrimaryButton>
    </div>

    <div class="flex mb-sm">
        <SecondaryButton class="mr-6">Secondary</SecondaryButton>

        <SecondaryButton class="mr-6">
            <template #iconLeft>
                <IconCircleArrowRight />
            </template>
            Icon Left
        </SecondaryButton>

        <SecondaryButton class="mr-6">
            <template #iconRight>
                <IconCircleArrowDown />
            </template>
            Icon Right
        </SecondaryButton>
    </div>

    <div class="flex mb-lg">
        <TertiaryButton class="mr-6">Tertiary</TertiaryButton>

        <TertiaryButton class="mr-6">
            <template #iconLeft>
                <IconSmChevronLeft />
            </template>
            Icon Left
        </TertiaryButton>

        <TertiaryButton class="mr-6">
            <template #iconRight>
                <IconSmChevronDown />
            </template>
            Icon Right
        </TertiaryButton>
    </div>

    <p class="txt-md mb-12"><strong>Small</strong></p>
    <div class="flex mb-sm">
        <PrimaryButton class="mr-6" small>Small Primary</PrimaryButton>

        <PrimaryButton class="mr-6" small>
            <template #iconLeft>
                <IconSmChevronLeft />
            </template>
            Icon Left
        </PrimaryButton>

        <PrimaryButton class="mr-6" small>
            <template #iconRight>
                <IconSmChevronDown />
            </template>
            Icon Right
        </PrimaryButton>
    </div>

    <div class="flex mb-sm">
        <SecondaryButton class="mr-6" small> Small Secondary </SecondaryButton>

        <SecondaryButton class="mr-6" small>
            <template #iconLeft>
                <IconSmCircleArrowRight />
            </template>
            Icon Left
        </SecondaryButton>

        <SecondaryButton class="mr-6" small>
            <template #iconRight>
                <IconSmCircleArrowDown />
            </template>
            Icon Right
        </SecondaryButton>
    </div>

    <div class="flex mb-lg">
        <TertiaryButton class="mr-6" small>Small Tertiary</TertiaryButton>

        <TertiaryButton class="mr-6" small>
            <template #iconLeft>
                <IconSmChevronLeft />
            </template>
            Icon Left
        </TertiaryButton>

        <TertiaryButton class="mr-6" small>
            <template #iconRight>
                <IconSmChevronDown />
            </template>
            Icon Right
        </TertiaryButton>
    </div>

    <p class="txt-md mb-12"><strong>Extra Small</strong> (No Icon Allowed)</p>
    <div class="flex mb-sm">
        <PrimaryButton class="mr-6" xsmall>Primary</PrimaryButton>
        <SecondaryButton class="mr-6" xsmall>Secondary</SecondaryButton>
        <TertiaryButton class="mr-6" xsmall>Tertiary</TertiaryButton>
    </div>
</template>

<style lang="scss" scoped></style>
