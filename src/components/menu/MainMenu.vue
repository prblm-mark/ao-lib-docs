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
        <h6 :showMenu="showMenu">Menu</h6>

        <menu :class="{ block: showMenu }">
            <h4>Colors</h4>
            <RouterLink to="/">Color Palette</RouterLink>
            <RouterLink to="/theme-colors">Theme Colors</RouterLink>

            <h4>Breakpoints</h4>
            <RouterLink to="/breakpoints">Screen sizes</RouterLink>

            <h4>Typography</h4>
            <RouterLink to="/typography"> Headings & Text </RouterLink>
            <RouterLink to="/font-sizes"> Font Sizes </RouterLink>
            <RouterLink to="/font-weights"> Font Weights </RouterLink>
            <RouterLink to="/letter-spacing"> Letter Spacing </RouterLink>
            <RouterLink to="/line-height"> Line Height </RouterLink>
            <RouterLink to="/text-align"> Text Align </RouterLink>

            <h4>Spacing</h4>
            <RouterLink to="/margin">Margin</RouterLink>
            <RouterLink to="/padding">Padding</RouterLink>
            <RouterLink to="/width">Width</RouterLink>
            <RouterLink to="/height">Height</RouterLink>

            <h4>Utilities</h4>
            <RouterLink to="/display">Display</RouterLink>
            <RouterLink to="/borders">Borders</RouterLink>
            <RouterLink to="/effects">Effects</RouterLink>

            <h4>Layout</h4>
            <RouterLink to="/grid">Grid</RouterLink>
            <RouterLink to="/flex-columns">Flex Columns</RouterLink>

            <h4>Components</h4>
            <RouterLink to="/buttons">Buttons</RouterLink>
            <RouterLink to="/cards">Cards</RouterLink>
            <!-- <RouterLink to="/filters">Filter Panel</RouterLink> -->

            <h4>Forms</h4>
            <RouterLink to="/form-elements">Form Elements</RouterLink>
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
            @include display('hidden');
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
            border-left: 1px solid var(--content-border-color);
            @include w('full');
            @include fs('xs');
            @include fw('500');
            @include tracking('wide');
            @include display('block');
            @include py('4');
            @include pl('14');

            &:hover {
                color: var(--primary-active-color);
            }
        }
        .router-link-active {
            border-left: 2px solid var(--primary-color);
        }

        h4 {
            @include fw('600');
            @include fs('md');
            @include mt('14');
            @include mb('8');
            color: var(--main-heading-color);
        }
    }
}
</style>
