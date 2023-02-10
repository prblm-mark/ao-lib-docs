<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoHeight from '../data/demoHeight.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Height</h1>
        <p class="mb-28">You can find all the utilities for height below.</p>
        <BasicTable :tableData="demoHeight" />
    </div>
</template>

<style lang="scss" scoped></style>
