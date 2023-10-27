import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import ProductPage from "../pages/productPage/ProductPage";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import ItemsPage from "../pages/itemsPage/ItemsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Layout from "../pages/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <ProductPage />,
        path: "/product",
      },
      {
        path: `/:id`,
        element: <CategoryPage />,
        children: [
          {
            element: <CategoryPage />,
            path: "/:id/:id",
            children: [
              {
                element: <ItemsPage />,
                path: "/:id/:id/:id",
              },
            ],
          },
        ],
      },
    ],
  },
]);
