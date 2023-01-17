import * as React from 'react';
import {FC, KeyboardEventHandler} from 'react';
import {makeStyles, TextField} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    InputLabelRoot: {
        color: `${theme.palette.text.primary} !important`,
    },
    InputRoot: {
        color: `${theme.palette.text.primary} !important`,
    },
}));

interface Props
{
    label?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    onKeyDown?: KeyboardEventHandler<any>
    autoFocus?: boolean
    size?: 'small' | 'medium'
    classes?: {
        InputRoot?: string
        InputNotchedOutline?: string,
        InputFocussed?: string
    }
    fullWidth?: boolean
}

export const PasswordInput: FC<Props> =
    (
        {
            label,
            onChange,
            onKeyDown,
            autoFocus,
            size,
            classes: classesProp = {},
            fullWidth,
        }
    ) =>
    {
        const classes = useStyles();
        return <TextField
            label={label}
            variant="outlined"
            type="password"
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
            size={size}
            InputLabelProps={{
                classes: {
                    root: classes.InputLabelRoot,
                },
            }}
            fullWidth={fullWidth}
            InputProps={{
                classes: {
                    root: clsx(classes.InputRoot, classesProp.InputRoot),
                    focused: classesProp.InputFocussed,
                    notchedOutline: classesProp.InputNotchedOutline,
                },
            }}
        />
    };