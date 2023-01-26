import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {v4 as uuid} from "uuid";

const useStyles = makeStyles<Theme>( {
    colHint: {
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
        position: 'relative',
    },
    colHintNumber: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
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
                         key={uuid()}
                         style={{gridArea:`${row+1} / ${col+1} / ${row+2} / ${col+2}`}}
                    >
                        { runValue[col]&& runValue[col].map((item) =>
                            <div ref={gridColsRef}
                                 className={classes.colHintNumber}
                                 key={uuid()}
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