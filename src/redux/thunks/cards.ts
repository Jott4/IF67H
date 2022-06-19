import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
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

export const createCard = createAsyncThunk(
  "cards/create",
  async (card: Card) => {
    const { question, answer, colecoesRef } = card;

    const { id } = await addDoc(collection(firestore, "cards"), {
      question,
      answer,
      colecoesRef: colecoesRef,
    });

    return {
      ...card,
      uid: id,
    };
  }
);

export const deleteCard = createAsyncThunk(
  "cards/delete",
  async (uid: string) => {
    await deleteDoc(doc(firestore, `cards/${uid}`));
    return uid;
  }
);

export const editCard = createAsyncThunk(
  "cards/edit",
  async (payload: { newCard: Card; uid: string }) => {
    const { question, answer, colecoesRef } = payload.newCard;

    const cardRef = doc(firestore, `cards/${payload.uid}`);

    await updateDoc(cardRef, {
      question,
      answer,
    });

    return {
      ...payload.newCard,
      uid: payload.uid,
    };
  }
);
