<script setup></script>

<template>
    <div class="w-full">
        <h3 class="heading-border">Flex Column Grid</h3>

        <p>
            The grid is defined by the individual column widths, which are set
            by stating how many columns of the grid you would like to span at
            each breakpoint.
        </p>

        <div class="flex-row flex-gap-8 mt-20">
            <div class="col-12 col-6@lg">
                <p class="card align-center">Span 6</p>
            </div>
            <div class="col-12 col-6@lg">
                <p class="card align-center">Span 6</p>
            </div>
            <div class="col-12 col-4@lg">
                <p class="card align-center">Span 4</p>
            </div>
            <div class="col-12 col-3@lg">
                <p class="card align-center">Span 3</p>
            </div>
            <div class="col-12 col-5@lg">
                <p class="card align-center">Span 5</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
