import { Module } from "../Module"

import { StepTwo } from "./components"

class StepTwoModule extends Module {
  constructor() {
    super()
    this.title = "Personal info"
    this.description = "Please provide your email & password"
    this.renderElement = <StepTwo />
  }
}

export { StepTwoModule }
