import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/types";
import {
  createCollection,
  deleteCollection,
  editCollection,
  fetchCollections,
} from "../thunks/collection";
import { Card } from "./cards";

export interface Collection {
  uid?: string;
  name: string;
  description: string;
  image: string;
  cards?: Card[];
}

type CollectionState = { collections: Collection[] };

const initialState: CollectionState = {
  collections: [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.collections = action.payload;
    });

    builder.addCase(deleteCollection.fulfilled, (state, action) => {
      const filteredCollection = state.collections.filter(
        (collection) => collection.uid !== action.payload
      );
      state.collections = [...filteredCollection];
    });

    builder.addCase(createCollection.fulfilled, (state, action) => {
      state.collections.push(action.payload);
    });

    builder.addCase(editCollection.fulfilled, (state, action) => {
      const filteredCollection = state.collections.filter(
        (collection) => collection.uid !== action.payload.uid
      );
      state.collections = [...filteredCollection, action.payload];
    });
  },
  reducers: {},
});
export const selectCollections = (state: RootState) => state.collection;
export default collectionSlice.reducer;
