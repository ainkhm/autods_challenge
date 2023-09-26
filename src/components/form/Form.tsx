import { HTMLAttributes, PropsWithChildren } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, FormProvider, UseFormProps, useForm } from "react-hook-form"
import * as yup from "yup"

type FormProps<T extends FieldValues> = PropsWithChildren<Omit<HTMLAttributes<HTMLFormElement>, "onSubmit">> &
  UseFormProps<T> & {
    onSubmit(_: T): void
    validationSchema: yup.ObjectSchema<any>
  }

export const Form = <T extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
  validationSchema,
  ...props
}: FormProps<T>) => {
  const methods = useForm<T>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off" {...props}>
        {children}
      </form>
    </FormProvider>
  )
}
