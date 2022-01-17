<template>
  <nav aria-label="Table pages navigation">
    <ul class="pagination">
      <li class="page-item"
          :class="{ 'disabled': page === 1 }">
        <a @click.prevent="$emit('update:page', page-1)"
           class="page-link"
           href="#">
          Предыдущая
        </a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">
          {{ page }}
        </a>
      </li>
      <li class="page-item"
          :class="{ 'disabled': page === lastPage }">
        <a @click.prevent="$emit('update:page', page+1)"
           class="page-link"
           href="#">
          Следующая
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    lastPage: {
      type: Number,
      required: true,
    },
  },
  emits: [
    'update:page',
  ],
};
</script>

<style scoped lang="scss">
  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    margin: auto 0;

    .page-item {
      .page-link {
        position: relative;
        display: block;
        color: #0d6efd;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #dee2e6;
        transition: color .15s ease-in-out,
                    background-color .15s ease-in-out,
                    border-color .15s ease-in-out,
                    box-shadow .15s ease-in-out;
        padding: .375rem .75rem;

        &:hover {
          z-index: 2;
          color: #0a58ca;
          background-color: #e9ecef;
          border-color: #dee2e6;
        }
      }

      &:not(:first-child) {
        .page-link {
          margin-left: -1px;
        }
      }
      &:first-child {
        .page-link {
          border-top-left-radius: .25rem;
          border-bottom-left-radius: .25rem;
        }
      }
      &:last-child {
        .page-link {
          border-top-right-radius: .25rem;
          border-bottom-right-radius: .25rem;
        }
      }

      &.disabled {
        .page-link {
          color: #6c757d;
          pointer-events: none;
          background-color: #fff;
          border-color: #dee2e6;
        }
      }
    }
  }
</style>
