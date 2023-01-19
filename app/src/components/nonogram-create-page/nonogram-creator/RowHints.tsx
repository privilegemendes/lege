import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    rowHints: ({gridRows}) => ({
        display: 'grid',
        width: 100,
        gridTemplateRows: `repeat(${gridRows}, 20px)`,
        gridTemplateColumns: '1fr',
        gap: 0,
        marginTop: 7,
        //marginBottom: 4,

    }),


}));

type StylesProps = {
    gridRows: number
}

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

    const classes = useStyles({gridRows: rows});

        useEffect(() => {
            // Render the component only when the colHints state variable changes
        },[rowHints]);

        const gridRowsRef = useRef<HTMLDivElement>(null);
        const gridRows = Array.from({length: 1}, (_, col) =>
            Array.from({length: rows}, (_, row) => {
                return (
                    <>
                        <div
                            ref={gridRowsRef}
                            key={`[${row+1},${col+1}]`}
                            style={{gridArea:`${row+1} / ${col+1} / ${row+2} / ${col+2}`,
                                background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
                                width: 100,
                                height: 10,
                                alignItems: 'center',
                            }}
                            className={clsx(`[${row+1},${col+1}]`)}
                        ></div>
                        {rowHints[row] &&
                            rowHints[row].map((hint, index) => (
                                <div
                                    key={`hint-${row}-${index}`}
                                    style={{gridArea:`${row+1} / ${index+1} / ${row+2} / ${index+2}`,
                                        alignItems: 'center',
                                        fontSize: '10px',
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}
                                >
                                    {hint}
                                </div>
                            ))
                        }
                    </>
                )
            })
        );

    return <div className={classes.rowHints}>
        {gridRows}
    </div>
}


