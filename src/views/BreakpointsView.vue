<script setup>
import BreakpointsTable from '../components/tables/BreakpointsTable.vue'
import demoBreakpoints from '../data/demoBreakpoints.json'
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
    </div>
</template>

<style lang="scss" scoped></style>
