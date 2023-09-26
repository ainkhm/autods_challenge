import { useStore } from "@store"

export const useUser = () => {
  const { user, saveUser, resetUser } = useStore(({ user, saveUser,  resetUser }) => ({
    user,
    saveUser,
    resetUser
  }))

  return { user, saveUser, resetUser }
}
