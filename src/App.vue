<script setup>
import { RouterView } from 'vue-router'
import { ref, provide } from 'vue'
import PrimaryButton from './components/buttons/PrimaryButton.vue'
import MainMenu from './components/menu/MainMenu.vue'
import AffinoLogo from '@/assets/AffinoLogo.vue'

let darkMode = ref()

function load() {
    const button = document.querySelector('#mode')

    // MediaQueryList object
    const useDark = window.matchMedia('(prefers-color-scheme: dark)')

    // Toggles the "dark-mode" class based on if the media query matches
    function toggleDarkMode(state) {
        if (state) {
            darkMode.value = true
        }
        document.documentElement.classList.toggle('dark-mode', state)
    }

    // Initial setting
    toggleDarkMode(useDark.matches)

    // Listen for changes in the OS settings
    useDark.addListener((evt) => toggleDarkMode(evt.matches))

    // Toggles the "dark-mode" class on click
    button.addEventListener('click', () => {
        const html = document.documentElement
        if (html.classList.contains('dark-mode')) {
            html.classList.remove('dark-mode')
            darkMode.value = false
        } else {
            html.classList.add('dark-mode')
            darkMode.value = true
        }
    })
}

window.addEventListener('DOMContentLoaded', load)
provide('darkMode', darkMode)
</script>

<template>
    <div class="container pt-md">
        <div class="flex justify-between items-center header">
            <RouterLink to="/"><AffinoLogo /></RouterLink>
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

.header {
    @include lg {
        border-bottom: 1px dotted var(--content-border-color);
        @include pb('md');
        @include mb('xl');
    }
    svg {
        color: var(--content-text-color);
    }
}

.code {
    font-family: 'Fira Mono', monospace;
    background-color: getColor('mid-blue', 100);
    border-radius: 0.375rem;
    position: relative;
    @include w('full');
    @include h('full');
    @include p('18');
    @include fw('400');
    @include fs('xs');

    @include md() {
        @include fs('sm');
    }

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

.code-highlight {
    font-family: 'Fira Mono', monospace;
    color: var(--main-heading-color);
    background-color: getColor('mid-blue', 300);
    border-radius: 0.25rem;
    white-space: nowrap;
    @include fw('500');
    @include fs('xxs');
    @include py('2');
    @include px('6');

    @include lg {
        @include fs('xs');
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
    .code-highlight {
        background-color: getColor('slate', 800);
    }
}
</style>
