import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Layout from "./layout/Layout";
import CategoryPage from "./pages/Category/CategoryPage";
import ProductsPage from "./pages/Products/ProductsPage";

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
        element: <CategoryPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
