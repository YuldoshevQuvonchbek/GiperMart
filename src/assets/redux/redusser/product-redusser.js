import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalPrice: 0,
  count: 0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state) => {
      const count = state.products.reduce((a, b) => {
        return a + b.userPrice;
      }, 0);
      return { ...state, totalPrice: count };
    },
    add: (state, actions) => {
      const idf = state.products.find((item) => item.id === actions.payload.id);
      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...actions.payload,
              userCount: 1,
              userPrice: actions.payload.price,
            },
          ],
        };
      }
      return state;
    },
    remove: (state, actions) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== actions.payload.id
        ),
      };
    },
    toggleanmount: (state, actions) => {
      if (actions.payload.type === "add") {
        const newProducts = state.products.map((item) => {
          if (item.id === actions.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
      if (actions.payload.type === "remove") {
        const newProducts = state.products.map((item) => {
          if (item.id === actions.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
    },
  },
});
export default product.reducer;
export const { add, remove, toggleanmount, totalPrice } = product.actions;
