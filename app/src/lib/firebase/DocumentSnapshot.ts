import firebase from "firebase/app";
import {DocumentData} from "./DocumentData";

export type DocumentSnapshot<T = DocumentData> = firebase.firestore.DocumentSnapshot<T>;