<template>
  <div class="filter">
    <select v-model="column"
            @change="updateFilter"
            class="form-element form-select">
      <option disabled value="">Колонка</option>
      <option v-for="option in columns"
              :value="option.name"
              :key="option.name" >
        {{ option.text }}
      </option>
    </select>

    <select v-model="condition"
            @change="updateFilter"
            class="form-element form-select">
      <option disabled value="">Условие</option>
      <option v-for="option in conditions"
              :value="option.name"
              :key="option.name" >
        {{ option.text }}
      </option>
    </select>

    <!-- Maybe add .lazy modicicator later -->
    <input v-model="filterValue"
           @input="updateFilter"
           class="form-element form-input"
           type="text">
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  emits: [
    'update:filter',
  ],
  data() {
    return {
      column: '',
      condition: '',
      filterValue: null,

      columns: [
        { name: 'date', text: 'Дата' },
        { name: 'name', text: 'Имя' },
        { name: 'count', text: 'Количество' },
        { name: 'distance', text: 'Расстояние' },
      ],

      conditions: [
        { name: 'more', text: '>' },
        { name: 'less', text: '<' },
        { name: 'equal', text: '=' },
        { name: 'contains', text: 'содержит' },
      ],
    };
  },
  methods: {
    updateFilter() {
      this.$emit('update:filter', {
        column: this.column,
        condition: this.condition,
        value: this.filterValue,
      });
    },
  },
};
</script>

<style scoped lang="scss">
  .form-element {
    margin: .5rem .25rem 0;
  }

  .form-input {
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    min-height: 1rem;
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem;
  }

  .form-select {
    padding: .375rem 2.25rem .375rem .75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right .75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    appearance: none;

    padding-top: .25rem;
    padding-bottom: .25rem;
    padding-left: .5rem;
    font-size: .875rem;
    border-radius: .2rem;
  }
</style>
