import { create } from "zustand";
import { PRODUCT_DATA } from "../data/data";

export const useProductStore = create((set, get) => ({
  productItem: [],
  cartItem: [],
  cartTabIsOpen: false,
  categories: ["Men", "Women", "Accessories", "Shoes"],

  setProductItem: (data) =>
    set(() => {
      //temp
      if (data === "all") return { productItem: PRODUCT_DATA };
      const filterData = PRODUCT_DATA.filter((item) => {
        return item.category.includes(data);
      }); 
      return { productItem: filterData };
    }),
  //   setCategories: () =>
  //     set(() => {
  //       console.log("renderCat.");
  //       const uniqueCategories = [
  //         ...new Set(get().productItem.flatMap((product) => product.category)),
  //       ];

  //       return { categories: uniqueCategories };
  //     }),
  toggleCartTab: () =>
    set((state) => ({ cartTabIsOpen: !state.cartTabIsOpen })),
  addToCart: (item) =>
    set((state) => {
      const productIndex = state.cartItem.findIndex(
        (i) => i.productId === item.productId
      );
      let updatedCartItem;
      if (productIndex >= 0) {
        updatedCartItem = [...state.cartItem];
        updatedCartItem[productIndex].quantity += item.quantity;
      } else {
        updatedCartItem = [
          ...state.cartItem,
          { ...item, quantity: item.quantity },
        ];
      }
      return {
        cartItem: updatedCartItem,
      };
    }),
  changeQuantity: (data) =>
    set((state) => {
      const { productId, quantity } = data;
      const productIndex = state.cartItem.findIndex(
        (i) => i.productId === productId
      );
      if (quantity > 0) {
        const updatedCartItem = [...state.cartItem];
        updatedCartItem[productIndex].quantity = quantity;
        return {
          cartItem: updatedCartItem,
        };
      } else {
        return {
          cartItem: state.cartItem.filter(
            (item) => item.productId !== productId
          ),
        };
      }
    }),
}));
