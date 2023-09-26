import { useStore } from "@store"

export const usePayment = () => {
  const { paymentMethod, savePaymentMethod, resetPaymentMethod } = useStore(
    ({ paymentMethod, savePaymentMethod, resetPaymentMethod }) => ({
      paymentMethod,
      savePaymentMethod,
      resetPaymentMethod
    })
  )

  return { paymentMethod, savePaymentMethod, resetPaymentMethod }
}

