import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Layout from "./layout/Layout";
import ShopPage from "./pages/Shop/Shop";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Category from "./pages/Products/view/Category";
import WishlistPage from "./pages/Wishlist/WishlistPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        // children: [
        //   {
        //     path: ":category",
        //     element: <Category />,
        //   },
        // ],
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      { path: "wishlist", element: <WishlistPage /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
