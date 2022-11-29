<script setup></script>

<template>
    <div class="w-full">
        <h3 class="heading-border">Theme Colors</h3>

        <div class="card">
            <div
                class="grid grid-gap-12 grid-cols-3 grid-cols-4@md grid-cols-6@lg"
            >
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--page-bg-color)"
                    ></div>
                    <p class="txt-xs">Page Bg</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6 border-1 border-style-solid"
                        style="
                            background-color: var(--content-bg-color);
                            border-color: var(--content-border-color);
                        "
                    ></div>
                    <p class="txt-xs">Content Bg</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--content-border-color)"
                    ></div>
                    <p class="txt-xs">Border</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--content-text-color)"
                    ></div>
                    <p class="txt-xs">Content Text</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--content-title-color)"
                    ></div>
                    <p class="txt-xs">Content Title</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--main-heading-color)"
                    ></div>
                    <p class="txt-xs">Main Heading</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--sub-heading-color)"
                    ></div>
                    <p class="txt-xs">Sub Heading</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="
                            background-color: var(--dark-surface-bg-color);
                            border-color: var(--content-border-color);
                        "
                    ></div>
                    <p class="txt-xs">Dark Panel</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6 border-1 border-style-solid"
                        style="
                            background-color: var(--darker-surface-bg-color);
                            border-color: var(--content-border-color);
                        "
                    ></div>
                    <p class="txt-xs">Darker Panel</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--dark-surface-text-color)"
                    ></div>
                    <p class="txt-xs">Panel Text</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--action-panel-color)"
                    ></div>
                    <p class="txt-xs">Action Panel</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--primary-color)"
                    ></div>
                    <p class="txt-xs">Primary</p>
                </div>

                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--primary-active-color)"
                    ></div>
                    <p class="txt-xs">Primary Active</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6 border-1 border-style-solid"
                        style="
                            background-color: var(--primary-text-color);
                            border-color: var(--content-border-color);
                        "
                    ></div>
                    <p class="txt-xs">Primary Text</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--secondary-color)"
                    ></div>
                    <p class="txt-xs">Secondary</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--secondary-active-color)"
                    ></div>
                    <p class="txt-xs align-center">Secondary Active</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--secondary-text-color)"
                    ></div>
                    <p class="txt-xs align-center">Secondary Text</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--error-color)"
                    ></div>
                    <p class="txt-xs">Error</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--focus-color)"
                    ></div>
                    <p class="txt-xs">Focus</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--table-heading-color)"
                    ></div>
                    <p class="txt-xs">Table Heading</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6"
                        style="background-color: var(--input-border-color)"
                    ></div>
                    <p class="txt-xs">Input Border</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm border-1 border-style-solid mb-6"
                        style="
                            background-color: var(--input-bg-color);
                            border-color: var(--content-border-color);
                        "
                    ></div>
                    <p class="txt-xs align-center">Input Background</p>
                </div>
                <div class="color">
                    <div
                        class="w-full h-xl rounded-sm mb-6 border-1 border-style-solid"
                        style="
                            background-color: var(--filters-bg-color);
                            border-color: var(--content-border-color);
                        "
                    ></div>
                    <p class="txt-xs align-center">Filters Background</p>
                </div>
            </div>
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
