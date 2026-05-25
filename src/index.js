import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import DestinationApp from "./DestinationApp";
import CrewApp from "./CrewApp";
import TechApp from "./TechApp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/destination",
    element: <DestinationApp />,
  },
  {
    path: "/crew",
    element: <CrewApp />,
  },
  {
    path: "/technology",
    element: <TechApp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);