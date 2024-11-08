import React, { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";
import useProductList from "../hook/useProductList";
import { Trash2 } from "lucide-react";

function CartItem({ item }) {
  const { productId, quantity, size } = item;
  const [cartDetail, setCartDetail] = useState([]);
  const { changeQuantity, deleteCartItem } = useProductStore();
  const { productItem } = useProductList();

  useEffect(() => {
    const findDetail = productItem.filter((i) => i.id === productId)[0];
    setCartDetail(findDetail);
  }, [productId, productItem]);

  function handleAdd() {
    changeQuantity({
      productId: productId,
      quantity: quantity + 1,
      size: size,
    });
  }

  function handleRemove() {
    changeQuantity({
      productId: productId,
      quantity: quantity - 1,
      size: size,
    });
  }

  function deleteCartItemHandler(size = null) {
    deleteCartItem({ productId: productId, size: size });
  }

  return (
    <div className="flex w-full p-3 gap-2">
      <div className="flex items-center ">
        <img src={cartDetail.image} className="w-20" alt="" />
      </div>

      <div className="flex-1 flex-col gap-2">
        <p className="text-sm">{cartDetail.name}</p>
        <p className="flex flex-col">
          RM {(cartDetail.price * quantity).toFixed(2)}
          {size ? <span>size: {size}</span> : null}
        </p>
        <div className="flex items-center justify-between">
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
          <button
            className="text-black"
            onClick={() => deleteCartItemHandler(size ? size : null)}
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
