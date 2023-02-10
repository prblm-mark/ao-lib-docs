<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoMargin from '../data/demoMargin.json'
import demoMarginLeft from '../data/demoMarginLeft.json'
import demoMarginTop from '../data/demoMarginTop.json'
import demoMarginRight from '../data/demoMarginRight.json'
import demoMarginBottom from '../data/demoMarginBottom.json'
import demoMarginTopBottom from '../data/demoMarginTopBottom.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Margin</h1>
        <p class="mb-28">
            You can find all the utilities for all margins below.
        </p>
        <BasicTable :tableData="demoMargin" />

        <h4 class="mt-44 heading-border">Margin Left</h4>
        <BasicTable :tableData="demoMarginLeft" />

        <h4 class="mt-44 heading-border">Margin Top</h4>
        <BasicTable :tableData="demoMarginTop" />

        <h4 class="mt-44 heading-border">Margin Right</h4>
        <BasicTable :tableData="demoMarginRight" />

        <h4 class="mt-44 heading-border">Margin Bottom</h4>
        <BasicTable :tableData="demoMarginBottom" />

        <h4 class="mt-44 heading-border">Margin Top & Bottom</h4>
        <BasicTable :tableData="demoMarginTopBottom" />
    </div>
</template>

<style lang="scss" scoped></style>
