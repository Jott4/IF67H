import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../service/database";
import { Card } from "../resolvers/cards";

export const fetchCards = createAsyncThunk(
  "cards/fetch",
  async (uid: string) => {
    const q = query(
      collection(firestore, "cards"),
      where("colecoesRef", "==", uid)
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (item) => ({ ...item.data(), uid: item.id } as Card)
    );
  }
);
