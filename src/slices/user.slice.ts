import { StateCreator } from "zustand"

interface UserInfo {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export interface userSlice {
  user: UserInfo
  saveUser(_: UserInfo): void
  resetUser(): void
}

const initialInfoState = { fullName: "", email: "", password: "", confirmPassword: "" }

export const createUserSlice: StateCreator<userSlice> = set => ({
  user: initialInfoState,
  saveUser: user => set(() => ({ user })),
  resetUser: () => set(() => ({ user: initialInfoState }))
})
