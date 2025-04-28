import { UserEntity } from "./user.interface";

export interface GroupEntity {
  id: string;

  name: string;

  description: string;

  createdById: UserEntity["id"];

  membersId: UserEntity["id"][];

  isActive: boolean;

  createdAt: Date;

  updatedAt: Date;
}
