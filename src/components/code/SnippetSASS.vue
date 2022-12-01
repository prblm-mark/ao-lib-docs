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

        <!-- Breakpoint mixin -->
        <span v-if="$slots.breakpoint" class="pl-40 block">
            <span class="code-syntax"> <slot name="syntax" /></span>
            <span class="code-selector"> <slot name="breakpoint" /></span>
            <span class="code-markup pl-4">{</span><br />

            <!-- Nested mixin -->
            <span class="pl-20 block">
                <span class="code-syntax nested"> <slot name="syntax" /></span>

                <span class="code-selector nested-selector">
                    <slot name="nested"
                /></span>
                <span class="code-markup">;</span><br />
            </span>

            <span class="code-markup">}</span><br />
        </span>

        <span class="code-markup">}</span>
    </div>
</template>

<style lang="scss" scoped></style>
