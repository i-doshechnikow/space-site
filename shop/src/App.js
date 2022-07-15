import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Directory from "./components/directory/directory";

export default () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
