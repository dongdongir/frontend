import type { IUser } from "@/types/user.interface";
import { http } from "@/utils";
import axios from "axios";

export const useUserService = () => {
  const getList = async (): Promise<IUser.GetAll.Response> => {
    return await http.get("/users");
  };
  const getById = async (id: IUser.Id): Promise<IUser.GetById.Response> => {
    try {
      return await http.get(`/users/${id}`);
    } catch (error) {
      throw handleError(error);
    }
  };

  const create = async (user: IUser.Create.Request) => {
    try {
      return await http.post("/users", user);
    } catch (error) {
      throw handleError(error);
    }
  };
  const updateById = async (id: IUser.Id, user: IUser.Update.Request) => {
    try {
      return await http.patch(`/users/${id}`, user);
    } catch (error) {
      throw handleError(error);
    }
  };
  const deleteById = async (id: IUser.Id) => {
    try {
      return await http.delete(`/users/${id}`);
    } catch (error) {
      throw handleError(error);
    }
  };

  const handleError = (error: unknown): Error => {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "خطای شبکه");
    }
    throw new Error("خطای ناشناخته");
  };
  return { getList, getById, create, updateById, deleteById };
};
