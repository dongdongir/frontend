import { GroupEntity } from '../../groups/entities/group.entity';
import { UserEntity } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'balances' })
export class BalanceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => GroupEntity)
  group: GroupEntity;

  @ManyToOne(() => UserEntity)
  fromUser: UserEntity;

  @ManyToOne(() => UserEntity)
  toUser: UserEntity;

  @Column('decimal')
  amount: number;

  @Column({ default: false })
  isSettlement: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}


export enum PermissionsEnum {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

import { UserEntity } from '../../users/entities/user.entity';
import { GroupEntity } from '../../groups/entities/group.entity';
import { ShareEntity } from '../../shares/entities/share.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'expenses' })
export class ExpenseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'decimal', nullable: false })
  amount: number;

  @ManyToOne(() => UserEntity)
  paidBy: UserEntity;

  @Column({ type: 'timestamp', nullable: false })
  spentAt: Date;

  @ManyToOne(() => GroupEntity)
  group: GroupEntity;

  @OneToMany(() => ShareEntity, (share) => share.expense, { cascade: true })
  shares: ShareEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}


import { UserEntity } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'groups' })
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.id, { nullable: false })
  createdBy: UserEntity;

  @ManyToMany(() => UserEntity, (user) => user)
  @JoinTable()
  members: UserEntity[];

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}





import { PermissionsEnum } from '../../enums';
import { RoleEntity } from '../../roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'permissions' })
export class PermissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column({ unique: true, enum: PermissionsEnum })
  value: PermissionsEnum;

  @ManyToMany(() => RoleEntity, (role) => role.permissions)
  role: RoleEntity[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}



import { PermissionEntity } from '../../permissions/entities/permission.entity';
import { UserEntity } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column({ unique: true })
  value: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  users: UserEntity[];

  @ManyToMany(() => PermissionEntity, (permission) => permission.role)
  permissions: PermissionEntity[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}


import { PrimaryGeneratedColumn } from 'typeorm';

export class SettlementEntity {
  @PrimaryGeneratedColumn()
  id: string;
}


import { ExpenseEntity } from '../../expenses/entities/expense.entity';
import { UserEntity } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'shares' })
export class ShareEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ExpenseEntity, (expense) => expense.shares)
  expense: ExpenseEntity;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column({ type: 'decimal', nullable: false })
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}



import { RoleEntity } from 'src/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  mobile: string;

  @Column()
  password: string;

  @ManyToMany(() => RoleEntity, (role) => role.users)
  roles: RoleEntity[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
