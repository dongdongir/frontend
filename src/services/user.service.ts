import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("dongdong user", () => {
  const user = ref({});
  const userList = ref([]);

  return { user, userList };
});
