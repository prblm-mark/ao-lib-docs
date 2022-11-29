<script setup></script>

<template>
    <div class="w-full">
        <h3 class="heading-border">Typography</h3>

        <p>Utilities for controlling the font size of an element.</p>

        <code>
            <span>&lt;</span>
            <span>h1</span>
            <span>></span>

            This is a heading 1
            <span>&lt;/</span>
            <span class="code-highlight">h1</span>
            <span>></span>
        </code>

        <div class="card">
            <div class="flex-row">
                <div class="col-12 col-6@lg">
                    <h1 class="mb-10">Heading 1</h1>
                    <h2 class="mb-10">Heading 2</h2>
                    <h3 class="mb-10">Heading 3</h3>
                    <h4 class="mb-10">Heading 4</h4>
                    <h5 class="mb-10">Heading 5</h5>
                    <h6 class="mb-12">Heading 6</h6>
                </div>

                <div class="col-12 col-6@lg">
                    <p class="mb-6">Normal Text</p>
                    <p class="mb-6"><strong>Bold Text</strong></p>
                    <p class="mb-12"><a href="#">Link</a></p>

                    <p class="txt-md mb-6">Medium Text</p>
                    <p class="txt-md mb-12"><strong>Medium Bold</strong></p>

                    <p class="txt-sm mb-6">Small Text</p>
                    <p class="txt-sm mb-12"><strong>Small Bold</strong></p>

                    <p class="txt-xs mb-6">XSmall Text</p>
                    <p class="txt-xs mb-12"><strong>XSmall Bold</strong></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
