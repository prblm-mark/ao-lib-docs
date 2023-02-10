<script setup>
import BasicTable from '../components/tables/BasicTable.vue'
import demoBorder from '../data/demoBorder.json'
import demoBorderLeft from '../data/demoBorderLeft.json'
import demoBorderTop from '../data/demoBorderTop.json'
import demoBorderRight from '../data/demoBorderRight.json'
import demoBorderBottom from '../data/demoBorderBottom.json'
import demoBorderStyle from '../data/demoBorderStyle.json'
import demoBorderLeftStyle from '../data/demoBorderLeftStyle.json'
import demoBorderRightStyle from '../data/demoBorderRightStyle.json'
import demoBorderTopStyle from '../data/demoBorderTopStyle.json'
import demoBorderBottomStyle from '../data/demoBorderBottomStyle.json'
import demoBorderColor from '../data/demoBorderColor.json'
import demoBorderRadius from '../data/demoBorderRadius.json'
</script>

<template>
    <div class="w-full mb-40">
        <h1 class="heading-border">Borders</h1>

        <p class="mb-28">
            Utilities for controlling the width, style and color of an elements
            border.
        </p>
        <BasicTable :tableData="demoBorder" />

        <h4 class="mt-44 heading-border">Border Left</h4>
        <BasicTable :tableData="demoBorderLeft" />

        <h4 class="mt-44 heading-border">Border Top</h4>
        <BasicTable :tableData="demoBorderTop" />

        <h4 class="mt-44 heading-border">Border Right</h4>
        <BasicTable :tableData="demoBorderRight" />

        <h4 class="mt-44 heading-border">Border Bottom</h4>
        <BasicTable :tableData="demoBorderBottom" />

        <h2 class="mt-44 heading-border">Border Style</h2>
        <p class="text-md mb-28">Utilities for controlling the border style.</p>
        <BasicTable :tableData="demoBorderStyle" />

        <h4 class="mt-44 heading-border">Border Left Style</h4>
        <BasicTable :tableData="demoBorderLeftStyle" />

        <h4 class="mt-44 heading-border">Border Top Style</h4>
        <BasicTable :tableData="demoBorderTopStyle" />

        <h4 class="mt-44 heading-border">Border Right Style</h4>
        <BasicTable :tableData="demoBorderRightStyle" />

        <h4 class="mt-44 heading-border">Border Bottom Style</h4>
        <BasicTable :tableData="demoBorderBottomStyle" />

        <h2 class="mt-44 heading-border">Border Color</h2>
        <p class="text-md mb-28">
            Utilities for controlling the border color. The
            <span class="code-highlight">xxx</span> should be replaced by any
            color from the full color palette.
        </p>
        <BasicTable :tableData="demoBorderColor" />

        <h2 class="mt-44 heading-border">Border Radius</h2>
        <p class="text-md mb-28">
            Utilities for controlling the border radius.
        </p>
        <BasicTable :tableData="demoBorderRadius" />
    </div>
</template>

<style lang="scss" scoped></style>
