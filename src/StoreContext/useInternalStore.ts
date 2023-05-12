import { useContext, useEffect, useState /*, useSyncExternalStore */ } from "react"
import { BaseStoreContext } from "./useSetupStore"

function useInternalStore<Store, SelectorOutput = undefined>(
  StoreContext: React.Context<BaseStoreContext<Store> | null>,
  selector?: (store: Store) => SelectorOutput
): [
  SelectorOutput extends undefined ? Store : SelectorOutput,
  (newValue: Partial<Store>) => void
] {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }

  const [state, setState] = useState(() => {
    return selector ? selector(store.get()) : store.get()
  })

  useEffect(() => {
    return store.subscribe(() => {
      setState(selector ? selector(store.get()) : store.get())
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // or useSyncExternalStore
  // const state = useSyncExternalStore(store.subscribe, () => {
  //   return selector ? selector(store.get()) : store.get()
  // }) as SelectorOutput extends undefined ? Store : SelectorOutput;

  return [
    state as SelectorOutput extends undefined ? Store : SelectorOutput,
    store.set
  ];
}

export default useInternalStore;