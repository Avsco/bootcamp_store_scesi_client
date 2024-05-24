import { StateCreator } from "zustand";

export interface UserSlice {
  user: any;
  setUser: () => void;
}

const initialValues = {
  user: 1,
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
) => ({
  ...initialValues,
  setUser: () => set((state) => ({})),
});
