import { PermissionsEnum } from "@/enums";
import { RoleEntity } from "./role.interface";

export interface PermissionEntity {
  id: string;

  label: string;

  value: PermissionsEnum;

  role: RoleEntity["id"][];

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}
