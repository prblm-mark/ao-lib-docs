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
    <div class="w-full">
        <h3 class="heading-border">Buttons</h3>

        <div class="card mb-lg">
            <p class="txt-md mb-12"><strong>Large</strong></p>

            <div class="flex mb-sm">
                <PrimaryButton large class="mr-6">Primary</PrimaryButton>

                <PrimaryButton large class="mr-6">
                    <template #iconLeft>
                        <IconSmChevronLeft />
                    </template>
                    Icon Left
                </PrimaryButton>

                <PrimaryButton large class="mr-6">
                    <template #iconRight>
                        <IconSmChevronDown />
                    </template>
                    Icon Right
                </PrimaryButton>
            </div>

            <div class="flex mb-sm">
                <SecondaryButton large class="mr-6">Secondary</SecondaryButton>

                <SecondaryButton large class="mr-6">
                    <template #iconLeft>
                        <IconCircleArrowRight />
                    </template>
                    Icon Left
                </SecondaryButton>

                <SecondaryButton large class="mr-6">
                    <template #iconRight>
                        <IconCircleArrowDown />
                    </template>
                    Icon Right
                </SecondaryButton>
            </div>

            <div class="flex">
                <TertiaryButton large class="mr-6">Tertiary</TertiaryButton>

                <TertiaryButton large class="mr-6">
                    <template #iconLeft>
                        <IconSmChevronLeft />
                    </template>
                    Icon Left
                </TertiaryButton>

                <TertiaryButton large class="mr-6">
                    <template #iconRight>
                        <IconSmChevronDown />
                    </template>
                    Icon Right
                </TertiaryButton>
            </div>
        </div>

        <div class="card mb-lg">
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
                <SecondaryButton class="mr-6"> Secondary </SecondaryButton>

                <SecondaryButton class="mr-6">
                    <template #iconLeft>
                        <IconSmCircleArrowRight />
                    </template>
                    Icon Left
                </SecondaryButton>

                <SecondaryButton class="mr-6">
                    <template #iconRight>
                        <IconSmCircleArrowDown />
                    </template>
                    Icon Right
                </SecondaryButton>
            </div>

            <div class="flex">
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
        </div>

        <div class="card">
            <p class="txt-md mb-12"><strong>Small</strong> (No Icon Allowed)</p>
            <div class="flex">
                <PrimaryButton class="mr-6" small>Primary</PrimaryButton>
                <SecondaryButton class="mr-6" small>Secondary</SecondaryButton>
                <TertiaryButton class="mr-6" small>Tertiary</TertiaryButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
