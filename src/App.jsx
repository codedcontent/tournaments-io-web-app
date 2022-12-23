import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Tournament from "./pages/Tournament";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/tournaments",
    element: <Tournament />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
