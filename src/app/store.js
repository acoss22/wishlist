import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/wishlist/wishlistSlice';

export default configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
