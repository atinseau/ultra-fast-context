import { memo, useState } from "react";


const List = memo(() => {
  const [list, setList] = useState<string[]>([]);

  return <div>
    <ul>
      {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
    <button onClick={() => setList([...list, "Item" + Date.now()])}>Add Item</button>
  </div>
})

export default List;