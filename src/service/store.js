import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUser = create(
  devtools((set) => ({
    user: "",
    addUser: (data) => set(() => ({ user: data })),
    removeUser: () => set({ user: [] }),
  }))
);

export const useCatalogue = create(
  devtools((set) => ({
    catalogue: [],
    addCatalogue: (data) => set(() => ({ catalogue: [...data] })),
  }))
);

export const useCrumb = create((set) => ({
  crumb: [],
  addCrumb: (data) => set(() => ({ crumb: [...data] })),
  initCrumb: () => set(() => ({ crumb: [] })),
}));

export const usePath = create(
  devtools((set) => ({
    path: [],
    addPath: (data) => set((state) => ({ path: [data, ...state.path] })),
    initPath: () => set(() => ({ path: [] })),
  }))
);
