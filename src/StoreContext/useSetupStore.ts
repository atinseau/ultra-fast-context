import { useCallback, useRef } from "react";


type BaseStoreContext<Store> = {
  get: () => Store;
  set: (newStore: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
}

function useSetupStore<Store>(initialState: Store): BaseStoreContext<Store> {

  const store = useRef(initialState)

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>);

  const set = useCallback((newStore: Partial<typeof store['current']>) => {
    store.current = {
      ...store.current,
      ...newStore
    }
    subscribers.current.forEach(subscriber => subscriber());
  }, [])


  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => {
      subscribers.current.delete(callback);
    }
  }, [])

  return {
    get,
    set,
    subscribe
  }
}

export type {
  BaseStoreContext
}

export default useSetupStore;
