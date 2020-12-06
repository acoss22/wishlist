import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state = state.push({ id: action.payload.id, name: action.payload.name, price: action.payload.price});
    },
    deleteWish: (state, action) =>{
      state = state.filter((wish) => wish.id !== action.payload.id);
      return state;
    }
  },
});

export const { add, deleteWish } = wishlistSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAll = (state) => state.wishlist;

export default wishlistSlice.reducer;
