import React from "react";
import Counter from "./features/counter/Counter";
import Login from "./pages/Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/partials/Header";
import Register from "./pages/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import HomePatient from "./pages/HomePatient/HomePatient";
import HomeDoctor from "./pages/HomeDoctor/HomeDoctor";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/:role" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/patient"
            element={
              <RequireAuth role={"patient"}>
                <HomePatient />
              </RequireAuth>
            }
          />
          <Route
            path="/doctor"
            element={
              <RequireAuth role={"doctor"}>
                <HomeDoctor />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
