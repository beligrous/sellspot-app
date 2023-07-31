import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUser = create(
  devtools((set) => ({
    user: "",
    addUser: (data) => set(() => ({ user: data })),
    removeUser: () => set({ user: [] }),
  }))
);
