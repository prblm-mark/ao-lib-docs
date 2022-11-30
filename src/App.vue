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
            <PrimaryButton large id="mode">Toggle Theme</PrimaryButton>
        </div>
    </div>

    <div class="flex flex-col flex-row@lg container mt-20">
        <MainMenu />
        <RouterView />
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&display=swap');

.code {
    font-family: 'Fira Mono', monospace;
    background-color: getColor('mid-blue', 100);
    border-radius: 0.375rem;
    position: relative;
    @include w('full');
    @include p('18');
    @include fw('400');
    @include fs('sm');

    .code-pill {
        font-family: 'Inter', sans-serif;
        position: absolute;
        top: -0.5rem;
        right: 0.5rem;
        color: getColor('mid-blue', 400);
        background-color: inherit;
        border-radius: inherit;
        @include fs('xs');
        @include fw('600');
        @include px('12');
        @include py('4');
    }
    .code-selector {
        color: getColor('light-blue', 600);
        @include fw('500');
        @include display('inline-block');
    }
    .code-syntax {
        color: #eb67de;
        @include fw('500');
        @include pr('10');
    }
    .code-markup {
        color: getColor('mid-blue', 300);
    }
    .code-class {
        color: getColor('mid-blue', 700);
    }
    .code-content {
        color: getColor('mid-blue', 700);
        @include display('inline-block');
    }
}

:where(.dark-mode) {
    .code {
        background-color: getColor('slate', 700);

        .code-pill {
            color: getColor('slate', 400);
        }

        .code-markup {
            color: getColor('slate', 500);
        }
        .code-class {
            color: getColor('slate', 200);
        }
        .code-content {
            color: getColor('slate', 200);
        }
    }
}
</style>
