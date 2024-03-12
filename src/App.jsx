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
import Games from "./Pages/Games";
import Game from "./Pages/Game";
import Error from "./Pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Hero />} />
      <Route path="/homepage" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/esports" element={<Esports />} />
      <Route path="/games" element={<Games />} />
      <Route path="games/:title" element={<Game />} />
      <Route path="*" element={<Error />} />
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
