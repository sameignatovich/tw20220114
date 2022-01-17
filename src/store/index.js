import { createStore } from 'vuex';
import filterItems from '@/misc/filter';
import orderItems from '@/misc/order';
import { itemsData } from '@/store/data';

export default createStore({
  state: {
    items: itemsData,
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
