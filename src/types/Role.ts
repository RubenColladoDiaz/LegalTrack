import type { User } from "./User";

export type RoleName = "ADMIN" | "LAWYER";

export type Role = {
  name: RoleName;
  user: User;
};
