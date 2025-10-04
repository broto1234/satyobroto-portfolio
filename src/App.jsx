import { createBrowserRouter, RouterProvider } from "react-router";
import {Home} from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return (
    <RouterProvider router={router} />    
  )
}