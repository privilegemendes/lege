import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles<Theme>( {
    colHint: {
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
        position: 'relative',
    },
    colHintNumber: {
        fontSize: '10',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
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
                const gridArea = `${row+1} / ${col+1} / ${row+2} / ${col+2}`;
                return (
                    <div className={classes.colHint}
                         key={`colHint-${row}-${col}`}
                         style={{gridArea:`${row+1} / ${col+1} / ${row+2} / ${col+2}`}}
                    >
                        { runValue[col]&& runValue[col].map((item) =>
                            <div ref={gridColsRef}
                                 className={classes.colHintNumber}
                                 style={{gridArea:`${row+1} / ${col+1} / ${row+2} / ${col+2}`}}
                            >
                                {item}
                            </div>
                        )}
                    </div>
                )
            })
        );
        return <>
            {gridCols}
        </>
    }