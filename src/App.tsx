import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={() => setCount((count) => count + 1)} className="border border-gray-500 rounded-lg px-3 py-1">
        count is {count}
      </button>
    </div>
  );
}

export default App;
