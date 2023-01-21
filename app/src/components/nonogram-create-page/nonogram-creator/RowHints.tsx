import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles<Theme>(theme => ({

}));


interface Props {
    rowHints: number[][];
    rows: number;
    cols: number;
    gridAreas: string[];
}

export const RowHints: FC<Props> =
    (
        {
            rowHints,
            rows,
            cols,
            gridAreas,
        }
    ) => {

    const classes = useStyles();

        useEffect(() => {
            // Render the component only when the colHints state variable changes
        },[rowHints]);

        const gridRowsRef = useRef<HTMLDivElement>(null);
        const gridRows = Array.from({length: 1}, (_, col) =>
            Array.from({length: rows}, (_, row) => {
                return (
                    <div className={clsx(`rowHint:[${row+1},${col+1}]`)}
                         key={`rowHint-${row}-${col}`}
                         style={{
                             background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
                             position: 'relative',
                         }}
                    >
                        <div ref={gridRowsRef}
                            // key={`hint-${col}-${index}`}
                             className={clsx(`rowHintNum:[${row+1},${col+1}]`)}
                             style={{
                                 fontSize: '1fr',
                                 fontWeight: 'bold',
                                 color: 'white',
                                 textAlign: 'center',
                                 position: 'absolute',
                                 top: 2,
                                 right: 0,
                             }}>
                            {rowHints[row] &&
                                rowHints[row].map((hint, index) => (
                                    <span>
                                        {hint}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                )
            })
        );

    return <>
        {gridRows}
    </>
}


