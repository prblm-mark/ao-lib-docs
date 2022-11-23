<script setup>
import IconMenu from '../icons/IconMenu.vue'
</script>

<template>
    <nav>
        <button @click="showMenu = !showMenu">
            <IconMenu :showMenu="showMenu" />
        </button>
        <h6>Affino Framework Menu</h6>

        <menu :class="{ block: showMenu }">
            <RouterLink to="/">Typography</RouterLink>
            <RouterLink to="/buttons">Buttons</RouterLink>
        </menu>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    width: 200px;
    @include mr('40');

    h6 {
        color: var(--main-heading-color);
        @include fw('600');
    }

    menu {
        // @include display('flex');

        a {
            color: var(--content-text-color);
            @include w('full');
            @include fs('xs');
            @include fw('500');
            @include tracking('wide');
            @include display('block');
            @include my('6');
        }
    }
}
</style>
