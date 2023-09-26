import { Module } from "../Module"

import { StepOne } from "./components"

class StepOneModule extends Module {
  constructor() {
    super()
    this.title = "Personal info"
    this.description = "Please provide your name"
    this.renderElement = <StepOne />
  }
}

export { StepOneModule }
