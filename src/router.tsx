import HomePage from "./pages/home";
import CapturePage from "./pages/capture";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter(
  [
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
  ],
  { basename: "/capture-test" }
);
