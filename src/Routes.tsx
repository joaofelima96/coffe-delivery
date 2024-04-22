import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmed } from "./pages/OrderConfirmed";
import { Order } from "./pages/Order";
import { Home } from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
