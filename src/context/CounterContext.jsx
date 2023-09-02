// 1 - criar context

import { createContext, useState } from "react";

export const CounterContext = createContext(5);


// 2 - criar provider
export const CounterContextProvider = ({children}) => {
  const [counter, setCounter] = useState();

  return (
    <CounterContext.Provider value={{counter, setCounter}} >
      {children}
    </ CounterContext.Provider>

  )
}