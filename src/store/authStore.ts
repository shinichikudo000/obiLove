import { create } from "zustand";

export interface AuthState {
  accessToken: string | null;
  uid: string | null;
  expiry: number | null;
  client: string | null;
  setAuth: (authData: Omit<AuthState, "setAuth" | "clearAuth">) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  uid: null,
  expiry: null,
  client: null,
  setAuth: (authData) => set(authData),
  clearAuth: () => set({ accessToken: null, uid: null, expiry: null, client: null }),
}));
