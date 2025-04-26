/* eslint-disable @typescript-eslint/no-namespace */
import type { Dayjs } from "dayjs";
export interface UserModel {
  id: string;
  firstname: string;
  lastname: string;
  mobile: string;
  roles: string[];
  password: string;
  createdAt: Dayjs;
  updatedAt: Dayjs;
}
export namespace IUser {
  export type Content = UserModel;
  export type Id = UserModel["id"];
  export namespace Create {
    export type Request = Omit<UserModel, "id" | "createdAt" | "updatedAt">;
    export type Response = UserModel;
  }
  export namespace Update {
    export type Request = Omit<UserModel, "id" | "createdAt" | "updatedAt">;
    export type Response = UserModel;
  }
  export namespace GetById {
    export type Response = UserModel;
  }
  export namespace GetAll {
    export type Response = UserModel[];
  }
  export namespace Delete {
    export type Request = UserModel["id"];
  }
}
