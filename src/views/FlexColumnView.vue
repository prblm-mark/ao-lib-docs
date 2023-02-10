<script setup>
import BaseInput from '../components/form/BaseInput.vue'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Flex Column Grid</h1>
        <p class="text-md leading-relaxed">
            The grid is defined by the individual column width, which is set by
            defining how many columns of the 12 column grid you would like to
            span at each breakpoint. For example
            <span class="code-highlight">.col-6</span> is 6 columns of a 12
            column grid. <br /><strong>NOTE: </strong> The columns must be
            wrapped in a parent element and given the following class
            <span class="code-highlight">.flex-row</span>. You can add an
            optional class for the gap i.e
            <span class="code-highlight">.flex-gap-8</span>
        </p>

        <div class="flex-row flex-gap-8 mt-20 mb-40 card">
            <div class="col-6">
                <BaseInput type="text" placeholder="Name"> </BaseInput>
            </div>
            <div class="col-6">
                <BaseInput type="text" placeholder="Age"> </BaseInput>
            </div>
        </div>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>col-6</template>
                    Content here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    flex-col(6)
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Responsive Columns</h4>
        <p class="mb-28 mt-6 text-md leading-relaxed">
            The example grid above is defined to be a 2 column grid across all
            breakpoints. You can create a responsive grid by defining the
            preferred column quantity for each screen size.
        </p>
        <div class="flex-row flex-gap-8 mt-20 mb-40 card">
            <div class="col-12 col-4@lg">
                <BaseInput type="text" placeholder="Name"> </BaseInput>
            </div>
            <div class="col-12 col-4@lg">
                <BaseInput type="text" placeholder="Age"> </BaseInput>
            </div>
            <div class="col-12 col-4@lg">
                <BaseInput type="text" placeholder="Location"> </BaseInput>
            </div>
        </div>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>cols-12 cols-4@lg</template>
                    Content here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    <template #breakpoint>lg</template>
                    <template #nested>flex-cols(4)</template>
                    flex-cols(12)
                </SnippetSASS>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
