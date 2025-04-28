import { GroupEntity } from "./group.interface";
import { ShareEntity } from "./share.interface";
import { UserEntity } from "./user.interface";

export interface ExpenseEntity {
  id: string;

  title: string;

  description: string;

  amount: number;

  paidById: UserEntity["id"];

  spentAt: Date;

  groupId: GroupEntity["id"];

  sharesId: ShareEntity["id"][];

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;
}
