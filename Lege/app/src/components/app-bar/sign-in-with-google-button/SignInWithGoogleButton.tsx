import * as React from 'react';
import {FC} from 'react';
import {Button, makeStyles} from "@material-ui/core";
import {useSignInWithGoogleCallback, useUser} from "../../../contexts/firestore-auth/firestore-auth-context";

const useStyles = makeStyles(theme => ({}));

interface LoginWithGoogleButtonProps
{
    className?: string
}

export const SignInWithGoogleButton: FC<LoginWithGoogleButtonProps> =
    (
        {
            className,
        },
    ) =>
    {
        const signInWithGoogle = useSignInWithGoogleCallback();
        const classes = useStyles();
        const user = useUser();
        if (user !== null)
            return null;
        return <Button
            onClick={signInWithGoogle}
            className={className}
        >
            Sign in
        </Button>;
    };
