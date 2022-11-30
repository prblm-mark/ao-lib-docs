<script setup>
import DemoType from '../components/code/DemoType.vue'
import SnippetHTML from '../components/code/snippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
import IconMobile from '../components/icons/IconMobile.vue'
import IconDesktop from '../components/icons/IconDesktop.vue'
import HeadingData from '../data/demoHeadingData.json'
import TextSizes from '../data/demoTextData.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Typography</h1>

        <p class="mb-20">
            Utilities for controlling the font size of an element. All headings
            are resized responsively, as are a number of the helper classes, as
            highlighted below.
        </p>

        <div
            v-for="headings in HeadingData"
            :key="headings.tag"
            class="flex-row mb-40"
        >
            <div class="col-12 col-6@lg pr-10@lg">
                <DemoType
                    :fontSizeMobile="headings.fontSizeMobile"
                    :fontSize="headings.fontSize"
                    >{{ headings.heading }}
                    <template #tag>{{ headings.tag }}</template>
                    <template #icon><IconDesktop /></template>
                    <template #details>{{ headings.details }}</template>
                    <template #iconMobile><IconMobile /></template>
                    <template #detailsMobile>{{
                        headings.detailsMobile
                    }}</template>
                </DemoType>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetHTML>
                    <template #tag>{{ headings.tag }}</template>
                    {{ headings.heading }}
                </SnippetHTML>
                <SnippetSASS>
                    <template #syntax>@include</template>
                    {{ headings.tag }}()
                </SnippetSASS>
            </div>
        </div>

        <!-- Normal Text -->
        <div class="flex-row mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <DemoType :fontSizeMobile="'fs-md'"
                    >Normal Text
                    <template #tag>p</template>
                    <template #icon><IconDesktop /></template>
                    <template #details>1rem/16px</template>
                    <template #iconMobile><IconMobile /></template>
                    <template #detailsMobile>0.9375rem/15px</template>
                </DemoType>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetHTML>
                    <template #tag>*</template>
                    Applies to all text by default
                </SnippetHTML>
            </div>
        </div>

        <!-- Text sizes -->
        <div
            v-for="sizes in TextSizes"
            :key="sizes.text"
            class="flex-row mb-40"
        >
            <div class="col-12 col-6@lg pr-10@lg">
                <DemoType
                    :fontSizeMobile="sizes.fontSizeMobile"
                    :fontSize="sizes.fontSize"
                    >{{ sizes.text }}
                    <template #tag>{{ sizes.tag }}</template>
                    <template #icon><IconDesktop /></template>
                    <template #details>{{ sizes.details }}</template>
                    <template #iconMobile><IconMobile /></template>
                    <template #detailsMobile>{{
                        sizes.detailsMobile
                    }}</template>
                </DemoType>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetHTML>
                    <template #tag>{{ sizes.tag }}</template>
                    <template #class>{{ sizes.selector }}</template>
                    {{ sizes.text }}
                </SnippetHTML>
                <SnippetSASS>
                    <template #syntax>@include</template>
                    {{ sizes.selector }}()
                </SnippetSASS>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
