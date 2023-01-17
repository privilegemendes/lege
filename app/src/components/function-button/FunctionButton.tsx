import * as React from 'react'
import {ComponentType, CSSProperties, FC, useCallback, useMemo, useState} from 'react'
import {Button, makeStyles, PropTypes} from "@material-ui/core"
import {ButtonLoadingIndicator} from "../button-loading-indicator/ButtonLoadingIndicator"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
    pointerCursor: {
        '& *': {
            cursor: 'pointer',
        },
    },
    label: {
        '& > :not(:first-child)': {
            marginLeft: 8,
        },
    },
    icon: {
        marginLeft: 8,
        marginTop: -3,
    },
    labelContainer: {

    },
    error: {
        backgroundColor: theme.palette.error.main,
    },
}))

type Props = {
    variant?: 'contained' | 'outlined' | 'text'
    label?: string | JSX.Element
    icon?: ComponentType<{className?: string, style?: CSSProperties}>
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (Promise<void> | void)
    disabled?: boolean
    loading?: boolean
    color?: PropTypes.Color,
    type?: 'button' | 'reset' | 'submit'
    size?: 'small' | 'medium' | 'large'
    className?: string
    error?: boolean
}

function useShowLoadingIndicator(loadingProp: boolean | undefined)
{
    const [onClickResolving, setOnClickResolving] = useState(false);
    const showLoadingIndicator = useMemo(
        () => loadingProp !== undefined
            ? loadingProp
            : onClickResolving,
        [loadingProp, onClickResolving]
    );
    return {setOnClickResolving, showLoadingIndicator};
}

export const FunctionButton: FC<Props> =
    (
        {
            variant = 'contained',
            label,
            icon = null,
            onClick: onClickProp = () => {},
            disabled = false,
            loading: loadingProp,
            color,
            type,
            size,
            className,
            error = false,
        }
    ) =>
    {
        const classes = useStyles();
        const {setOnClickResolving, showLoadingIndicator} = useShowLoadingIndicator(loadingProp);
        const onClick = useCallback(
            async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setOnClickResolving(true);
                try {
                    await onClickProp(event);
                } finally {
                    setOnClickResolving(false);
                }
            },
            [onClickProp, setOnClickResolving]
        );
        return <Button
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            color={color}
            type={type}
            size={size}
            classes={{
                root: clsx(
                    !disabled ? classes.pointerCursor : undefined,
                    error && classes.error,
                ),
                label: classes.label,
            }}
            className={className}
        >
            {
                typeof label === 'string'
                    ? <span>{label}</span>
                    : label
            }
            {icon && React.createElement(icon, {
                className: classes.icon,
                style: {
                    display: showLoadingIndicator ? 'none' : undefined,
                },
            })}
            <ButtonLoadingIndicator
                showLoadingIndicator={showLoadingIndicator}
            />
        </Button>
    };