import type { Client } from "./Client";
import type { User } from "./User";

export type Lawyer = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  barAssociationNumber: string;
  specialization: string;
  user_id: number;
  clients: Client[];
  admin: User;
};
