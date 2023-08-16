import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import ProductPage from "../pages/productPage/ProductPage";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Layout from "../pages/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/sellspot-app",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <ProductPage />,
        path: "/sellspot-app/product",
      },
      {
        path: `/sellspot-app/:id`,
        element: <CategoryPage />,
      },
    ],
  },
]);