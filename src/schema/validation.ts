import * as yup from "yup"

export const schemaStepOne = yup.object().shape({
  fullName: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]*$/, "Name can only contain letters and spaces")
    .test("two-words", "Name must have at least two words", (value: any) => {
      const words = value?.split(" ")
      return words && words.length >= 2
    })
    .test("word-length", "Each word must have at least three characters", (value: any) => {
      const words = value?.split(" ")
      return words && words.every((word: any) => word.length >= 3)
    })
})

export const schemaStepTwo = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email can only contain allowed chars")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]+/, "Password must contain at least one digit"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match")
})
export const schemaStepThree = yup.object().shape({
  type: yup.string().trim().required("Type is required").min(1, "Type must not be empty"),
  email: yup.string().when("type", {
    is: "pp",
    then: yup.string().email("Enter a valid email address").required("Email is required"),
    otherwise: yup.string()
  }),
  cardNumber: yup.string().when("type", {
    is: "cc",
    then: yup
      .string()
      .matches(/^\d{16}$/, "must be 16 digits")
      .required("Card number is required"),
    otherwise: yup.string()
  }),
  expDate: yup.string().when("type", {
    is: "cc",
    then: yup
      .string()
      .matches(/^\d{4}$/, "must be 4 digits")
      .required("Expiration date is required"),
    otherwise: yup.string()
  }),
  securityCode: yup.string().when("type", {
    is: "cc",
    then: yup
      .string()
      .matches(/^\d{3}$/, "must be 3 digits")
      .required("Expiration date is required"),
    otherwise: yup.string()
  })
})

export const validateStore = async (data: any) => {
  try {
    await schemaStepOne.validate(data, { abortEarly: false })
    await schemaStepTwo.validate(data, { abortEarly: false })
    await schemaStepThree.validate(data.paymentMethod, { abortEarly: false })

    return true
  } catch (validationError) {
    return (validationError as yup.ValidationError).errors
  }
}
