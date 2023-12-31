import { Outlet, useLocation } from "react-router-dom"

import { Sidebar } from "@/components"
import { useIsMobile, useWindowHeight } from "@/hooks"

export const AppLayout = () => {
  const { pathname } = useLocation()
  const showBottomBg = pathname === "/"
  const { height } = useWindowHeight()
  const { isMobile } = useIsMobile()

  return (
    <section
      className="md:min-h-fit md:bg-black md:rounded-xl md:p-4 h-full md:h-[560px] md:w-[860px] grid grid-rows-4 md:grid-rows-1 md:grid-cols-3"
      style={isMobile ? { minHeight: `${height}px` } : {}}
    >
      <div className="row-span-1 md:col-span-1 md:mr-4">
        <Sidebar />
      </div>
      <div className="relative row-span-3 md:col-span-2 -mt-[20%] md:mt-0 z-20">
        {showBottomBg && <div className="absolute bg-black bottom-0 w-full h-20 md:hidden" />}
        <Outlet />
      </div>
    </section>
  )
}
