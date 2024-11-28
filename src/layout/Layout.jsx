import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartTab from "./CartTab";
import { cn } from "../lib/utils";
import { Toaster } from "sonner"; 

function Layout() { 

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className={cn("flex flex-col h-screen")}>
        <main className="flex-grow">
          <Header />
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartTab />
    </>
  );
}

export default Layout;
