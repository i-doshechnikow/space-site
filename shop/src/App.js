import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in";

const Shop = () => <div>shop</div>;

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
