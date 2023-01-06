<script setup>
const props = defineProps({
    colorName: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    border: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <div class="color card">
        <div
            class="w-full h-2xl rounded-sm mb-6"
            :style="{ backgroundColor: color, border: border }"
        ></div>
        <p class="title fs-xs fw-500 align-center w-full">
            {{ props.colorName }}
        </p>
        <p class="fs-xxs fw-500 align-center w-full">{{ props.color }}</p>
    </div>
</template>

<style lang="scss" scoped>
.color {
    @include display('flex');
    @include justify('center');
    @include flex-wrap('wrap');
    @include content('start');

    .title {
        color: var(--content-title-color);
    }
}
</style>
