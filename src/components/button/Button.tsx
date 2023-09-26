import { classNames } from "@/utils"
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  secondary?: boolean
}

export const Button: FC<ButtonProps> = ({ className, children, secondary, ...props }) => {
  return (
    <button
      className={classNames(
        "px-7 py-2.5 bg-[#27B053] text-white rounded-lg tracking-tight font-medium hover:opacity-75",
        className,
        {
          "p-0 bg-transparent text-white hover:bg-transparent": secondary
        }
      )}
      {...props}
    >
      {children}
    </button>
  )
}
