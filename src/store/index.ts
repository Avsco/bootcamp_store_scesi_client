import { create } from "zustand";
import { UserSlice, createUserSlice } from "./user.slice";

export const useBoundStore = create<UserSlice>()((...a) => ({
  ...createUserSlice(...a),
}));
