<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoDisplay from '../data/demoDisplay.json'
import demoJustifyContent from '../data/demoJustifyContent.json'
import demoAlignItems from '../data/demoAlignItems.json'
import demoAlignContent from '../data/demoAlignContent.json'
import demoFlexWrap from '../data/demoFlexWrap.json'
import demoFlexDirection from '../data/demoFlexDirection.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Display</h1>

        <p class="mb-28">
            Utilities for controlling the display property, and related
            properties.
        </p>
        <BasicTable :tableData="demoDisplay" />

        <h2 class="mt-44 heading-border">Flex utilities</h2>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities relating to the
            <span class="code-highlight">display: flex;</span>property.
        </p>

        <h4 class="mt-44 heading-border">Justify Content</h4>
        <BasicTable :tableData="demoJustifyContent" />

        <h4 class="mt-44 heading-border">Align Items</h4>
        <BasicTable :tableData="demoAlignItems" />

        <h4 class="mt-44 heading-border">Align Content</h4>
        <BasicTable :tableData="demoAlignContent" />

        <h4 class="mt-44 heading-border">Flex Wrap</h4>
        <BasicTable :tableData="demoFlexWrap" />

        <h4 class="mt-44 heading-border">Flex Direction</h4>
        <BasicTable :tableData="demoFlexDirection" />
    </div>
</template>

<style lang="scss" scoped></style>
