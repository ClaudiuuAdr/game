import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Hero from "./Pages/Hero";
import Login from "./Pages/Login";
import Esports from "./Pages/Esports";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Hero />} />
      <Route path="/homepage" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/esports" element={<Esports />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
