import { ExpenseEntity } from "@/interfaces/expense.interface";
import { UserEntity } from "@/interfaces/user.interface";
import { GroupEntity } from "@/interfaces/group.interface";
import { ShareEntity } from "@/interfaces/share.interface";
import { useHttp } from "@/composables/http.composable";

const useExpenseService = () => {
  const create = async (
    body: Partial<ExpenseEntity>
  ): Promise<ExpenseEntity> => {
    try {
      const result = await useHttp({
        method: "POST",
        url: "/expenses",
        body: body,
      });
      return result.data as ExpenseEntity;
    } catch (error) {
      throw new Error("Failed to create expense");
    }
  };

  const findAll = async (): Promise<ExpenseEntity[]> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: "/expenses",
      });
      return result as unknown as ExpenseEntity[];
    } catch (error) {
      throw new Error("Failed to fetch expenses");
    }
  };

  const findById = async (id: string): Promise<ExpenseEntity> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: `/expenses/${id}`,
      });
      return result as unknown as ExpenseEntity;
    } catch (error) {
      throw new Error("Failed to fetch expense");
    }
  };

  const updateById = async (
    id: string,
    data: ExpenseEntity
  ): Promise<ExpenseEntity> => {
    try {
      const result = await useHttp({
        method: "PATCH",
        url: `/expenses/${id}`,
        body: data,
      });
      return result as unknown as ExpenseEntity;
    } catch (error) {
      throw new Error("Failed to update expense");
    }
  };

  const deleteById = async (id: ExpenseEntity["id"]): Promise<void> => {
    try {
      await useHttp({
        method: "DELETE",
        url: `/expenses/${id}`,
      });
    } catch (error) {
      throw new Error("Failed to delete expense");
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

export default useExpenseService;
