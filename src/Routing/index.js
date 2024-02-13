import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";

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
