import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  houses: [],
  wishlist: [],
  topRatedRentals: [],
  topRatedBuys: [],
  myHouses: [],
};

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setHouses(state, action) {
      state.houses = action.payload;
    },
    setWishlist(state, action) {
      state.wishlist = action.payload;
    },
    addToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (house) => house._id !== action.payload
      );
    },
    setTopRatedRentals(state, action) {
      state.topRatedRentals = action.payload;
    },
    setTopRatedBuys(state, action) {
      state.topRatedBuys = action.payload;
    },
    

  },
});

export const housesActions = housesSlice.actions;
export const housesReducer = housesSlice.reducer;
