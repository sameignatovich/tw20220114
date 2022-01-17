<template>
  <button @click="showFilter = !showFilter"
          type="button"
          class="filters-btn">Фильтры</button>
  <filters-fields v-show="showFilter"
                  v-model:filter="filter" />
  <table class="table">
    <thead>
      <th scope="col">
        Дата
      </th>
      <th scope="col" data-col="name" @click="changeOrder">
        Имя
      </th>
      <th scope="col" data-col="count" @click="changeOrder">
        Количество
      </th>
      <th scope="col" data-col="distance" @click="changeOrder">
        Расстояние
      </th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items(orderKey, orderReverse, itemsFilter)" :key="index">
        <td>{{ item.date }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.count }}</td>
        <td>{{ item.distance }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import FiltersFields from '@/components/FiltersFields.vue';

export default {
  data() {
    return {
      orderKey: 'count',
      orderReverse: false,
      showFilter: false,

      filter: {
        column: '',
        condition: '',
        value: null,
      },
    };
  },
  computed: {
    itemsFilter() {
      if (this.filter.column && this.filter.condition && this.filter.value) {
        return this.filter;
      }
      return null;
    },
    ...mapGetters([
      'items',
    ]),
  },
  methods: {
    changeOrder(event) {
      const reverse = !this.orderReverse;
      const colName = event.target.dataset.col;

      if (this.orderKey === colName) {
        this.orderReverse = reverse;
      } else {
        this.orderKey = colName;
      }
    },
  },
  components: {
    FiltersFields,
  },
};
</script>

<style scoped lang="scss">
  .table {
    width: 100%;
    margin: 1rem 0;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
    border-collapse: collapse;

    > thead {
      vertical-align: bottom;
    }

    > tbody {
      vertical-align: inherit;
    }

    th {
      text-align: inherit;
    }

    th[data-col] {
      cursor: pointer;
    }

    thead, tbody, th, tr, td {
      border-color: inherit;
      border-style: solid;
      border-width: 0;
    }

    > :not(caption) > * > * {
      padding: .5rem .5rem;
      background-color: transparent;
      border-bottom-width: 1px;
      box-shadow: inset 0 0 0 9999px transparent;
    }

    > :not(:first-child) {
      border-top: 2px solid currentColor;
    }
  }

  .filters-btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,
                background-color .15s ease-in-out,
                border-color .15s ease-in-out,
                box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }
  }
</style>
