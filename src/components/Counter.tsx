import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const getBackgroundColor = () => {
    const level = Math.min(count * 10, 255);
    return `rgba(${level}, ${255 - level}, ${level}, 0.5)`;
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-3 border-2 border-white rounded-lg shadow-md"
      style={{ backgroundColor: getBackgroundColor(), transition: 'background-color 0.5s ease-in-out' }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Counter: {count}</h2>
      <div className="flex gap-4">
        <Button className='bg-white font-semibold p-2 rounded-lg' onClick={increment}>
          Increment
        </Button>
        <Button className='bg-white font-semibold p-2 rounded-lg' onClick={decrement}>
          Decrement
        </Button>
        <Button className='bg-white font-semibold p-2 rounded-lg' onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;