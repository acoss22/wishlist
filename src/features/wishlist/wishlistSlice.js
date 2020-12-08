import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [{
    id: 1,
    name: "A Promised Land", 
    price: 15, url: "https://cutt.ly/dhQyXFY",
    description: "Book by Barack Obama" }],
  reducers: {
    add: (state, action) => {
      state = state.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        url: action.payload.url,
        description: action.payload.description,
      });
    },
    update: (state, action) => {
      state = state.filter((wish) => wish.id != action.payload.id);
      // state = state.push({
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   price: action.payload.price,
      //   url: action.payload.url,
      //   description: action.payload.description,
      // });
    },
    deleteWish: (state, action) => {
      state = state.filter((wish) => wish.id != action.payload.id);
      return state;
    },
  },
});

export const { add, update, deleteWish } = wishlistSlice.actions;

export const selectAll = (state) => state.wishlist;


export default wishlistSlice.reducer;
