import { createStore } from 'vuex';
import filterItems from '@/misc/filter';
import orderItems from '@/misc/order';

export default createStore({
  state: {
    items: [
      {
        date: '2022.01.14',
        name: 'Наполнитель',
        count: 243,
        distance: 16,
      },
      {
        date: '2022.01.15',
        name: 'Когтеточки',
        count: 4,
        distance: 1023,
      },
      {
        date: '2022.01.13',
        name: 'Корм',
        count: 14,
        distance: 242,
      },
      {
        date: '2022.01.06',
        name: 'Лотки',
        count: 56,
        distance: 102,
      },
      {
        date: '2022.01.28',
        name: 'Игрушки',
        count: 89,
        distance: 341,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    items: (state) => (orderKey, orderReverse = false, filters) => {
      let { items } = state;

      if (filters) {
        items = filterItems(items, filters);
      }
      if (orderKey) {
        items = orderItems(items, orderKey, orderReverse);
      }

      return items;
    },
  },
});
