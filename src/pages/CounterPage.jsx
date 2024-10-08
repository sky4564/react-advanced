import { useState } from "react"
import Counter from "../components/Counter"
import ConRend from "../components/ConditionalRender"

export default function CounterPage() {
  const [cnt, setCnt] = useState(100)
  const [liftedItem, setLiftedItem] = useState(0)
  const [lifted, setLifted] = useState(false)

  function cntUp() {
    setCnt((cnt) => cnt + 1)
  }
  function liftUp(data) {
    setLiftedItem(data)
    setLifted(true)
  }
  function LiftedContent() {
    if (lifted)
      return (
        <div className="mt-4 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Lifted Item from child</h3>
          <p className="text-3xl font-bold text-gray-800">{liftedItem}</p>
        </div>
      )
  }

  return (
    <div className="min-h-screen bg-slate-600 p-4">
      <LiftedContent></LiftedContent>
      <ConRend condition={cnt > 105} value={cnt}></ConRend>
      <div className="max-w-md mx-auto">
        <Counter cnt={cnt} cntUp={cntUp} liftUp={liftUp} />
      </div>
    </div>
  )
}