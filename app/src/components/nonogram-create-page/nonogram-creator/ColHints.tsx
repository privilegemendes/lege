import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles<Theme>( {
    colHint: {
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
        position: 'relative',
    },
    colHintNumber: {
        fontSize: '1fr',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        textOrientation: 'upright',
        writingMode: 'vertical-rl',
    }


});

interface Props {
    colHints: {value: number, run: number}[][];
    cols: number;
    gridAreas: string[];
}

export const ColHints: FC<Props> =
    (
        {
            colHints,
            cols,
            gridAreas,
        }
    ) => {

        const classes = useStyles();

        useEffect(() => {
            // Render the component only when the colHints state variable changes
        },[colHints, gridAreas]);


        const runValue = colHints.map(obj => obj.map(item => item.run));

        const gridColsRef = useRef<HTMLDivElement>(null);
        const gridCols = Array.from({length: cols}, (_, col) =>
            Array.from({length: 1}, (_, row) => {
                return (
                    <div className={classes.colHint}
                         key={`colHint-${row}-${col}`}
                    >
                        <div ref={gridColsRef}
                             className={classes.colHintNumber}
                        >
                            {runValue[col]}
                        </div>
                    </div>
                )
            })
        );
        return <>
            {gridCols}
        </>
    }