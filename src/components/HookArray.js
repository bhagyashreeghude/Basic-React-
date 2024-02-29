import React, { useState } from "react";

const HookArray = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {  value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>add a number</button>
      <ul>
        {items.map(item =>(
            <li key={item.id}> {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookArray;
