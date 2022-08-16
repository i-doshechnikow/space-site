import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentification from "./routes/authentification/authentification";
import Shop from "./routes/shop/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
      </Route>
    </Routes>
  );
};

export default App;
