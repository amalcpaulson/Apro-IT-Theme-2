
import './App.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import { Locations } from './pages/location/Location';

function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/location",
      element: <Locations />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
