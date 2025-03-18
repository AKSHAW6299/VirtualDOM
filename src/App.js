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

        <h2 className="mt-8 text-2xl font-semibold text-indigo-600 mb-4">
          Explanation of `ReactDOM.render()`
        </h2>
        <pre className="text-left text-gray-800 bg-gray-100 p-4 rounded-lg shadow-md">
          {`ReactDOM.render(<Counter />, document.getElementById("root"));
          
1. ReactDOM.render(): 
  - This function is used to render a React element/component into the DOM.

2. <Counter />: 
  - This is the React component that will be rendered. React creates an instance of this component when called.

3. document.getElementById("root"): 
  - This targets the HTML element with the id "root" (usually a div in the HTML file), which is the container where the component will be rendered.`}
        </pre>
      </div>
    </div>
  );
}

// Rendering the component into the DOM
// ReactDOM.render(<Counter />, document.getElementById("root"));

export default Counter;
