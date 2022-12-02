<script setup>
import { ref } from 'vue'
import IconMenu from '../icons/IconMenu.vue'

const showMenu = ref(false)
</script>

<template>
    <nav>
        <div @click="showMenu = !showMenu" class="h-24 w-24 mr-10">
            <IconMenu :showMenu="showMenu" />
        </div>
        <h6>Affino Framework Menu</h6>

        <menu :class="{ block: showMenu }">
            <RouterLink to="/" class="menu-parent">Typography</RouterLink>
            <RouterLink to="/font-sizes" class="menu-child">
                Font Sizes
            </RouterLink>
            <RouterLink to="/font-weights" class="menu-child">
                Font Weights
            </RouterLink>
            <RouterLink to="/letter-spacing" class="menu-child">
                Letter Spacing
            </RouterLink>
            <RouterLink to="/line-height" class="menu-child">
                Line Height
            </RouterLink>
            <RouterLink to="/text-align" class="menu-child">
                Text Align
            </RouterLink>
            <RouterLink to="/buttons">Buttons</RouterLink>
            <RouterLink to="/form-elements">Form Elements</RouterLink>
            <RouterLink to="/theme-colors">Theme Colors</RouterLink>
            <RouterLink to="/cards">Cards</RouterLink>
            <RouterLink to="/flex-columns">Flex Columns</RouterLink>
            <RouterLink to="/grid">Grid</RouterLink>
            <RouterLink to="/filters">Filter Panel</RouterLink>
        </menu>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    @include w('full');
    @include mr('40');
    @include display('flex');
    @include items('center');
    @include flex-wrap('wrap');
    @include my('14');
    @include py('14');
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: var(--content-border-color);

    @include lg {
        width: 200px;
        flex-shrink: 0;
        border: none;
        @include display('block');
        @include m('0');
        @include p('0');
    }

    div {
        cursor: pointer;

        @include lg {
            @include display('hidden');
        }
    }

    h6 {
        color: var(--main-heading-color);
        @include fw('600');

        @include lg {
            @include mb('14');
        }
    }

    menu {
        @include w('full');
        @include display('hidden');
        @include mt('14');
        @include pt('14');
        border-top: 1px solid;
        border-color: var(--content-border-color);

        @include lg {
            @include display('block');
            @include pt('0');
            border-top: none;
        }

        a {
            color: var(--content-text-color);
            @include w('full');
            @include fs('xs');
            @include fw('500');
            @include tracking('wide');
            @include display('block');
            @include py('4');
        }

        .menu-parent {
            @include fw('600');
            @include fs('md');
            color: var(--main-heading-color);
        }
        .menu-child {
            @include pl('14');
            border-left: 1px solid var(--content-border-color);
        }
        .menu-child.router-link-active {
            border-left: 2px solid var(--primary-color);
        }
    }
}
</style>
