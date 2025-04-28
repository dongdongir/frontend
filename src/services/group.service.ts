import { useHttp } from "@/composables/http.composable";
import { GroupEntity } from "@/interfaces/group.interface";

const useGroupService = () => {
  const create = async (data: GroupEntity): Promise<GroupEntity> => {
    try {
      const result = await useHttp({
        method: "POST",
        url: "/groups",
        body: data,
      });
      return result as unknown as GroupEntity;
    } catch (error) {
      throw new Error("Failed to create group");
    }
  };

  const findAll = async (): Promise<GroupEntity[]> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: "/groups",
      });
      return result as unknown as GroupEntity[];
    } catch (error) {
      throw new Error("Failed to fetch groups");
    }
  };

  const findById = async (id: string): Promise<GroupEntity> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: `/groups/${id}`,
      });
      return result as unknown as GroupEntity;
    } catch (error) {
      throw new Error("Failed to fetch group");
    }
  };

  const updateById = async (
    id: GroupEntity["id"],
    data: GroupEntity
  ): Promise<GroupEntity> => {
    try {
      const result = await useHttp({
        method: "PUT",
        url: `/groups/${id}`,
        body: data,
      });
      return result as unknown as GroupEntity;
    } catch (error) {
      throw new Error("Failed to update group");
    }
  };

  const deleteById = async (id: GroupEntity["id"]): Promise<void> => {
    try {
      await useHttp({
        method: "DELETE",
        url: `/groups/${id}`,
      });
    } catch (error) {
      throw new Error("Failed to delete group");
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

export default useGroupService;
