<script setup>
import StatCard from '../components/cards/StatCard.vue'
import IconBook from '../components/icons/IconBook.vue'
import SnippetHTML from '../components/code/SnippetHTML.vue'
import SnippetSASS from '../components/code/SnippetSASS.vue'
</script>

<template>
    <div class="w-full">
        <h1 class="heading-border">Basic Card</h1>
        <p class="mb-24">
            The basic card style is applied by adding a class or mixin.
        </p>

        <div class="card">
            <h2 class="card-title">This is a title</h2>
            <p class="card-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                sunt, quo totam aliquam praesentium ducimus tempore sapiente
                quia nulla optio? Lorem ipsum, dolor sit amet consectetur
                <a href="">adipisicing elit</a>. Libero laboriosam laborum
                exercitationem autem commodi voluptas odio aliquid ut velit
                doloremque minima, quaerat dolores, corporis consequuntur totam
                nam id veniam maxime.
            </p>
        </div>

        <div class="flex-row mt-40 mb-40">
            <div class="col-12 col-6@lg pr-10@lg">
                <SnippetHTML class="h-full">
                    <template #tag>div</template>
                    <template #class>card</template>
                    Content here...
                </SnippetHTML>
            </div>
            <div
                class="col-12 col-6@lg flex flex-wrap mt-20 mt-0@lg pl-10@lg row-gap-20"
            >
                <SnippetSASS>
                    <template #syntax>@include</template>
                    card()
                </SnippetSASS>
            </div>
        </div>

        <h4 class="mt-44 heading-border">Stat Card</h4>
        <p class="mb-28 mt-6 text-md leading-relaxed">
            The card style can then be extended to other components, as
            highlighted below with the Stat Card component.
        </p>

        <div class="grid grid-gap-12 grid-cols-1 grid-cols-2@sm grid-cols-4@lg">
            <StatCard>
                <template #icon>
                    <IconBook />
                </template>
                <template #stat> Article Reads </template>
                <template #data> 2674 </template>
            </StatCard>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
