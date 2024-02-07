import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";
import Error from "./components/Error";
import Banner from "./components/Banner";
import ShoppingCartItem from "./components/ShoppingCartItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Cart" element={<ShoppingCart />} />
      <Route path="/Cart/:id" element={<ShoppingCartItem />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="Banner" element={<Banner />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
