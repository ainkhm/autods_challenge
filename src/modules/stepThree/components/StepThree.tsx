import { useNavigate } from "react-router-dom"
import { Button, Form } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { usePayment, useSteps, useUser } from "@/hooks"
import { schemaStepThree } from "@/schema"
import { StepThreeOptions } from "./StepThreeOptions"

export const StepThree = () => {
  const { prevStep, resetStep } = useSteps()
  const { paymentMethod, savePaymentMethod, resetPaymentMethod } = usePayment()
  const { resetUser } = useUser()
  const navigate = useNavigate()
  return (
    <Form
      validationSchema={schemaStepThree}
      defaultValues={paymentMethod}
      onSubmit={data => {
        console.log("DATA", data)
        savePaymentMethod(data)
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
