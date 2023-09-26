import { Module } from "../Module"

import { StepThree } from "./components"

class StepThreeModule extends Module {
  constructor() {
    super()
    this.title = "Pick add-ons"
    this.description = "Add-ons help enhance your gaming experience."
    this.renderElement = <StepThree />
  }
}

export { StepThreeModule }
