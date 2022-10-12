import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Photos />
        </Route>
        <Route>
          <Cart />
        </Route>
      </Routes>
      <h1>Home Page</h1>
    </div>
  );
}
