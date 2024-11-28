import React, { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";
import useProductList from "../hook/useProductList";
import { Trash2 } from "lucide-react";
import { PRODUCT_DATA } from "../data/data";

function CartItem({ item }) {
  const { changeQuantity, deleteCartItem } = useProductStore();
  function handleAdd() {
    changeQuantity({ item: item, quantity: item.quantity + 1 });
  }
  function handleRemove() {
    changeQuantity({ item: item, quantity: item.quantity - 1 });
  }
  function deleteCartItemHandler(size = null) {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      deleteCartItem({ item: item });
    }
  }

  return (
    <div className="flex w-full p-3 gap-2">
      <div className="flex items-center ">
        <img src={item.images[0]} className="w-20" alt="" />
      </div>

      <div className="flex-1 flex-col gap-2">
        <p className="text-sm">{item.title}</p>
        <p className="flex flex-col">
          RM {(item.price * item.quantity).toFixed(2)}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleRemove}
              className="w-[20px] h-[20px] rounded-full bg-black text-white text-lg flex items-center justify-center"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={handleAdd}
              className="w-[20px] h-[20px] rounded-full bg-black text-white text-lg  flex items-center justify-center"
            >
              +
            </button>
          </div>
          <button
            className="text-black"
            onClick={() => deleteCartItemHandler()}
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
