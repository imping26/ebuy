import { create } from "zustand";
// import { PRODUCT_DATA } from "../data/data";
import { toast } from "sonner";
import { publicApiGet } from "../lib/api";

export const useProductStore = create((set, get) => ({
  productItem: [],
  relatedItem: [],
  recentViewItem: [],
  wishList: [],
  cartItem: [],
  cartTabIsOpen: false,
  categories: ["Men", "Women", "Accessories", "Shoes"],
  getProductData: async ({ signal, id }) => {
    const response = id
      ? await publicApiGet(`https://api.escuelajs.co/api/v1/products/${id}`)
      : await publicApiGet(
          `https://api.escuelajs.co/api/v1/products?offset=1&limit=24`
        );
    //set recent view
    if (id) {
      let recentItem = JSON.parse(localStorage.getItem("recentViews")) || [];
      recentItem = [...recentItem, response];
      //remove same id
      recentItem = recentItem.filter(
        (i, index, self) => index === self.findIndex((t) => t.id === i.id)
      );
      if (recentItem.length > 5) {
        recentItem.shift();
      }
      localStorage.setItem("recentViews", JSON.stringify(recentItem));
      set({ recentViewItem: recentItem });
    }
    return response;
  },
  getCategory: async () => {
    const response = await publicApiGet(
      `https://api.escuelajs.co/api/v1/categories?limit=2`
    );
    return response;
  },
  getCategoryItem: async ({ id }) => {
    if (id) {
      const response = await publicApiGet(
        `https://api.escuelajs.co/api/v1/categories/${id}/products?limit=12&offset=1`
      );
      return response;
    } else {
      const response = await publicApiGet(
        `https://api.escuelajs.co/api/v1/products?offset=1&limit=24`
      );

      return response;
    }
  },
  toggleCartTab: () =>
    set((state) => ({ cartTabIsOpen: !state.cartTabIsOpen })),
  addToCart: ({ item, quantity }) =>
    set((state) => {
      let productIndex;
      let updatedCartItem;
      productIndex = state.cartItem.findIndex((i) => i.id === item.id);
      if (productIndex >= 0) {
        updatedCartItem = [...state.cartItem];
        updatedCartItem[productIndex].quantity += quantity;
      } else {
        updatedCartItem = [...state.cartItem, { ...item, quantity: quantity }];
      }
      toast.success(`Successfully added ${quantity} item to cart`, {
        duration: 1000,
      });
      return {
        cartItem: updatedCartItem,
      };
    }),
  addToWishList: ({ items }) =>
    set((state) => {
      let updateWishListCart;
      const productIndex = state.wishList.findIndex((i) => i.id === items.id);
      if (productIndex >= 0) {
        updateWishListCart = state.wishList.filter((i) => i.id !== items.id);
      } else {
        updateWishListCart = [...state.wishList, items];
      }
      return { wishList: updateWishListCart };
    }),
  changeQuantity: ({ item, quantity }) =>
    set((state) => {
      let productIndex;

      productIndex = state.cartItem.findIndex((i) => {
        return i.id === item.id;
      });

      if (quantity > 0) {
        const updateCartItem = [...state.cartItem];
        updateCartItem[productIndex].quantity = quantity;
        return { cartItem: updateCartItem };
      } else {
        return {
          cartItem: state.cartItem.filter((i) => {
            return i.id !== item.id;
          }),
        };
      }
    }),
  deleteCartItem: (data) =>
    set((state) => {
      const { item } = data;
      toast.success(`Item removed`, {
        duration: 1000,
      });
      return {
        cartItem: state.cartItem.filter((i) => i.id !== item.id),
      };
    }),
}));
