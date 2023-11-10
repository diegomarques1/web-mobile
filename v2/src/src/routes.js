import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import CreateAccount from "./pages/create-account/CreateAccount";
import Index from "./pages/index/Index";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
