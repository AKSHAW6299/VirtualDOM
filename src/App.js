import React, { useState } from "react";
import ReactDOM from "react-dom";

// Component
function Counter() {
  // State variable to keep track of the count
  const [count, setCount] = useState(0);

  // Handle button click to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm text-center">
        <h1 className="text-3xl font-semibold text-indigo-600 mb-4">
          Virtual DOM Example
        </h1>
        <p className="text-xl font-medium text-gray-800 mb-6">
          Count: <span className="text-4xl text-blue-600">{count}</span>
        </p>
        <button
          onClick={incrementCount}
          className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-200 ease-in-out shadow-lg focus:outline-none"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

// Rendering the component into the DOM
// ReactDOM.render(<Counter />, document.getElementById("root"));

export default Counter;
