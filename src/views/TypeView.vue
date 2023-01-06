<script setup>
import DemoType from '../components/code/DemoType.vue'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
import IconMobile from '../components/icons/IconMobile.vue'
import IconDesktop from '../components/icons/IconDesktop.vue'
import HeadingData from '../data/demoHeadingData.json'
import TextSizes from '../data/demoTextData.json'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Headings</h1>

        <p class="mb-32">
            All headings are resized responsively, as are a number of the helper
            classes, as highlighted below.
        </p>

        <div v-for="headings in HeadingData" :key="headings.tag" class="mb-40">
            <DemoType
                :fontSizeMobile="headings.fontSizeMobile"
                :fontSize="headings.fontSize"
                >{{ headings.heading }}
                <template #tag>{{ headings.tag }}</template>
                <template #icon><IconDesktop /></template>
                <template #details>{{ headings.details }}</template>
                <template #iconMobile><IconMobile /></template>
                <template #detailsMobile>{{ headings.detailsMobile }}</template>
            </DemoType>

            <div class="flex-row flex-gap-10 mt-10">
                <div class="col-12 col-6@lg">
                    <SnippetHTML>
                        <template #tag>{{ headings.tag }}</template>
                        {{ headings.heading }}
                    </SnippetHTML>
                </div>
                <div class="col-12 col-6@lg">
                    <SnippetSASS>
                        <template #syntax>@include</template>
                        {{ headings.tag }}()
                    </SnippetSASS>
                </div>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Normal Text</h4>

        <!-- Normal Text -->
        <div class="mb-40">
            <DemoType :fontSizeMobile="'fs-md'"
                >Normal Text
                <template #tag>p</template>
                <template #icon><IconDesktop /></template>
                <template #details>1rem/16px</template>
                <template #iconMobile><IconMobile /></template>
                <template #detailsMobile>0.9375rem/15px</template>
            </DemoType>

            <div class="col-12 flex flex-wrap mt-20 row-gap-20">
                <SnippetHTML>
                    <template #tag>*</template>
                    Applies to all text by default
                </SnippetHTML>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Responsive Text Sizes</h4>

        <!-- Text sizes -->
        <div v-for="sizes in TextSizes" :key="sizes.text" class="mb-40">
            <DemoType
                :fontSizeMobile="sizes.fontSizeMobile"
                :fontSize="sizes.fontSize"
                >{{ sizes.text }}
                <template #tag>{{ sizes.tag }}</template>
                <template #icon><IconDesktop /></template>
                <template #details>{{ sizes.details }}</template>
                <template #iconMobile><IconMobile /></template>
                <template #detailsMobile>{{ sizes.detailsMobile }}</template>
            </DemoType>

            <div class="flex-row flex-gap-10 mt-10">
                <div class="col-12 col-6@lg">
                    <SnippetHTML>
                        <template #tag>{{ sizes.tag }}</template>
                        <template #class>{{ sizes.selector }}</template>
                        {{ sizes.text }}
                    </SnippetHTML>
                </div>
                <div class="col-12 col-6@lg">
                    <SnippetSASS>
                        <template #syntax>@include</template>
                        {{ sizes.selector }}()
                    </SnippetSASS>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
