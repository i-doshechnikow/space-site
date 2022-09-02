import React from "react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentification from "./routes/authentification/authentification";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((userData) => {
      if (userData) {
        createUserDocumentFromAuth(userData);
      }
      dispatch(setCurrentUser(userData));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentification />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
