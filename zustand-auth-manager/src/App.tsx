import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home></Home>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
};``

export default App;
