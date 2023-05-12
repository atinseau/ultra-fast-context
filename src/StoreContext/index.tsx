import React, { createContext } from "react";
import useSetupStore, { BaseStoreContext } from "./useSetupStore";
import useInternalStore from "./useInternalStore";

function createStore<Store>(initialState: Store) {

  const StoreContext = createContext<BaseStoreContext<Store> | null>(null)

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return <StoreContext.Provider value={useSetupStore(initialState)}>
      {children}
    </StoreContext.Provider>
  }

  function useStore<SelectorOutput = undefined>(selector?: (store: Store) => SelectorOutput) {
    return useInternalStore<Store, SelectorOutput>(StoreContext, selector)
  }

  return {
    Provider,
    useStore,
  }
}

const ExportedStore = createStore({
  firstName: "",
  lastName: "",
})

export default ExportedStore;