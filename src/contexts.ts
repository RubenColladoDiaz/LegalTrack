import { createContext, type Dispatch, type SetStateAction } from "react";

export type UserContextType = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
