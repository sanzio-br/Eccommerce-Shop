import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";
import { Register } from "./pages/Register";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Single } from "./pages/Single";
import './style.scss'
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
