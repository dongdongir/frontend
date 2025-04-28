import { ExpenseEntity } from "./expense.interface";
import { UserEntity } from "./user.interface";

export interface ShareEntity {
  id: string;

  expenseId: ExpenseEntity["id"];

  userId: UserEntity["id"];

  amount: number;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;
}
