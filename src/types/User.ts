import type { Role } from "./Role";

export type User = {
  username: string;
  email: string;
  role: Role;
  avatar: string;
};
