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
    <div className="min-h-screen bg-blue-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-4xl font-semibold text-indigo-600 mb-4">
          Virtual DOM : (Reconciliation algorithm)
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Count: <span className="text-3xl text-blue-600">{count}</span>
        </p>
        <button
          onClick={incrementCount}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Increment
        </button>

        <h2 className="mt-6 text-xl font-semibold text-indigo-600">
          Explanation of `ReactDOM.render()`
        </h2>
        <div className="mt-4 text-left text-gray-700 bg-gray-100 p-4 rounded-md">
          <p>
            <strong>ReactDOM.render()</strong>:
            <br />
            This function is used to render a React element/component into the <span className="font-bold">Virtual DOM</span>.
          </p>
          <p className="py-2">
            <strong>&lt;Counter /&gt;</strong>:
            <br />
            This is the React component that will be rendered. React creates an
            instance of this component when called.
          </p>
          <p className="py-2">
            <strong>document.getElementById("root")</strong>:
            <br />
            This targets the HTML element with the id "root" (usually a div in
            the HTML file), which is the container where the component will be
            rendered.
          </p>
          
          <hr />

          <p className="py-2">
            <strong>Reconciliation algorithm</strong>:
            <br />
            It is nothing but a algorithm to compair the virtual dom with the actual dom and update the actual dom accordingly
          </p>
        </div>
      </div>
    </div>
  );
}

// Rendering the component into the DOM
// ReactDOM.render(<Counter />, document.getElementById("root"));

export default Counter;
