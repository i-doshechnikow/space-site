import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home";
import Directory from "./components/directory/directory";

const Shop = () => <div>shop</div>;

const Navigation = () => (
  <div>
    <div>
      <h1>navigation bar</h1>
    </div>
    <Outlet />
  </div>
);

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
