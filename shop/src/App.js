import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Directory from "./components/directory/directory";

const Shop = () => <div>shop</div>;

export default () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
