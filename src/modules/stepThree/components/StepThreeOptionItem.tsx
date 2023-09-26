import { ChangeEvent, FC } from "react"
import { classNames } from "@/utils"

import paypalLogo from "@/assets/paypal.svg"
import cardslLogo from "@/assets/credit_cards.svg"

interface StepThreeOptionItemProps {
  name: string
  type: string
  isSelected: boolean
  onChange(_: ChangeEvent<HTMLInputElement>): void
}

export const StepThreeOptionItem: FC<StepThreeOptionItemProps> = ({ name, type, isSelected, onChange }) => {
  return (
    <>
      <label
        htmlFor={name}
        className={classNames(
          "flex items-center justify-between p-4 rounded-lg border border-white cursor-pointer hover:border-[#27B053]",
          { "border-[#27B053] bg-white": isSelected }
        )}
      >
        <div className="flex items-center gap-4">
          <div className="relative h-5">
            <input
              type="radio"
              value={type}
              name="paymendMethod"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purbg-purplish-blue checked:bg-[#27B053] checked:before:bg-[#27B053]"
              id={name}
              checked={isSelected}
              onChange={onChange}
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                fill="#ffffff"
                height="14px"
                width="14px"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="4" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#27B053] font-semibold tracking-tight">{name}</p>
          </div>
        </div>
        <img src={type === "pp" ? paypalLogo : cardslLogo} alt="logo" className="w-[90px]" />
      </label>
    </>
  )
}
