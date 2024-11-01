import { Menu, Search, ShoppingCart, Heart } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import SocialBlock from "./SocialBlock";

const NAVIGATE_MENU_ITEM = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "SHOP",
    path: "shop",
  },
  {
    title: "PRODUCTS",
    path: "products",
  },
  {
    title: "BLOG",
    path: "blog",
  },
];

function Header() {
  return (
    <header>
      <SocialBlock />
      <div className="max-w-[1280px] mx-auto px-3 py-4 flex items-center justify-between">
        <button className="sm:hidden">
          <Menu />
        </button>
        <Link to="/" className="flex-2">
          <span className="font-semibold text-2xl">Logo</span>
        </Link>
        <ul className="hidden sm:flex gap-4">
          {NAVIGATE_MENU_ITEM.map((item, index) => {
            const { title, path } = item;
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive ? "font-semibold underline underline-offset-4" : ""
                }
              >
                <li className="text-lg">{title}</li>
              </NavLink>
            );
          })}
        </ul>
        <div className="flex gap-4">
          <button>
            <Search />
          </button>
          <button className="relative">
            <Heart />
            <span className="absolute rounded-[20px] bottom-[19px] text-center left-[12px]  text-[12px] font-[500] bg-black text-white h-[18px] w-[18px]">
              2
            </span>
          </button>
          <button className="relative">
            <ShoppingCart />
            <span className="absolute rounded-[20px] bottom-[19px] text-center left-[12px]  text-[12px] font-[500] bg-black text-white h-[18px] w-[18px]">
              8
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
