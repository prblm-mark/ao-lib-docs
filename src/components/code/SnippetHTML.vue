<script setup></script>

<template>
    <div class="code">
        <span class="code-pill">HTML</span>
        <span class="code-markup">&lt;</span>
        <span class="code-selector"><slot name="tag" /></span>

        <span v-if="$slots.class">
            <span class="code-class pl-8">class</span>
            <span class="code-markup">="</span>
            <span class="code-selector"><slot name="class" /></span>
            <span class="code-markup">"</span>
        </span>
        <span class="code-markup">></span>
        <span class="code-content"><slot /></span>
        <span class="code-markup">&lt;/</span>
        <span class="code-selector"><slot name="tag" /></span>
        <span class="code-markup">></span>
    </div>
</template>

<style lang="scss" scoped></style>
