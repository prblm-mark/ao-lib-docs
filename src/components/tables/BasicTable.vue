<script setup>
const headings = ['Class', 'Sass', 'Properties']
defineProps({
    tableData: {
        required: true,
        type: Array,
    },
})
</script>

<template>
    <div class="table-container">
        <table class="table w-full rounded-md">
            <thead class="table-head">
                <tr>
                    <th
                        v-for="heading in headings"
                        :key="heading"
                        class="p-14 align-left"
                    >
                        <h6 class="table-subheading">
                            {{ heading }}
                        </h6>
                    </th>
                </tr>
            </thead>

            <tbody class="table-body">
                <tr v-for="data in tableData" :key="data.class">
                    <td class="p-14 align-left class">.{{ data.class }}</td>
                    <td class="p-14 align-left sass">{{ data.sass }};</td>
                    <td class="p-14 align-left prop">
                        {{ data.property }} <span>{{ data.px }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.table-container {
    overflow-x: auto;
}
.table {
    background-color: var(--content-bg-color);
    overflow: hidden;
    border-collapse: collapse;
    min-width: max-content;

    .table-head {
        h6 {
            @include fw('600');
        }
    }

    .table-body {
        font-family: 'Fira Mono', monospace;
        @include fs('xs');
        @include tracking('tight');
        color: var(--main-heading-color);
        @include fw('500');

        tr {
            border-top: 1px solid var(--page-bg-color);
        }

        .class {
            color: getColor('light-blue', 600);
        }
        .sass {
            color: #eb67de;
        }
    }
}
.prop {
    span {
        color: getColor('mid-blue', 400);
        @include fw('400');
    }
}
:where(.dark-mode) {
    .prop {
        span {
            color: getColor('slate', 500);
        }
    }
}
</style>
