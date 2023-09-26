import { FC, useEffect } from "react"
import { usePayment, useSteps, useUser } from "@/hooks"
import { validateStore } from "@/schema"

export const ThankYou: FC = () => {
  const { resetStep } = useSteps()
  const { resetPaymentMethod, paymentMethod } = usePayment()
  const { resetUser, user } = useUser()

  const formData = Object.assign({}, user, { paymentMethod: paymentMethod })

  useEffect(() => {
    const submitForm = async (data: any) => {
      try {
        const isValid = await validateStore(data)
        if (isValid) {
          console.log("Object is valid", data)
        } else {
          console.error("Validation errors:", isValid)
        }
      } catch (error) {
        console.error("Validation error:", error)
      }
    }
    submitForm(formData)
    resetStep()
    resetUser()
    resetPaymentMethod()
  }, [])
  return (
    <div className="h-full w-full flex md:items-center px-6 md:px-16">
      <div className="bg-[#1B1B1B] h-fit flex flex-col items-center px-8 py-20 rounded-lg">
        <h1 className="text-[#27B053] font-bold text-3xl mb-4">Thank you!</h1>
        <p className="text-white text-center tracking-tight">
          Thanks for confirming the form! I hope you have fun using my app. If you ever need suport, please feel free to
          email me at a.i.khmelovsky@gmail.com
        </p>
      </div>
    </div>
  )
}
