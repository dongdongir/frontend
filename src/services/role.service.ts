import { RoleEntity } from "@/interfaces/role.interface";
import { useHttp } from "@/composables/http.composable";

export const useRoleService = () => {
  const create = async (body: Partial<RoleEntity>): Promise<RoleEntity> => {
    try {
      const result = await useHttp({
        method: "POST",
        url: "/roles",
        body,
      });
      return result as unknown as RoleEntity;
    } catch (error) {
      throw new Error("Failed to create role");
    }
  };

  const findAll = async (): Promise<RoleEntity[]> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: "/roles",
      });
      return result as unknown as RoleEntity[];
    } catch (error) {
      throw new Error("Failed to fetch roles");
    }
  };

  const findById = async (id: string): Promise<RoleEntity> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: `/roles/${id}`,
      });
      return result as unknown as RoleEntity;
    } catch (error) {
      throw new Error("Failed to fetch role");
    }
  };

  const updateById = async (
    id: string,
    data: Partial<RoleEntity>
  ): Promise<RoleEntity> => {
    try {
      const result = await useHttp({
        method: "PATCH",
        url: `/roles/${id}`,
        body: data,
      });
      return result as unknown as RoleEntity;
    } catch (error) {
      throw new Error("Failed to update role");
    }
  };

  const deleteById = async (id: RoleEntity["id"]): Promise<void> => {
    try {
      await useHttp({
        method: "DELETE",
        url: `/roles/${id}`,
      });
    } catch (error) {
      throw new Error("Failed to delete role");
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
