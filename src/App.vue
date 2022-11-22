<script setup>
// import { RouterLink, RouterView } from "vue-router";

import PrimaryButton from './components/buttons/PrimaryButton.vue'
import SecondaryButton from './components/buttons/SecondaryButton.vue'
import TertiaryButton from './components/buttons/TertiaryButton.vue'
import IconSmChevronLeft from './components/icons/IconSmChevronLeft.vue'
import IconSmChevronDown from './components/icons/IconSmChevronDown.vue'
import IconCircleArrowDown from './components/icons/IconCircleArrowDown.vue'
import IconCircleArrowRight from './components/icons/IconCircleArrowRight.vue'
import IconSmCircleArrowDown from './components/icons/IconSmCircleArrowDown.vue'
import IconSmCircleArrowRight from './components/icons/IconSmCircleArrowRight.vue'

// import HelloWorld from "./components/HelloWorld.vue";
function load() {
    const button = document.querySelector('#mode')

    // MediaQueryList object
    const useDark = window.matchMedia('(prefers-color-scheme: dark)')

    // Toggles the "dark-mode" class based on if the media query matches
    function toggleDarkMode(state) {
        document.documentElement.classList.toggle('dark-mode', state)
    }

    // Initial setting
    toggleDarkMode(useDark.matches)

    // Listen for changes in the OS settings
    useDark.addListener((evt) => toggleDarkMode(evt.matches))

    // Toggles the "dark-mode" class on click
    button.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode')
    })
}

window.addEventListener('DOMContentLoaded', load)
</script>

