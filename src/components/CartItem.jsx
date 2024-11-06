import React, { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";

function CartItem({ item }) {
  const { productId, quantity } = item;
  const [cartDetail, setCartDetail] = useState([]);
  const { productItem, changeQuantity } = useProductStore();

  useEffect(() => {
    const findDetail = productItem.filter((i) => i.id === productId)[0];
    setCartDetail(findDetail);
  }, [productId]);

  function handleAdd() {
    changeQuantity({ productId: productId, quantity: quantity + 1 });
  }

  function handleRemove() {
    changeQuantity({ productId: productId, quantity: quantity - 1 });
  }

  return (
    <div className="grid grid-cols-2 p-3 gap-2">
      <div className="flex items-center gap-2">
        <img src={cartDetail.image} className="w-20" alt="" />
        <p className="text-sm">{cartDetail.name}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p>RM {(cartDetail.price * quantity).toFixed(2)}</p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRemove}
            className="w-[20px] h-[20px] rounded-full bg-black text-white text-lg flex items-center justify-center"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleAdd}
            className="w-[20px] h-[20px] rounded-full bg-black text-white text-lg  flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
