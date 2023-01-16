import firebase from "firebase/app";
import {DependencyList} from "react";
import {useQuery} from "./useQuery";
import {useCollection} from "react-firebase-hooks/firestore";

type Firestore = firebase.firestore.Firestore;
type Query = firebase.firestore.Query;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;
type DocumentData = firebase.firestore.DocumentData;
type FirebaseError = firebase.FirebaseError;
type QuerySnapshot<T> = firebase.firestore.QuerySnapshot<T>;

export function useFirestoreCollection(
    query: (firestore: Firestore) => Query | undefined,
    deps?: DependencyList
): [QuerySnapshot<DocumentData> | undefined, FirebaseError | undefined]
{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const myQuery = useQuery(query, deps);
    const [value, loading, error] = useCollection(myQuery);
    return [
        value,
        error,
    ];
}