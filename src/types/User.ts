import type { Role } from "./Role";

export type User = {
  id: number;
  username: string;
  email: string;
  role: Role;
  avatar: string;
  lawyerId: number;
};
