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
    <div className="min-h-screen bg-blue-100 flex justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-full text-center">
        <h1 className="text-4xl font-semibold text-indigo-600 mb-4">
          Virtual DOM : (Reconciliation algorithm)
        </h1>

        <div className="flex justify-between py-6 px-4 bg-gray-50 rounded-md shadow-lg">
          <div className="space-y-2 max-w-md">
            <ul className="text-lg text-gray-800">
              <li className="transition-transform transform hover:scale-105">1) For making our app faster</li>
              <li className="transition-transform transform hover:scale-105">2) No need to refresh the page</li>
              <li className="transition-transform transform hover:scale-105">3) Only the required part is changed</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <p className="text-lg text-gray-700">
              Count: <span className="text-3xl text-blue-600">{count}</span>
            </p>

            <button
              onClick={incrementCount}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              aria-label="Increment count"
            >
              Increment
            </button>

            <h2 className="mt-6 text-xl font-semibold text-indigo-600">
              Explanation of <code className="font-medium">ReactDOM.render()</code>
            </h2>

            <div className="bg-indigo-100 text-indigo-800 text-sm px-4 py-2 rounded-lg">
              ReactDOM.render() is used to render your React component into the DOM. It allows you to update only parts of the page without a full reload.
            </div>
          </div>
        </div>



        <div className="mt-4 text-left text-gray-700 bg-gray-100 p-4 rounded-md">
          <p>
            <strong>1) ReactDOM.render()</strong>:
            <br />
            This function is used to render a React element/component into the <span className="font-bold">Virtual DOM</span>.
          </p>
          <p className="py-2">
            <strong>2) &lt;Counter /&gt;</strong>:
            <br />
            This is the React component that will be rendered. React creates an
            instance of this component when called.
          </p>
          <p className="py-2">
            <strong>3) document.getElementById("root")</strong>:
            <br />
            This targets the HTML element with the id "root" (usually a div in
            the HTML file), which is the container where the component will be
            rendered.
          </p>

          <hr />

          <p className="py-2">
            <strong>Definition : Reconciliation algorithm</strong>
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
