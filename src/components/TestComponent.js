import { useContext, useEffect } from "react"
import TestDispatchContext from "../TestDispatchContext"

export default function TestComponent() {
  const testDispatch = useContext(TestDispatchContext)

  function increase() {
    testDispatch({ type: "increase" })
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
