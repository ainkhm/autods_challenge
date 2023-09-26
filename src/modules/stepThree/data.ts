interface PaymentOption {
  name: string
  type: string
}

export const paymentOptions: PaymentOption[] = [
  { name: "Paypal", type: "pp" },
  { name: "Debit or Credit Card", type: "cc" }
]