<template>
    <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

    <!-- ----------------------------------------------------------------------- -->
    <!--                                Container                                -->
    <!-- ----------------------------------------------------------------------- -->

    <div class="container pt-lg">
        <!-- ---------------------------- Toggle Theme ----------------------------- -->

        <div class="flex justify-end">
            <PrimaryButton id="mode">Toggle Theme</PrimaryButton>
        </div>

        <!-- ----------------------------------------------------------------------- -->
        <!--                               Typography                                -->
        <!-- ----------------------------------------------------------------------- -->

        <h3 class="heading-border">Typography</h3>

        <h1 class="mb-4">Heading 1</h1>
        <h2 class="mb-6">Heading 2</h2>
        <h3 class="mb-6">Heading 3</h3>
        <h4 class="mb-6">Heading 4</h4>
        <h5 class="mb-6">Heading 5</h5>
        <h6 class="mb-12">Heading 6</h6>

        <p class="mb-6">Normal Text</p>
        <p class="txt-md mb-6"><strong>Bold Text</strong></p>
        <p class="txt-md mb-12"><a href="#">Link</a></p>

        <p class="txt-md mb-6">Medium Text</p>
        <p class="txt-md mb-12"><strong>Medium Bold</strong></p>

        <p class="txt-sm mb-6">Small Text</p>
        <p class="txt-sm mb-12"><strong>Small Bold</strong></p>

        <p class="txt-xs mb-6">XSmall Text</p>
        <p class="txt-xs mb-12"><strong>XSmall Bold</strong></p>

        <!-- ----------------------------------------------------------------------- -->
        <!--                                 Buttons                                 -->
        <!-- ----------------------------------------------------------------------- -->

        <h3 class="heading-border mt-xl">Buttons</h3>

        <p class="txt-md mb-12"><strong>Standard</strong></p>

        <div class="flex mb-sm">
            <PrimaryButton class="mr-6">Primary</PrimaryButton>

            <PrimaryButton class="mr-6">
                <template #iconLeft>
                    <IconSmChevronLeft />
                </template>
                Icon Left
            </PrimaryButton>

            <PrimaryButton class="mr-6">
                <template #iconRight>
                    <IconSmChevronDown />
                </template>
                Icon Right
            </PrimaryButton>
        </div>

        <div class="flex mb-sm">
            <SecondaryButton class="mr-6">Secondary</SecondaryButton>

            <SecondaryButton class="mr-6">
                <template #iconLeft>
                    <IconCircleArrowRight />
                </template>
                Icon Left
            </SecondaryButton>

            <SecondaryButton class="mr-6">
                <template #iconRight>
                    <IconCircleArrowDown />
                </template>
                Icon Right
            </SecondaryButton>
        </div>

        <div class="flex mb-lg">
            <TertiaryButton class="mr-6">Tertiary</TertiaryButton>

            <TertiaryButton class="mr-6">
                <template #iconLeft>
                    <IconSmChevronLeft />
                </template>
                Icon Left
            </TertiaryButton>

            <TertiaryButton class="mr-6">
                <template #iconRight>
                    <IconSmChevronDown />
                </template>
                Icon Right
            </TertiaryButton>
        </div>

        <p class="txt-md mb-12"><strong>Small</strong></p>
        <div class="flex mb-sm">
            <PrimaryButton class="mr-6" small>Small Primary</PrimaryButton>

            <PrimaryButton class="mr-6" small>
                <template #iconLeft>
                    <IconSmChevronLeft />
                </template>
                Icon Left
            </PrimaryButton>

            <PrimaryButton class="mr-6" small>
                <template #iconRight>
                    <IconSmChevronDown />
                </template>
                Icon Right
            </PrimaryButton>
        </div>

        <div class="flex mb-sm">
            <SecondaryButton class="mr-6" small>
                Small Secondary
            </SecondaryButton>

            <SecondaryButton class="mr-6" small>
                <template #iconLeft>
                    <IconSmCircleArrowRight />
                </template>
                Icon Left
            </SecondaryButton>

            <SecondaryButton class="mr-6" small>
                <template #iconRight>
                    <IconSmCircleArrowDown />
                </template>
                Icon Right
            </SecondaryButton>
        </div>

        <div class="flex mb-lg">
            <TertiaryButton class="mr-6" small>Small Tertiary</TertiaryButton>

            <TertiaryButton class="mr-6" small>
                <template #iconLeft>
                    <IconSmChevronLeft />
                </template>
                Icon Left
            </TertiaryButton>

            <TertiaryButton class="mr-6" small>
                <template #iconRight>
                    <IconSmChevronDown />
                </template>
                Icon Right
            </TertiaryButton>
        </div>

        <p class="txt-md mb-12">
            <strong>Extra Small</strong> (No Icon Allowed)
        </p>
        <div class="flex mb-sm">
            <PrimaryButton class="mr-6" xsmall>Primary</PrimaryButton>
            <SecondaryButton class="mr-6" xsmall>Secondary</SecondaryButton>
            <TertiaryButton class="mr-6" xsmall>Tertiary</TertiaryButton>
        </div>

        <!-- ----------------------------------------------------------------------- -->
        <!--                              Form Elements                              -->
        <!-- ----------------------------------------------------------------------- -->

        <h3 class="heading-border mt-xl">Form Elements</h3>

        <div class="card">
            <div class="row gap-8">
                <div class="col-12 col-6@md col-4@lg">
                    <div class="form-element">
                        <label class="form-label">Text</label>
                        <input
                            class="form-field"
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <div class="form-element">
                        <label class="form-label">Date</label>
                        <input
                            class="form-field"
                            type="date"
                            required=""
                            placeholder=""
                        />
                    </div>
                </div>
                <div class="col-12 col-6@md col-4@lg">
                    <div class="form-element">
                        <label class="form-label">Basic Select</label>
                        <select class="form-field">
                            <option value="Default Option">
                                Default Option
                            </option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!-- ----------------------------------------------------------------------- -->
        <!--                                 Colors                                  -->
        <!-- ----------------------------------------------------------------------- -->

        <h3 class="heading-border mt-xl">Colors</h3>

        <div class="row gap-4">
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm border-1 border-style-solid mb-6"
                    style="
                        background-color: var(--page-bg-color);
                        border-color: var(--content-border-color);
                    "
                ></div>
                <p class="txt-xs">Page Bg</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--content-bg-color)"
                ></div>
                <p class="txt-xs">Content Bg</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--content-border-color)"
                ></div>
                <p class="txt-xs">Border</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--content-text-color)"
                ></div>
                <p class="txt-xs">Content Text</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--content-title-color)"
                ></div>
                <p class="txt-xs">Content Title</p>
            </div>
            <div class="col-4 col-2@md col-1@lg flex justify-center flex-wrap">
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--main-heading-color)"
                ></div>
                <p class="txt-xs">Main Heading</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--sub-heading-color)"
                ></div>
                <p class="txt-xs">Sub Heading</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6 border-1 border-style-solid"
                    style="
                        background-color: var(--dark-surface-bg-color);
                        border-color: var(--content-border-color);
                    "
                ></div>
                <p class="txt-xs">Dark Panel</p>
            </div>
            <div class="col-4 col-2@md col-1@lg flex justify-center flex-wrap">
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--darker-surface-bg-color)"
                ></div>
                <p class="txt-xs">Darker Panel</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--dark-surface-text-color)"
                ></div>
                <p class="txt-xs">Panel Text</p>
            </div>
            <div class="col-4 col-2@md col-1@lg flex justify-center flex-wrap">
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--action-panel-color)"
                ></div>
                <p class="txt-xs">Action Panel</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--primary-color)"
                ></div>
                <p class="txt-xs">Primary</p>
            </div>
        </div>
        <div class="row gap-4 mt-12">
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--primary-active-color)"
                ></div>
                <p class="txt-xs">Primary Active</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--primary-text-color)"
                ></div>
                <p class="txt-xs">Primary Text</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--secondary-color)"
                ></div>
                <p class="txt-xs">Secondary</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--secondary-active-color)"
                ></div>
                <p class="txt-xs align-center">Secondary Active</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--secondary-text-color)"
                ></div>
                <p class="txt-xs align-center">Secondary Text</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--error-color)"
                ></div>
                <p class="txt-xs">Error</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--focus-color)"
                ></div>
                <p class="txt-xs">Focus</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--table-heading-color)"
                ></div>
                <p class="txt-xs">Table Heading</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--input-border-color)"
                ></div>
                <p class="txt-xs">Input Border</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm border-1 border-style-solid mb-6"
                    style="
                        background-color: var(--input-bg-color);
                        border-color: var(--content-border-color);
                    "
                ></div>
                <p class="txt-xs align-center">Input Background</p>
            </div>
            <div
                class="col-4 col-2@md col-1@lg flex justify-center flex-wrap content-start"
            >
                <div
                    class="w-full h-xl rounded-sm mb-6"
                    style="background-color: var(--filters-bg-color)"
                ></div>
                <p class="txt-xs align-center">Filters Background</p>
            </div>
        </div>

        <!-- ----------------------------------------------------------------------- -->
        <!--                                  Cards                                  -->
        <!-- ----------------------------------------------------------------------- -->

        <h3 class="heading-border mt-xl">Cards</h3>

        <div class="card">
            <h2 class="card-title">This is a title</h2>
            <p class="card-body txt-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                sunt, quo totam aliquam praesentium ducimus tempore sapiente
                quia nulla optio? Lorem ipsum, dolor sit amet consectetur
                <a href="">adipisicing elit</a>. Libero laboriosam laborum
                exercitationem autem commodi voluptas odio aliquid ut velit
                doloremque minima, quaerat dolores, corporis consequuntur totam
                nam id veniam maxime.
            </p>
        </div>

        <!-- ----------------------------------------------------------------------- -->
        <!--                                  Cards                                  -->
        <!-- ----------------------------------------------------------------------- -->

        <h3 class="heading-border mt-xl">Stat Card</h3>

        <div class="card stat col-12 col-3@lg">
            <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
                    <path
                        d="M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"
                    ></path>
                </svg>
            </div>
            <div>
                <h6>Article Reads</h6>
                <h3>1275</h3>
            </div>
        </div>

        <!-- ----------------------------------------------------------------------- -->
        <!--                                  Grid                                   -->
        <!-- ----------------------------------------------------------------------- -->

        <h3 class="heading-border mt-xl">Grid</h3>

        <div class="row gap-8 mb-xl">
            <div class="col-6 col-4@md col-3@lg">
                <div class="card h-full">
                    <div class="user">
                        <img
                            class=""
                            src="https://source.unsplash.com/MZf0mI14RI0"
                            alt=""
                        />
                        <div>
                            <h4 class="">Luis Montiel Paz</h4>
                            <h6>Front-end Guru</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 col-4@md col-3@lg">
                <div class="card">
                    <h3 class="card-title mb-xl">Hello, Affino</h3>
                    <p class="card-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
            </div>
            <div class="col-6 col-4@md col-3@lg">
                <div class="card">
                    <h3 class="card-title">Hello, Affino</h3>
                    <p class="card-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
            </div>
            <div class="col-6 col-4@md col-3@lg">
                <div class="card">
                    <h3 class="card-title">Hello, Affino</h3>
                    <p class="card-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- <RouterView /> -->
</template>

<style lang="scss">
.test {
    color: var(--primary-color);
}
</style>
