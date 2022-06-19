import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/types";
import { createCard, deleteCard, editCard, fetchCards } from "../thunks/cards";

export interface Card {
  uid?: string;
  question: string;
  answer: string;
  colecoesRef?: string;
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

    builder.addCase(createCard.fulfilled, (state, action) => {
      // state.cards.push(action.payload);
    });

    builder.addCase(deleteCard.fulfilled, (state, action) => {
      const filteredCards = state.cards.filter(
        (card) => card.uid !== action.payload
      );
      state.cards = [...filteredCards];
    });

    builder.addCase(editCard.fulfilled, (state, action) => {
      const filteredCards = state.cards.filter(
        (card) => card.uid !== action.payload.uid
      );
      state.cards = [...filteredCards, action.payload];
    });
  },
  reducers: {},
});
export const selectCards = (state: RootState) => state.cards;
export default cardSlice.reducer;
