import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => (
  <Routes>
    <Route path='/' element={<DefaultLayout />}>
      <Route path='/' element={<Home />} />
    </Route>
  </Routes>
);
