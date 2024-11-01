import React from "react";
import { Outlet } from "react-router-dom"; 
import Header from "./Header";
import Footer from "./Footer";
import CartTab from "./CartTab";

function Layout() {
  return (
    <>    
    <div className="flex flex-col h-screen">
      <main className="flex-grow">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
    <CartTab/>
    </>
  );
}

export default Layout;
