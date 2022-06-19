import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/types";
import { fetchCards } from "../thunks/cards";

export interface Card {
  uid?: string;
  question: string;
  awnser: string;
}

type CardState = { cards: Card[] };

const initialState: CardState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });

    // builder.addCase(deleteCollection.fulfilled, (state, action) => {
    //   const filteredCollection = state.collections.filter(
    //     (collection) => collection.uid !== action.payload
    //   );
    //   state.collections = [...filteredCollection];
    // });

    // builder.addCase(createCollection.fulfilled, (state, action) => {
    //   state.collections.push(action.payload);
    // });

    // builder.addCase(editCollection.fulfilled, (state, action) => {
    //   const filteredCollection = state.collections.filter(
    //     (collection) => collection.uid !== action.payload.uid
    //   );
    //   state.collections = [...filteredCollection, action.payload];
    // });
  },
  reducers: {},
});
export const selectCards = (state: RootState) => state.cards;
export default cardSlice.reducer;
