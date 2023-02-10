<script setup>
const headings = ['Size', 'Class', 'Sass']
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
                    <td class="p-14 align-left prop">
                        {{ data.screen }} <span>{{ data.size }}</span>
                    </td>
                    <td class="p-14 align-left class">
                        <span>classname</span>{{ data.class }}
                    </td>
                    <td class="p-14 align-left sass">{{ data.sass }};</td>
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

        .sass {
            color: #eb67de;
        }
    }
}
.class {
    color: getColor('light-blue', 600);

    span {
        color: getColor('mid-blue', 400);
        @include fw('400');
    }
}
.prop {
    span {
        color: getColor('mid-blue', 400);
        @include fw('400');
    }
}
:where(.dark-mode) {
    .prop,
    .class {
        span {
            color: getColor('slate', 500);
        }
    }
}
</style>
