<script setup>
import BreakpointsTable from '../components/tables/BreakpointsTable.vue'
import demoBreakpoints from '../data/demoBreakpoints.json'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Breakpoints</h1>

        <p class="mb-28">
            The framework is mobile first, and then there are 5 core
            breakpoints;
            <span class="code-highlight">sm, md, lg, xl, xxl</span>They can be
            applied to a class name, by appending the breakpoint to the class
            name. They can also be applied via sass, with an include. Naturally
            the higher screen size overwrites the lower size, as is the nature
            of mobile first.
        </p>

        <BreakpointsTable :tableData="demoBreakpoints" />

        <p class="mb-40 mt-24 text-md leading-relaxed">
            Screen size utilities can be applied via a class via appending the
            required screen size, or via sass with nested mixins, as per the
            example below.
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
