import { writable } from 'svelte/store';

const createSelection = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    add: (id) => update((value) => value.concat(id)),
    remove: (id) => update((value) => value.filter((item) => item.id === id)),
    removeAll: () => set([]),
  };
};

export default createSelection();
