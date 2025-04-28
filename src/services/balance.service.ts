import { useHttp } from "@/composables/http.composable";
import { BalanceEntity } from "@/interfaces/balance.interface";

const useBalanceService = () => {
  const create = async (body: BalanceEntity): Promise<BalanceEntity> => {
    try {
      const result = await useHttp({
        method: "POST",
        url: "/balances",
        body,
      });
      return result as unknown as BalanceEntity;
    } catch (error) {
      throw new Error("Failed to create balance");
    }
  };

  const findAll = async (): Promise<BalanceEntity[]> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: "/balances",
      });
      return result as unknown as BalanceEntity[];
    } catch (error) {
      throw new Error("Failed to fetch balances");
    }
  };

  const findById = async (id: BalanceEntity["id"]): Promise<BalanceEntity> => {
    try {
      const result = await useHttp({
        method: "GET",
        url: `/balances/${id}`,
      });
      return result as unknown as BalanceEntity;
    } catch (error) {
      throw new Error("Failed to fetch balance");
    }
  };

  const updateById = async (
    id: BalanceEntity["id"],
    data: BalanceEntity
  ): Promise<BalanceEntity> => {
    try {
      const result = await useHttp({
        method: "PUT",
        url: `/balances/${id}`,
        body: data,
      });
      return result as unknown as BalanceEntity;
    } catch (error) {
      throw new Error("Failed to update balance");
    }
  };

  const deleteById = async (id: BalanceEntity["id"]): Promise<void> => {
    try {
      await useHttp({
        method: "DELETE",
        url: `/balances/${id}`,
      });
    } catch (error) {
      throw new Error("Failed to delete balance");
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

export default useBalanceService;
