import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export const Router = () => (
  <Routes>
    <Route path='/' element={<DefaultLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/success' element={<Success />} />
    </Route>
  </Routes>
);
