import firebase from "firebase/app";
import {DependencyList, useMemo} from "react";

type Firestore = firebase.firestore.Firestore;
type Query = firebase.firestore.Query;

export function useQuery(
    query: (firestore: Firestore) => Query | undefined,
    deps?: DependencyList
)
{
    return useMemo(
        () => {
            return query(firebase.firestore());
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps
    )
}