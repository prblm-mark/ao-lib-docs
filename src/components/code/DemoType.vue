<script setup>
import { useSlots } from 'vue'
const props = defineProps({
    fontSize: String,
    fontSizeMobile: String,
})
const slots = useSlots()
const tagName = slots.tag()[0].children
</script>

<template>
    <div class="card flex flex-wrap row-gap-20 h-full">
        <div class="flex w-full">
            <div class="w-40 pt-4"><slot name="icon" /></div>
            <div>
                <component
                    :is="tagName"
                    :class="props.fontSize"
                    class="leading-tightest mb-6"
                >
                    <slot />
                </component>
                <p class="text-md details"><slot name="details" /></p>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-40 pt-4"><slot name="iconMobile" /></div>
            <div>
                <component
                    :is="tagName"
                    :class="props.fontSizeMobile"
                    class="leading-tightest mb-6"
                >
                    <slot />
                </component>
                <p class="text-md details"><slot name="detailsMobile" /></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.details {
    color: var(--sub-heading-color);
}
</style>
