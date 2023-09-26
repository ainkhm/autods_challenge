import { ChangeEvent, useState, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { Field } from "@/components"

import { paymentOptions } from "../data"

import { StepThreeOptionItem } from "./StepThreeOptionItem"
import { Payment } from "slices"

export const StepThreeOptions = () => {
  const {
    formState: { defaultValues: paymentMethod },
    watch,
    setValue
  } = useFormContext<Payment>()

  const [selectedMethod, setSelectedMethod] = useState(paymentMethod?.type)

  useEffect(() => {
    const subscription = watch(({ type }) => {
      setSelectedMethod(type)
    })

    return () => subscription.unsubscribe()
  }, [watch])

  const handleChange = (event: ChangeEvent<HTMLInputElement>, option: { type: string }) => {
    if (event.target.checked) {
      setValue("type", option.type)
    }
  }

  const methodType = (method: string) => selectedMethod === method

  return (
    <>
      <ul className="flex flex-col gap-4">
        {paymentOptions.map(({ name, type }) => (
          <li key={`method_${type}`}>
            <StepThreeOptionItem
              name={name}
              type={type}
              isSelected={type === selectedMethod}
              onChange={event => handleChange(event, { type })}
            />
          </li>
        ))}
      </ul>
      {(methodType("pp") && (
        <Field
          name="email"
          label="PayPal Address"
          placeholder="e.g. andrey@autods.com"
          options={{ required: true }}
          inputMode="email"
        />
      )) ||
        (methodType("cc") && (
          <>
            <Field
              name="cardNumber"
              label="Card Number"
              placeholder="1234 1234 1234 1234"
              options={{ required: true }}
              inputMode="text"
            />
            <div className="grid grid-cols-2 gap-4">
              <Field
                name="expDate"
                label="Expiration Date"
                placeholder="MM / YY"
                options={{ required: true }}
                inputMode="text"
              />
              <Field
                name="securityCode"
                label="Sucurity code"
                placeholder="CVC"
                options={{ required: true }}
                inputMode="text"
              />
            </div>
          </>
        ))}
    </>
  )
}
