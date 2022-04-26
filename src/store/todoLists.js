import { writable } from 'svelte/store';

const methodsOfLists = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    set: (value) => set(value),
    add: (task) => update((value) => value.concat(task)),
    remove: (task) => update((value) => value.filter(({ id }) => task !== id)),
    removeAll: () => set([]),
  };
};

export default methodsOfLists();

