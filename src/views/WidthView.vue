<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoWidth from '../data/demoWidth.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Width</h1>
        <p class="mb-28">You can find all the utilities for widths below.</p>
        <BasicTable :tableData="demoWidth" />
    </div>
</template>

<style lang="scss" scoped></style>
