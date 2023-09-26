import { StateCreator } from "zustand"

export interface Payment {
  type: string
  name: string
  email?: string | null
  cardNumber?: number | null
  expDate?: number | null
  securityCode?: number | null
}

export interface PaymentSlice {
  paymentMethod: Payment[]
  savePaymentMethod(payment: Payment[]): void
  resetPaymentMethod(): void
}

const initialPaymentState: Payment = { type: "", name: "" }

export const createPaymentSlice: StateCreator<PaymentSlice> = set => ({
  paymentMethod: [initialPaymentState],

  savePaymentMethod: paymentMethod => set(() => ({ paymentMethod })),
  resetPaymentMethod: () => set(() => ({ paymentMethod: [initialPaymentState] }))
})
