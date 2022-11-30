<script setup></script>

<template>
    <div class="code">
        <span class="code-pill">SASS</span>
        <span class="code-markup">.</span>
        <span class="code-class">some-class </span>
        <span class="code-markup">{</span><br />
        <span class="code-syntax pl-20"> <slot name="syntax" /></span>
        <span class="code-selector"> <slot /></span>
        <span class="code-markup">;</span><br />
        <span class="code-markup">}</span>
    </div>
</template>

<style lang="scss" scoped></style>
