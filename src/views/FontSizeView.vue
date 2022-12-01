<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoFontSizes from '../data/demoFontSizes.json'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Font Sizes</h1>

        <p class="mb-28">
            Utilities for controlling the font size of an element.
        </p>

        <BasicTable :tableData="demoFontSizes" />

        <h4 class="mt-44 heading-border">Basic Usage</h4>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities can be applied to an element via a class, for example
            <span class="code-highlight">.fs-sm</span>, or as a mixin to a
            class/id <span class="code-highlight">@include fs('sm');</span>.
        </p>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>p</template>
                    <template #class>fs-sm</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    fs('sm')
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
                    <template #class>fs-sm fs-md@lg</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    <template #breakpoint>lg</template>
                    <template #nested>fs('md')</template>
                    fs('sm')
                </SnippetSASS>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
