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
                         style={{ background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
                             height: 10,
                             width: 100,
                         }}
                    >
                        {rowHints[row] &&
                            rowHints[row].map((hint, index) => (
                                <div
                                    ref={gridRowsRef}
                                    key={`hint-${row}-${index}`}
                                    className={clsx(`rowHintNum:[${row+1},${col+1}]`)}
                                    style={{gridArea:`${row+1} / ${index+1} / ${row+2} / ${index+2}`,
                                        textAlign: 'center',
                                        fontSize: '8px',
                                        marginLeft: 90,
                                        fontWeight: 'bold',
                                        color: 'white',

                                    }}
                                >
                                    {hint}
                                </div>
                            ))
                        }
                    </div>
                )
            })
        );

    return <>
        {gridRows}
    </>
}


