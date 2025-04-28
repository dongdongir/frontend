import { PermissionEntity } from "./permission.interface";
import { UserEntity } from "./user.interface";

export interface RoleEntity {
  id: string;

  label: string;

  value: string;

  usersId: UserEntity["id"][];

  permissionsId: PermissionEntity["id"][];

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}
