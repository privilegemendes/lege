import * as React from 'react';
import {createContext, FC, useCallback, useContext, useEffect} from 'react';
import {FirebaseAuthConsumer, FirebaseAuthProvider} from "@react-firebase/auth";
import firebase from "firebase/app";
import 'firebase/auth';
import {AuthEmission} from "@react-firebase/auth/dist/types";
import {firestoreConfig} from "../../lib/firebase/firestore.config";

const ContextRef = createContext<AuthEmission>({} as AuthEmission);

export const AuthenticationProvider: FC =
    (
        {
            children,
        },
    ) =>
    {

        return <FirebaseAuthProvider {...firestoreConfig} firebase={firebase}>
            <FirebaseAuthConsumer>
                {authEmission => (<ContextRef.Provider
                    value={authEmission}
                >
                    <UserToFirestoreWriter>
                        {children}
                    </UserToFirestoreWriter>
                </ContextRef.Provider>)}
            </FirebaseAuthConsumer>
        </FirebaseAuthProvider>;
    };

export type GoogleUser = {
    uid: string
    displayName: string
    email: string
    emailVerified: boolean
    providerData: {
        photoURL?: string
    }[]
} & Object;

export type User = GoogleUser | ({
    uid: string
} & Object);

export function useUser()
{
    return useContext(ContextRef).user as User | null;
}

export function useIsSignedIn(): boolean
{
    return useContext(ContextRef).isSignedIn;
}

export function useSignInCallback() {
    return useCallback(async(email: string, password: string) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            return 'success';
        } catch (e) {
            return 'wrong_credentials';
        }
    }, []);
}

export function useSignInWithGoogleCallback()
{
    return useCallback(
        () => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider)
                .catch(function(error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    console.log(errorCode);

                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        },
        []
    );
}

export function useSignInAnonymouslyCallback()
{
    return useCallback(
        () => {
            firebase.auth().signInAnonymously()
                .catch(function(error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    console.log(errorCode);

                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        },
        []
    );
}

export function useSignOutCallback()
{
    return useCallback(
        () => {
            firebase.auth().signOut();
        },
        []
    );
}

const UserToFirestoreWriter: FC =
    (
        {
            children,
        }
    ) =>
    {
        useWriteUserToFirestore();
        return <>
            {children}
        </>;
    };

function useWriteUserToFirestore()
{
    const user = useUser();
    useEffect(
        () =>
        {
            if (user !== null)
                setUser(user);
        },
        [user]
    );
}

function setUser(
    user: User
)
{
    firebase.firestore().collection('users').doc(user.uid).set({
        uid: user.uid,
        email: (user as GoogleUser).email,
    });
}
