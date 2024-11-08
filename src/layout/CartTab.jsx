import { X } from "lucide-react";
import React from "react";
import { useProductStore } from "../store/productStore";
import CartItem from "../components/CartItem";

function CartTab() {
  const store = useProductStore();
 
  return (
    <div
      className={`fixed top-0 right-0 bg-white w-full sm:w-96 shadow-2xl h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${
        store.cartTabIsOpen ? "" : "translate-x-full"
      } `}
    >
      <div className="relative">
        <h2 className="w-full text-center pt-3 text-lg font-semibold">
          SHOPPING ITEMS
        </h2>
        <button
          className="absolute top-[15px] right-[15px]"
          onClick={() => store.toggleCartTab()}
        >
          <X />
        </button>
      </div>
      <div className=" overflow-y-scroll">
        {store.cartItem.length > 0 ? (
          store.cartItem.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })
        ) : (
          <div className="text-center text-sm">Cart is empty</div>
        )}
      </div>
      <div className="grid grid-cols-2 border-t-2">
        <button className="font-semibold" onClick={() => store.toggleCartTab()}>
          CLOSE
        </button>
        <button className="bg-black text-white font-bold">CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartTab;
