import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import ParkingList from "./ParkingList";
import Stats from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleItems = (items) => {
    setItems((prevItems) => [...prevItems, items]);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearList = () => setItems([]);

  const numOfPackedItems = items.reduce(
    (prev, cur) => (cur.packed ? prev + 1 : prev),
    0
  );

  // alternative
  // const numOfPackedItems = items.filter((item) => item.packed).length

  const numOfItems = items.length;

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleItems} />
      <ParkingList
        items={items}
        actions={[handleDelete, handleToggleItem]}

        
        clearList={clearList}
      />
      <Stats numOfItems={numOfItems} numOfPackedItems={numOfPackedItems} />
    </div>
  );
};

export default App;
