<script setup>
import { RouterView } from 'vue-router'

import PrimaryButton from './components/buttons/PrimaryButton.vue'

import MainMenu from './components/menu/MainMenu.vue'

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
    <div class="container pt-lg">
        <div class="flex justify-end">
            <PrimaryButton id="mode">Toggle Theme</PrimaryButton>
        </div>
    </div>
    <div class="flex flex-col flex-row@lg container mt-20">
        <MainMenu />
        <RouterView />
    </div>
</template>

<style lang="scss">
code {
    color: var(--main-heading-color);
    @include fw('600');
}
.code-highlight {
    color: getColor('mid-blue', 400);
}
:where(.dark-mode) {
    .code-highlight {
        color: getColor('slate', 400);
    }
}
</style>
