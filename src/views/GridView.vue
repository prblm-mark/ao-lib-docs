<script setup>
import BaseInput from '../components/form/BaseInput.vue'
</script>

<template>
    <div class="w-full">
        <h3 class="heading-border">Grid</h3>

        <p>
            The grid column quantity is set by defining the column structure on
            the parent element i.e <code>grid-cols-2</code>.<br />
            The structure can be changed at each individual screen size i.e
            <code>grid-cols-4@lg</code>
        </p>

        <div
            class="card mt-32 mb-40 grid grid-cols-1 grid-cols-2@sm grid-cols-3@md grid-cols-4@lg grid-gap-12"
        >
            <BaseInput type="text" placeholder="Name"> </BaseInput>
            <BaseInput type="text" placeholder="Age"> </BaseInput>
            <BaseInput type="text" placeholder="Gender"> </BaseInput>
            <BaseInput type="text" placeholder="Location"> </BaseInput>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
