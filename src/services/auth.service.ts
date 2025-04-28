import { useHttp } from "@/composables/http.composable";

export const useAuthService = () => {
  const login = async (data: any) => {
    try {
      await useHttp({
        method: "POST",
        url: "/auth/login",
        body: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to login");
    }
  };

  const register = async (data: any) => {
    try {
      await useHttp({
        method: "POST",
        url: "/auth/register",
        body: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to register");
    }
  };
  return { login, register };
};
