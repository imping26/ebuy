import { X } from "lucide-react";
import React from "react";
import { useProductStore } from "../store/productStore";
import CartItem from "../components/CartItem";
import { cn } from "../lib/utils";

function CartTab() {
  const store = useProductStore();

  const TotalCartAmount = store.cartItem.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const itemLength = store.cartItem.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  function checkoutHandler() {
    console.log("checking out..");
    console.log(store.cartItem);
  }

  return (
    <>
      <div
        className={`fixed z-20 top-0 right-0 bg-white w-full sm:w-96 shadow-2xl h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${
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
          <div className="font-semibold p-2">
            TOTAL : RM {TotalCartAmount.toFixed(2)}
          </div>
          <button
            onClick={checkoutHandler}
            className="bg-black text-white font-bold"
          >
            CHECKOUT ({itemLength})
          </button>
        </div>
      </div>
      <div
        onClick={() => store.toggleCartTab()}
        className={cn(
          `fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-black/30 `,
          store.cartTabIsOpen ? " " : "hidden"
        )}
      ></div>
    </>
  );
}

export default CartTab;
