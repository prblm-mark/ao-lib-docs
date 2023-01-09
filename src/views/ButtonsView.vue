<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import TertiaryButton from '@/components/buttons/TertiaryButton.vue'
import IconSmChevronLeft from '@/components/icons/IconSmChevronLeft.vue'
import IconSmChevronDown from '@/components/icons/IconSmChevronDown.vue'
import IconCircleArrowRight from '@/components/icons/IconCircleArrowRight.vue'
import IconSmCircleArrowDown from '@/components/icons/IconSmCircleArrowDown.vue'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Buttons</h1>

        <p class="mb-28">
            We have three predominent buttons styles; <strong>Primary</strong>,
            <strong>Secondary</strong>, and <strong>Tertiary</strong>.
        </p>

        <div class="flex mb-sm">
            <PrimaryButton class="mr-6">Primary</PrimaryButton>
            <SecondaryButton class="mr-6">Secondary</SecondaryButton>
            <TertiaryButton class="mr-6">Tertiary</TertiaryButton>
        </div>

        <h4 class="mt-44 heading-border">Basic Usage</h4>
        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>btn-primary</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn-primary()
                </SnippetSASS>
            </div>
        </div>
        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>btn-secondary</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn-secondary()
                </SnippetSASS>
            </div>
        </div>
        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>btn-tertiary</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn-tertiary()
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Large</h4>
        <p class="mb-32 mt-6 text-md leading-relaxed">
            Buttons can be made large by adding the following class/include.
        </p>

        <div class="flex mb-sm">
            <PrimaryButton large class="mr-6">Primary</PrimaryButton>
            <SecondaryButton large class="mr-6">Secondary</SecondaryButton>
            <TertiaryButton large class="mr-6">Tertiary</TertiaryButton>
        </div>

        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>btn-tertiary btn-lg</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn-lg()
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Small</h4>
        <p class="mb-32 mt-6 text-md leading-relaxed">
            Buttons can be made small by adding the following class/include.
        </p>

        <div class="flex mb-sm">
            <PrimaryButton small class="mr-6">Primary</PrimaryButton>
            <SecondaryButton small class="mr-6">Secondary</SecondaryButton>
            <TertiaryButton small class="mr-6">Tertiary</TertiaryButton>
        </div>

        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>btn-primary btn-sm</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn-sm()
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Full width</h4>
        <p class="mb-32 mt-6 text-md leading-relaxed">
            Buttons by default are sized with a fixed padding, however they can
            be made full width by adding the following class/include.
        </p>

        <div class="flex mb-sm">
            <PrimaryButton full class="mr-6">Primary</PrimaryButton>
        </div>

        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>btn-primary btn-full</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    w('full')
                </SnippetSASS>
            </div>
        </div>

        <h3 class="mt-44 heading-border">Icons</h3>
        <p class="mb-32 mt-6 text-md leading-relaxed">
            Icons can be added to buttons by inserting a span tag inside the
            parent element. They can be added either left, or right. For
            <strong>standard buttons</strong>, only icons with
            <span class="code-highlight">20px</span> width/height should be
            applied. <strong>Large buttons</strong> can have icons with
            <span class="code-highlight">24px</span> width/height, as
            highlighted below.
            <strong>No icons should be added to small icons</strong>
        </p>

        <div class="flex mb-sm">
            <PrimaryButton class="mr-6">
                <template #iconLeft>
                    <IconSmCircleArrowDown />
                </template>
                Small Icon
            </PrimaryButton>

            <PrimaryButton large class="mr-6">
                <template #iconLeft>
                    <IconCircleArrowRight />
                </template>
                Large Icon
            </PrimaryButton>

            <PrimaryButton class="mr-6">
                <template #iconRight>
                    <IconSmCircleArrowDown />
                </template>
                Small Icon
            </PrimaryButton>

            <PrimaryButton large class="mr-6">
                <template #iconRight>
                    <IconCircleArrowRight />
                </template>
                Large Icon
            </PrimaryButton>
        </div>

        <h4 class="mt-44 heading-border">Icon Left</h4>

        <div class="flex mb-sm">
            <PrimaryButton class="mr-6">
                <template #iconLeft>
                    <IconSmChevronLeft />
                </template>
                Icon Left
            </PrimaryButton>
        </div>
        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>span</template>
                    <template #class>btn-icon-left</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn-icon-left()
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Icon Right</h4>

        <div class="flex mb-sm">
            <PrimaryButton class="mr-6">
                <template #iconRight>
                    <IconSmChevronDown />
                </template>
                Icon Right
            </PrimaryButton>
        </div>
        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>span</template>
                    <template #class>btn-icon-right</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn-icon-right()
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Custom Colours</h4>
        <p class="mb-32 mt-6 text-md leading-relaxed">
            Custom colours can be applied to a button, but
            <strong>note</strong> these are fixed across both light and dark
            theme. The hover colour is a sass function which darkens the
            specified colour. In addition you will need to add your preferred
            text colour, as this utility only styles the button with a
            background colour.
            <strong>See the colours section for more info.</strong>
        </p>
        <div class="flex mb-sm">
            <div class="btn-red-500 text-white">Custom Button</div>
        </div>
        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>btn-red-500</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    btn(getColor('red', 500))
                </SnippetSASS>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
