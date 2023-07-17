import React, { useState } from "react";

export default function Hello() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <button onClick={handleCount}>Click Me {count}</button>
      <input onChange={() => console.log("masuk sini keee")} />
    </>
  );
}
