<script setup></script>

<template>
    <div class="stat">
        <div class="stat-icon">
            <slot name="icon" />
        </div>
        <div>
            <h6><slot name="stat" /></h6>
            <h3><slot name="data" /></h3>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
