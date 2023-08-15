import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import Layout from "../pages/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/sellspot-app",
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
    ],
  },
]);
