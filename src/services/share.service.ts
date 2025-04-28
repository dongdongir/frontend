import { ShareEntity } from "@/interfaces/share.interface";
import { ExpenseEntity } from "@/interfaces/expense.interface";
import { UserEntity } from "@/interfaces/user.interface";
import { useHttp } from "@/composables/http.composable";

export const useShareService = () => {
  const create = async (body: Partial<ShareEntity>): Promise<ShareEntity> => {
    try {
      const result = await useHttp({
        method: "POST",
        url: "/shares",
        body,
      });
      return result as unknown as ShareEntity;
    } catch (error) {
      throw new Error("Failed to create share");
    }
  };

  const findAll = async (): Promise<ShareEntity[]> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: "/shares",
      });
      return result as unknown as ShareEntity[];
    } catch (error) {
      throw new Error("Failed to fetch shares");
    }
  };

  const findById = async (id: string): Promise<ShareEntity> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: `/shares/${id}`,
      });
      return result as unknown as ShareEntity;
    } catch (error) {
      throw new Error("Failed to fetch share");
    }
  };

  const updateById = async (
    id: string,
    data: Partial<ShareEntity>
  ): Promise<ShareEntity> => {
    try {
      const result = await useHttp({
        method: "PATCH",
        url: `/shares/${id}`,
        body: data,
      });
      return result as unknown as ShareEntity;
    } catch (error) {
      throw new Error("Failed to update share");
    }
  };

  const deleteById = async (id: ShareEntity["id"]): Promise<void> => {
    try {
      await useHttp({
        method: "DELETE",
        url: `/shares/${id}`,
      });
    } catch (error) {
      throw new Error("Failed to delete share");
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
