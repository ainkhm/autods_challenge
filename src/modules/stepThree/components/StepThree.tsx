import { useNavigate } from "react-router-dom"
import { Button, Form } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { usePayment, useSteps, useUser } from "@/hooks"
import { schemaStepThree, schemaStepTwo, schemaStepOne, validateStore } from "@/schema"
import { StepThreeOptions } from "./StepThreeOptions"

export const StepThree = () => {
  const { prevStep, resetStep } = useSteps()
  const { paymentMethod, savePaymentMethod, resetPaymentMethod } = usePayment()
  const { resetUser, user } = useUser()
  const navigate = useNavigate()

  const formData = Object.assign({}, user, { paymentMethod: paymentMethod })

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

  console.log("user", formData)
  return (
    <Form
      validationSchema={schemaStepThree}
      defaultValues={paymentMethod}
      onSubmit={data => {
        savePaymentMethod(data)
        submitForm(formData)
        resetUser()
        resetPaymentMethod()
        resetStep()
        navigate("/thank-you")
      }}
      className="h-full"
    >
      <FormLayout>
        <StepThreeOptions />
        <ButtonsLayout>
          <Button secondary onClick={prevStep}>
            Go Back
          </Button>
          <Button type="submit">Confirm</Button>
        </ButtonsLayout>
      </FormLayout>
    </Form>
  )
}
