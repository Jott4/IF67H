import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import collectionResolver from "../resolvers/collection";
import cardResolver from "../resolvers/cards";

const reducers = combineReducers({
  collection: collectionResolver,
  cards: cardResolver,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
