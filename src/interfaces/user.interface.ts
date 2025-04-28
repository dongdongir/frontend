import { RoleEntity } from "./role.interface";

export interface UserEntity {
  id: string;
  firstname: string;
  lastname: string;
  mobile: string;
  password: string;
  rolesId: RoleEntity["id"][];
  createdAt: string;
  updatedAt: string;
}
