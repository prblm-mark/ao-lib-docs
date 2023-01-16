<script setup>
import BaseInput from '../components/form/BaseInput.vue'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
import PrimaryButton from '../components/buttons/PrimaryButton.vue'
import SecondaryButton from '../components/buttons/SecondaryButton.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Grid</h1>

        <p>
            The grid system utility is primarily just to enable the creation of
            a column based grid, for example a 2 column grid as per below.
        </p>

        <div class="card mt-32 mb-40 grid grid-cols-1 grid-cols-2 grid-gap-12">
            <BaseInput type="text" placeholder="Name"> </BaseInput>
            <BaseInput type="text" placeholder="Age"> </BaseInput>
        </div>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>grid-cols-2</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    grid-cols(2)
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Responsive Grid</h4>
        <p class="mb-28 mt-6 text-md leading-relaxed">
            The example grid above is defined to be a 2 column grid across all
            breakpoints. You can create a responsive grid by defining the
            preferred column quantity for each screen size.
        </p>

        <div
            class="card mt-32 mb-40 grid grid-cols-1 grid-cols-2@sm grid-cols-3@md grid-cols-4@lg grid-gap-12"
        >
            <BaseInput type="text" placeholder="Name"> </BaseInput>
            <BaseInput type="text" placeholder="Age"> </BaseInput>
            <BaseInput type="text" placeholder="Gender"> </BaseInput>
            <BaseInput type="text" placeholder="Location"> </BaseInput>
        </div>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>grid-cols-2 grid-cols-4@lg</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    <template #breakpoint>lg</template>
                    <template #nested>grid-cols(4)</template>
                    grid-cols(2)
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Responsive Grid Flow Utility</h4>
        <p class="mb-28 mt-6 text-md leading-relaxed">
            We also provide a grid flow mixin to expedite the process. For
            example a common pattern such as
            <span class="code-highlight">.grid-col-flow-1234</span> can be
            created on the fly for reuse, or simply add the mixing to a
            new/existing class. The mixin only requires 1 param(for the mobile
            screen), all additional sizes (sm|md|lg) are optional.
            <strong>Remember</strong>
            the framework is mobile first!
        </p>

        <div class="card mt-32 mb-40 grid-col-flow-1234 grid-gap-12">
            <BaseInput type="text" placeholder="Name"> </BaseInput>
            <BaseInput type="text" placeholder="Age"> </BaseInput>
            <BaseInput type="text" placeholder="Gender"> </BaseInput>
            <BaseInput type="text" placeholder="Location"> </BaseInput>
        </div>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>grid-cols-flow-1234</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    grid-col-flow(1,2,3,4)
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">A common use case</h4>
        <p class="mb-28 mt-6 text-md leading-relaxed">
            The grid col flow utility applied to filters.
        </p>

        <div class="flex flex-wrap flex-nowrap@lg justify-end@md card mb-40">
            <div class="w-full grid-col-flow-1234">
                <BaseInput
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                >
                </BaseInput>
                <BaseInput
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                >
                </BaseInput>
                <BaseInput
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                >
                </BaseInput>
                <BaseInput
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                >
                </BaseInput>
                <BaseInput
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
                >
                </BaseInput>
                <BaseInput
                    label="Text Input"
                    type="text"
                    placeholder="Enter your name"
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
