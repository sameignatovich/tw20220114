<template>
  <div class="container">
    <project-table />
  </div>
</template>

<script>
import ProjectTable from './components/ProjectTable.vue';

export default {
  name: 'App',
  components: {
    ProjectTable,
  },
};
</script>

<style lang="scss">
  body {
      font-family: system-ui,
                   -apple-system,
                   "Segoe UI",
                   Roboto,
                   "Helvetica Neue",
                   Arial,
                   "Noto Sans",
                   "Liberation Sans",
                   sans-serif,
                   "Apple Color Emoji",
                   "Segoe UI Emoji",
                   "Segoe UI Symbol",
                   "Noto Color Emoji";
      font-size: 1rem;;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
  }

  .container {
    max-width: 1050px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
