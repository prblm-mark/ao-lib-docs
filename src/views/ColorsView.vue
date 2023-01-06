<script setup>
import ThemeColor from '../components/colors/ThemeColor.vue'
import ThemeColors from '../data/demoThemeColors.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Theme Colors</h1>

        <p class="mb-40 mt-6 text-md leading-relaxed">
            Theme colors work seemlessly between light and dark mode, they are
            applied to a selector as a css variable, for example
            <span class="code-highlight">color: var(--page-bg-color);</span>.
        </p>

        <div class="grid grid-gap-12 grid-cols-2 grid-cols-4@md">
            <ThemeColor
                v-for="color in ThemeColors"
                :key="color.name"
                :color-name="color.name"
                :color="color.color"
                :border="color.border"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.color {
    @include display('flex');
    @include justify('center');
    @include flex-wrap('wrap');
    @include content('start');
}
</style>
