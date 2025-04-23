import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const users = ref([
    {
      id: "1",
      order: 1,
      name: "Amir",
    },
    {
      id: "2",
      order: 2,
      name: "Ali",
    },
    {
      id: "3",
      order: 3,
      name: "Amin",
    },
  ]);
  return { users };
});
