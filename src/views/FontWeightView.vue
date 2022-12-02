<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoFontWeights from '../data/demoFontWeights.json'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Font Weights</h1>

        <p class="mb-28">
            Utilities for controlling the font weight of an element.
        </p>

        <BasicTable :tableData="demoFontWeights" />

        <h4 class="mt-44 heading-border">Basic Usage</h4>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities can be applied to an element via a class, for example
            <span class="code-highlight">.fw-500</span>, or as a mixin to a
            class/id <span class="code-highlight">@include fw('500');</span>.
        </p>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>p</template>
                    <template #class>fw-500</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    fw('500')
                </SnippetSASS>
            </div>
        </div>

        <!-- Responsive usage -->
        <h4 class="mt-44 heading-border">Responsive Usage</h4>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities can also be applied at all the predefined
            <strong>breakpoints</strong> too. As the framework is mobile first,
            the utility classes and mixins need to be applied with the
            breakpoint size. More examples can be found in the
            <strong>breakpoints</strong>
            section.
        </p>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>p</template>
                    <template #class>fw-500 fw-700@lg</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    <template #breakpoint>lg</template>
                    <template #nested>fw('700')</template>
                    fw('500')
                </SnippetSASS>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
