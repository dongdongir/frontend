import { defineStore } from "pinia";
import { ref } from "vue";

export const useEventStore = defineStore("event", () => {
  const users = ref([
    {
      id: "1",
      order: 1,
      name: "shomal",
    },
    {
      id: "2",
      order: 2,
      name: "jonob",
    },
  ]);
  return { users };
});
