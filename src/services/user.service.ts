import { UserEntity } from "@/interfaces/user.interface";
import { RoleEntity } from "@/interfaces/role.interface";
import { useHttp } from "@/composables/http.composable";

export const useUserService = () => {
  const create = async (body: Partial<UserEntity>): Promise<UserEntity> => {
    try {
      const result = await useHttp({
        method: "POST",
        url: "/users",
        body,
      });
      return result as unknown as UserEntity;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  };

  const findAll = async (): Promise<UserEntity[]> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: "/users",
      });
      return result as unknown as UserEntity[];
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  };

  const findById = async (id: string): Promise<UserEntity> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: `/users/${id}`,
      });
      return result as unknown as UserEntity;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  };

  const updateById = async (
    id: string,
    data: UserEntity
  ): Promise<UserEntity> => {
    try {
      const result = await useHttp({
        method: "PUT",
        url: `/users/${id}`,
        body: data,
      });
      return result as unknown as UserEntity;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  };

  const deleteById = async (id: UserEntity["id"]): Promise<void> => {
    try {
      await useHttp({
        method: "DELETE",
        url: `/users/${id}`,
      });
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  };

  return {
    create,
    findAll,
    findById,
    updateById,
    deleteById,
  };
};
