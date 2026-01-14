import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import CapturePage from "./pages/capture";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/capture", element: <CapturePage /> },
      {
        path: "*",
        children: [{ index: true, element: <HomePage /> }],
      },
    ],
  },
]);
