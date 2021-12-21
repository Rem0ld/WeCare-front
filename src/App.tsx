import React from "react";
import Counter from "./features/counter/Counter";
import Login from "./pages/Login/Login";

function App(): JSX.Element {
  return (
    <div className="App">
      <Counter />
      <Login />
    </div>
  );
}

export default App;
