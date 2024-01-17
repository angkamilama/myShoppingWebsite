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
import Shop from "./components/Shop";
import Error from "./components/Error";
import Banner from "./components/Banner";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Shop" element={<Shop />} />
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
