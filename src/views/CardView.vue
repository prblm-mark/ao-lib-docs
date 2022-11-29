<script setup>
import StatCard from '../components/cards/StatCard.vue'
import IconBook from '../components/icons/IconBook.vue'
</script>

<template>
    <div class="w-full">
        <h3 class="heading-border">Basic Card</h3>

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

        <h3 class="heading-border mt-40">Stat Card</h3>

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
