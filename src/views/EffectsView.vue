<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoOpacity from '../data/demoOpacity.json'
import demoBoxShadow from '../data/demoBoxShadow.json'
import demoObjectFit from '../data/demoObjectFit.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Effects</h1>
        <p class="mb-28">
            Utilities for controlling the various effects of an element.
        </p>

        <h4 class="mt-44 heading-border">Opacity</h4>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities for controlling and elements opacity.
        </p>
        <BasicTable :tableData="demoOpacity" />

        <h4 class="mt-44 heading-border">Box Shadow</h4>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities for controlling and elements box-shadow.
        </p>
        <BasicTable :tableData="demoBoxShadow" />

        <h4 class="mt-44 heading-border">Object Fit</h4>
        <p class="mb-40 mt-6 text-md leading-relaxed">
            Utilities for controlling how content fits within its container.
        </p>
        <BasicTable :tableData="demoObjectFit" />
    </div>
</template>

<style lang="scss" scoped></style>
