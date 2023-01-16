<script setup>
import colourPalette from '@/data/demoColourPalette.json'
import ColourRange from '@/components/colors/ColorRange.vue'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Color Palette</h1>

        <p class="mb-28 mt-6 text-md leading-relaxed">
            The full colour palette for the new control center theme.
        </p>

        <div class="card">
            <ColourRange
                v-for="(colourRange, index) in colourPalette"
                :colourRange="colourRange"
                :key="index"
            />
        </div>

        <h4 class="mt-44 heading-border">Text Color Application</h4>
        <p class="mb-28 mt-6 text-md leading-relaxed">
            The full color palette can be applied as a text color.
            <strong>Note: </strong> This is fixed across both light, and dark
            themes.
        </p>

        <div class="card mb-32">
            <p class="text-pink-600"><strong>Custom Text Color</strong></p>
        </div>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>p</template>
                    <template #class>text-pink-600</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>color:</template>
                    getColor('pink', 600)
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Background Color Application</h4>
        <p class="mb-28 mt-6 text-md leading-relaxed">
            The full color palette can also be applied as a background color.
            <strong>Note: </strong> This is fixed across both light, and dark
            themes.
        </p>

        <div class="card mb-32">
            <p class="text-white bg-pink-600 p-14 align-center">
                <strong>Custom Background Color</strong>
            </p>
        </div>

        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>p</template>
                    <template #class>bg-pink-600 ...</template>
                    Some text here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>background-color:</template>
                    getColor('pink', 600)
                </SnippetSASS>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
