import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import {
  createStepsSlice,
  StepsSlice,
  userSlice,
  createUserSlice,
  PaymentSlice,
  createPaymentSlice
} from "./slices"

type StoreType = StepsSlice & userSlice  & PaymentSlice

export const useStore = create<StoreType, [["zustand/devtools", never], ["zustand/persist", StoreType]]>(
  devtools(
    persist(
      (...a) => ({
        ...createStepsSlice(...a),
        ...createUserSlice(...a),
        ...createPaymentSlice(...a)
      }),
      { name: "@store" }
    )
  )
)
