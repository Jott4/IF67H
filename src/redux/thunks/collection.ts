import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../service/database";
import { Collection } from "../resolvers/collection";
import * as FileSystem from "expo-file-system";

const collectionRef = collection(firestore, "colecoes");

export const fetchCollections = createAsyncThunk(
  "collection/fetch",
  async () => {
    const collections = await getDocs(collectionRef);

    return collections.docs.map(
      (item) => ({ ...item.data(), uid: item.id } as Collection)
    );
  }
);

export const createCollection = createAsyncThunk(
  "collection/create",
  async (collection: Collection) => {
    const { name, image, description } = collection;

    const base64Img = await FileSystem.readAsStringAsync(image, {
      encoding: "base64",
    });

    const { id } = await addDoc(collectionRef, {
      name,
      image: `data:image/png;base64,${base64Img}`,
      description,
    });

    return {
      ...collection,
      uid: id,
    };
  }
);

export const editCollection = createAsyncThunk(
  "collection/edit",
  async (payload: { newCollection: Collection; uid: string }) => {
    const { name, image, description } = payload.newCollection;

    const collectionRef = doc(firestore, `colecoes/${payload.uid}`);
    let base64Img = "";
    try {
      base64Img = await FileSystem.readAsStringAsync(image, {
        encoding: "base64",
      });
    } catch (e) {
      base64Img = payload.newCollection.image;
    }

    await updateDoc(collectionRef, {
      name,
      image: `data:image/png;base64,${base64Img}`,
      description,
    });

    return {
      ...payload.newCollection,
      uid: payload.uid,
    };
  }
);

export const deleteCollection = createAsyncThunk(
  "collection/delete",
  async (uid: string) => {
    await deleteDoc(doc(firestore, `colecoes/${uid}`));
    return uid;
  }
);
