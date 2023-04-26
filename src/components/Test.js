import { useState, useReducer } from "react"
import { useImmer, useImmerReducer } from "use-immer"
import TestComponent from "./TestComponent"
import TestDispatchContext from "../TestDispatchContext"
import TestStateContext from "../TestStateContext"

export default function Test() {
  //   const [counter, setCounter] = useState(0)

  //*****useReducer*******

  //   const initialState = {
  //     counter: 0,
  //     message: "no value",
  //   }

  //   function reducerFunction(state, action) {
  //     switch (action.type) {
  //       case "counter-increase":
  //         return { counter: state.counter++, message: "It is increased" }
  //       case "counter-decrease":
  //         return { counter: state.counter--, message: "It is decreased" }
  //       case "counter*2":
  //         return { counter: state.counter * 2, message: "It is doubled" }
  //     }
  //   }

  //   const [state, reduceF] = useReducer(reducerFunction, initialState)

  //-----userImmer-----

  // we need an object for useImmer initial state passed to it.

  //   const [state, updateState] = useImmer({ counter: 0, message: "No message" })

  //-----useImmerReducer-----

  // const initialState = {
  //     counter: 0,
  //     message: "no value",
  //   }

  //   function reducerFunction(state, action) {
  //     switch (action.type) {
  //       case "counter-increase":
  //         return { counter: state.counter++, message: "It is increased" }
  //       case "counter-decrease":
  //         return { counter: state.counter--, message: "It is decreased" }
  //       case "counter*2":
  //         return { counter: state.counter * 2, message: "It is doubled" }
  //     }
  //   }

  //   const [state, reduceF] = useReducer(reducerFunction, initialState)

  // useImmerReducer

  const initialState = {
    counter: 0,
    message: "No message",
  }

  //   use void if you return the draft without assigning to it.
  //   every case should have a return!!!
  const reduceFunction = (draft, action) => {
    switch (action.type) {
      case "increase":
        // return void draft.counter++
        draft.counter = draft.counter + 1
        return

      case "decrease":
        draft.counter = draft.counter - 1
        return

      // return void draft.counter--
      case "double":
        // return void draft.counter * 2
        draft.counter = draft.counter * 2
        return
    }
  }
  const [state, dispatch] = useImmerReducer(reduceFunction, initialState)

  return (
    <TestDispatchContext.Provider value={dispatch}>
      <TestStateContext.Provider value={state}>
        <section className="d-flex justify-content-center align-items-center">
          {/* useState */}
          {/* <button onClick={() => setCounter((prev) => ++prev)}>Increase</button>
      <button onClick={() => setCounter((prev) => --prev)}>Decrease</button> */}
          {/* <p>{counter}</p> */}

          {/* useReducer */}
          {/* <button onClick={() => reduceF({ type: "counter-increase" })}>Increase</button>
      <button onClick={() => reduceF({ type: "counter-decrease" })}>Decrease</button>
      <button onClick={() => reduceF({ type: "counter-double" })}>Double</button> */}
          {/* <p>{state.counter}</p>
      <p>{state.message}</p> */}

          {/* useImmer */}
          {/* <button
        onClick={() =>
          updateState((draft) => {
            draft.counter = draft.counter + 1
          })
        }
      >
        Increase
      </button>
      <button
        onClick={() =>
          updateState((draft) => {
            draft.counter = draft.counter - 1
          })
        }
      >
        Decrease
      </button>
      <button
        onClick={() =>
          updateState((draft) => {
            draft.counter = draft.counter * 2
          })
        }
      >
        Double
      </button>
      <p>{state.counter}</p> */}

          {/* useImmerReducer */}
          <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
          <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
          <button onClick={() => dispatch({ type: "double" })}>Double</button>
          <p>{state.counter}</p>
          <p>{state.message}</p>
          <TestComponent />
        </section>
      </TestStateContext.Provider>
    </TestDispatchContext.Provider>
  )
}
