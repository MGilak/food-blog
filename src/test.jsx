import React, { useState } from 'react';

function App() {
  const [elements, setElements] = useState([
    { id: 1, style: {} },
    { id: 2, style: {} },       
    { id: 3, style: {} },
    { id: 4, style: {} },
  ]);

  const handleClick = (id) => {
    const newElements = elements.map((element) => {
      if (element.id === id) {
        return { ...element, style: { backgroundColor: 'red' } };
      } else {
        return { ...element, style: {} };
      }
    });

    setElements(newElements);
  };

  return (
    <div>
      {elements.map((element) => (
        <div
          key={element.id}
          onClick={() => handleClick(element.id)}
          style={element.style}
        >
          Element {element.id}
        </div>
      ))}
    </div>
  );
}

export default App;