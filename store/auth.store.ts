import { authFieldBody, AuthFieldType } from "@/lib/types/authFieldTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { z } from "zod";

const AuthStoreContents = authFieldBody.extend({
  setEmail: z.function().args(z.string()),
  setPassword: z.function().args(z.string()),
});

type AuthStoreType = z.infer<typeof AuthStoreContents>;

export const userAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      email: "",
      password: "",
      setEmail: (email: string) => set({ email }),
      setPassword: (password: string) => set({ password }),
    }),
    { name: "userStore" },
  ),
);
