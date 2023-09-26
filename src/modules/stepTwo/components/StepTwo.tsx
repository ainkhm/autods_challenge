import { Button, Field, Form } from "@/components"
import { schemaStepTwo } from "@/schema"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { useUser, useSteps } from "@/hooks"

export const StepTwo = () => {
  const { user, saveUser } = useUser()
  const { prevStep, nextStep } = useSteps()

  return (
    <Form
      validationSchema={schemaStepTwo}
      defaultValues={user}
      onSubmit={data => {
        saveUser(data)
        nextStep()
      }}
      className="h-full"
    >
      <FormLayout>
        <Field
          name="email"
          label="Email Address"
          placeholder="e.g. andrey@autods.com"
          options={{ required: true }}
          inputMode="email"
        />
        <Field
          name="password"
          label="Password"
          placeholder="e.g. s56!0A"
          options={{ required: true }}
          type="password"
          inputMode="text"
        />
        <Field
          name="confirmPassword"
          label="Confirm Password"
          options={{ required: true }}
          placeholder="confirm password"
          inputMode="text"
          type="password"
        />
        <ButtonsLayout>
          <Button secondary onClick={prevStep}>
            Go Back
          </Button>
          <Button type="submit">Next Step</Button>
        </ButtonsLayout>
      </FormLayout>
    </Form>
  )
}
