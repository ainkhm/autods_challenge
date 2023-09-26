import { Button, Field, Form } from "@/components"
import { schemaStepOne } from "@/schema"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { useUser, useSteps } from "@/hooks"

export const StepOne = () => {
  const { user, saveUser } = useUser()
  const { nextStep } = useSteps()

  return (
    <Form
      validationSchema={schemaStepOne}
      defaultValues={user}
      onSubmit={data => {
        saveUser(data)
        nextStep()
      }}
      className="h-full"
    >
      <FormLayout>
        <Field
          name="fullName"
          label="Name"
          placeholder="e.g. Andrey Khmelovsky"
          options={{
            required: true
          }}
          inputMode="text"
        />
        <ButtonsLayout>
          <Button type="submit">Next Step</Button>
        </ButtonsLayout>
      </FormLayout>
    </Form>
  )
}
