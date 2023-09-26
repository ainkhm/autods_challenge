import { useSteps } from "@/hooks"
import { classNames } from "@/utils"

const stepsTitles = ["Your Name", "Your E-mail", "Payment Method"]

export const Sidebar = () => {
  const { step } = useSteps()

  return (
    <div className="w-full h-48 md:h-full relative">
      <div className="hidden md:block absolute rounded-xl h-full w-full object-cover z-10 bg-accent-color" />
      <div className="block md:hidden absolute h-full w-full object-cover z-10 bg-accent-color"></div>
      <ul className="relative p-8 pt-12 md:pt-8 flex justify-center md:flex-col z-20 gap-4 md:gap-6">
        {stepsTitles.map((stepTitle, index) => (
          <li key={index} className="flex items-center gap-4">
            <div
              className={classNames("flex items-center justify-center w-8 h-8 rounded-full border", {
                "bg-white": step === index
              })}
            >
              <span className={classNames("text-white font-semibold text-sm", { "text-marine-blue": step === index })}>
                {index + 1}
              </span>
            </div>
            <div className="hidden md:flex flex-col uppercase">
              <span className="text-xs text-cool-black">Step {index + 1}</span>
              <p className="text-alabaster text-sm font-semibold tracking-wider">{stepTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
