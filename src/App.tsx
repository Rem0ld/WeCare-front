import React from "react";
import Counter from "./features/counter/Counter";
import Login from "./pages/Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/partials/Header";
import Register from "./pages/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/counter"
            element={
              <RequireAuth>
                <Counter />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
