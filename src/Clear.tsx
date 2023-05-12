import { memo } from "react";
import StoreContext from "./StoreContext";


const Clear = memo(() => {
  const [store, setStore] = StoreContext.useStore()
  return <div>
    <pre>{JSON.stringify(store, null, 2)}</pre>
    <button onClick={() => setStore({
      firstName: "",
      lastName: "",
    })}>Clear</button>
  </div>
})

export default Clear;