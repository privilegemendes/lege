import firebase from "firebase/app";
import {DependencyList} from "react";
import {useQuery} from "./useQuery";
import {useCollection} from "react-firebase-hooks/firestore";

type Firestore = firebase.firestore.Firestore;
type Query = firebase.firestore.Query;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;
type DocumentData = firebase.firestore.DocumentData;
type FirebaseError = firebase.FirebaseError;

export function useList(
    query: (firestore: Firestore) => Query | undefined,
    deps?: DependencyList
): [QueryDocumentSnapshot<DocumentData>[] | undefined, FirebaseError | undefined]
{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const myQuery = useQuery(query, deps);
    const [value, loading, error] = useCollection(myQuery);
    return [
        value?.docs,
        error,
    ];
}