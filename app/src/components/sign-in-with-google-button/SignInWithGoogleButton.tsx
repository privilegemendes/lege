import * as React from 'react';
import {FC} from 'react';
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";

import {useSignInWithGoogleCallback, useUser} from "../../contexts/authentication/authentication-context";

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
