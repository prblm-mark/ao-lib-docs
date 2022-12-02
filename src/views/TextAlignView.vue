<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoTextAlign from '../data/demoTextAlign.json'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Text Align</h1>

        <p class="mb-28">
            Utilities for controlling the text alignment of an element.
        </p>

        <BasicTable :tableData="demoTextAlign" />

        <h4 class="mt-44 heading-border">Basic Usage</h4>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities can be applied to an element via a class, for example
            <span class="code-highlight">.align-left</span>, or as a mixin to a
            class/id
            <span class="code-highlight">@include align('left');</span>.
        </p>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>p</template>
                    <template #class>align-left</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    align('left')
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
                    <template #class>align-left align-center@lg</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    <template #breakpoint>lg</template>
                    <template #nested>align('center')</template>
                    align('left')
                </SnippetSASS>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
