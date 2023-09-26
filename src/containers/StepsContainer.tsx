import { StepThreeModule, StepOneModule, StepTwoModule } from "@/modules"
import { useSteps } from "@/hooks"

const stepsModules = [new StepOneModule(), new StepTwoModule(), new StepThreeModule()]

export const StepsContainer = () => {
  const { step } = useSteps()
  const currentStepModule = stepsModules[step]

  const { title, description, renderElement } = currentStepModule

  return (
    <div className="h-full flex flex-col px-6 md:px-16 pt-8 pb-4">
      <h1 className="rounded-t-xl pt-10 pb-4 px-6 md:p-0 text-2xl md:text-3xl text-[#27B053] font-bold md:mb-2">
        {title}
      </h1>
      <p className="px-6 md:px-0 pr-16 md:pr-4 text-[#27B053] tracking-tight md:mb-8 md:font-medium">{description}</p>
      {renderElement}
    </div>
  )
}