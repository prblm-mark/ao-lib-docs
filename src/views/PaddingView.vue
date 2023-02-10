<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoPadding from '../data/demoPadding.json'
import demoPaddingLeft from '../data/demoPaddingLeft.json'
import demoPaddingTop from '../data/demoPaddingTop.json'
import demoPaddingRight from '../data/demoPaddingRight.json'
import demoPaddingBottom from '../data/demoPaddingBottom.json'
import demoPaddingTopBottom from '../data/demoPaddingTopBottom.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Padding</h1>
        <p class="mb-28">
            You can find all the utilities for all padding below.
        </p>
        <BasicTable :tableData="demoPadding" />

        <h4 class="mt-44 heading-border">Padding Left</h4>
        <BasicTable :tableData="demoPaddingLeft" />

        <h4 class="mt-44 heading-border">Padding Top</h4>
        <BasicTable :tableData="demoPaddingTop" />

        <h4 class="mt-44 heading-border">Padding Right</h4>
        <BasicTable :tableData="demoPaddingRight" />

        <h4 class="mt-44 heading-border">Padding Bottom</h4>
        <BasicTable :tableData="demoPaddingBottom" />

        <h4 class="mt-44 heading-border">Padding Top & Bottom</h4>
        <BasicTable :tableData="demoPaddingTopBottom" />
    </div>
</template>

<style lang="scss" scoped></style>
