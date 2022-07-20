import React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const App = () => {
  return <Counter />;
};

// reactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
