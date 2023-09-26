import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AppLayout } from "@/layouts"
import { StepsContainer } from "@/containers"
import { ThankYou } from "@/components"
import { useWindowHeight } from "@/hooks"

function App() {
  const { height } = useWindowHeight()

  return (
    <BrowserRouter>
      <main
        className="md:h-auto md:py-12 md:grid md:place-content-center bg-[#1B1B1B]"
        style={{ minHeight: `${height}px` }}
      >
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<StepsContainer />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
