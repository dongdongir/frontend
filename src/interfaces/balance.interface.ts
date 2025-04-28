import { ExpenseEntity } from "./expense.interface";
import { GroupEntity } from "./group.interface";
import { UserEntity } from "./user.interface";

export interface BalanceEntity {
  id: string;

  groupId: GroupEntity["id"];

  fromUser: UserEntity;

  toUser: UserEntity;

  amount: number;

  isSettlement: boolean;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;
}
