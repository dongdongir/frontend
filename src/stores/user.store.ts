import { useUserService } from "@/services/user.service";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { IUser } from "@/types/user.interface";

export const useUserStore = defineStore("user", () => {
  const userService = useUserService();

  const currentUser = ref<IUser.Content | null>(null);
  const users = ref<IUser.Content[]>([]);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const isAdmin = computed(
    () => currentUser.value?.roles.includes("ADMIN") || false
  );

  const getById = async (id: IUser.Id) => {
    isLoading.value = true;
    try {
      await userService.getById(id);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { currentUser, users, isAdmin, isLoading, error, getById };
});
