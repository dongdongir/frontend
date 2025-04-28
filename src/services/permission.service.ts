import { PermissionEntity } from "@/interfaces/permission.interface";
import { useHttp } from "@/composables/http.composable";

export const usePermissionService = () => {
  const create = async (
    body: Partial<PermissionEntity>
  ): Promise<PermissionEntity> => {
    try {
      const result = await useHttp({
        method: "POST",
        url: "/permissions",
        body,
      });
      return result as unknown as PermissionEntity;
    } catch (error) {
      throw new Error("Failed to create permission");
    }
  };

  const findAll = async (): Promise<PermissionEntity[]> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: "/permissions",
      });
      return result as unknown as PermissionEntity[];
    } catch (error) {
      throw new Error("Failed to fetch permissions");
    }
  };

  const findById = async (id: string): Promise<PermissionEntity> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: `/permissions/${id}`,
      });
      return result as unknown as PermissionEntity;
    } catch (error) {
      throw new Error("Failed to fetch permission");
    }
  };

  const updateById = async (
    id: string,
    data: Partial<PermissionEntity>
  ): Promise<PermissionEntity> => {
    try {
      const result = await useHttp({
        method: "PATCH",
        url: `/permissions/${id}`,
        body: data,
      });
      return result as unknown as PermissionEntity;
    } catch (error) {
      throw new Error("Failed to update permission");
    }
  };

  const deleteById = async (id: PermissionEntity["id"]): Promise<void> => {
    try {
      await useHttp({
        method: "DELETE",
        url: `/permissions/${id}`,
      });
    } catch (error) {
      throw new Error("Failed to delete permission");
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
