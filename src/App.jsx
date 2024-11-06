import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Layout from "./layout/Layout";
import ShopPage from "./pages/Shop/Shop";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Category from "./pages/Category/Category";
import { useEffect } from "react";
import { useProductStore } from "./store/productStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path: ":category",
            element: <Category />,
          },
        ],
      },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  //initial
  const setProducts = useProductStore((state) => state.setProductItem);
  useEffect(() => {
    setProducts();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
