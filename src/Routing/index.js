import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { rootLoader } from "../Pages/Home";
import About, { aboutLoader } from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    children: [],
  },
  {
    path: "team",
    element: <About />,
    // loader: aboutLoader,
  },
]);
export default router;
