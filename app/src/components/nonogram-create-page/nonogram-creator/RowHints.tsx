import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles<Theme>({
    rowHint: {
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
        position: 'relative',
    },
    rowHintNumber: {
        fontSize: '1fr',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        top: 2,
        right: 0,
    }
});


interface Props {
    rowHints: {value: number, run: number}[][];
    rows: number;
    gridAreas: string[];
}

export const RowHints: FC<Props> =
    (
        {
            rowHints,
            rows,
            gridAreas,
        }
    ) => {

    const classes = useStyles();

        useEffect(() => {
            // Render the component only when the colHints state variable changes
        },[rowHints, gridAreas]);

        const runValue = rowHints.map(obj => obj.map(item => item.run));

        const gridRowsRef = useRef<HTMLDivElement>(null);
        const gridRows = Array.from({length: 1}, (_, col) =>
            Array.from({length: rows}, (_, row) => {
                return (
                    <div className={classes.rowHint}
                         key={`rowHint-${row}-${col}`}
                    >
                        { runValue[row]&& runValue[row].map((item) =>
                            <div ref={gridRowsRef}
                                 className={classes.rowHintNumber}
                            >
                                {item}
                            </div>
                        )}
                    </div>
                )
            })
        );

    return <>
        {gridRows}
    </>
}


