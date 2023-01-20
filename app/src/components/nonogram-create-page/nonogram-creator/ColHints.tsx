import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles<Theme>(theme => ({
    hint: {
        position: 'absolute',
        width: 20,
        height: 20,
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    },


}));

interface Props {
    colHints: number[][];
    rows: number;
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

        const gridColsRef = useRef<HTMLDivElement>(null);
        const gridCols = Array.from({length: cols}, (_, col) =>
            Array.from({length: 1}, (_, row) => {
                return (
                    <div className={clsx(`colHint:[${row+1},${col+1}]`)}
                         style={{ background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)',
                             height: 100,
                             width: 10,
                         }}
                    >
                        {colHints[col] &&
                            colHints[col].map((hint, index) => (
                                <div
                                    ref={gridColsRef}
                                    key={`hint-${col}-${index}`}
                                    className={clsx(`colHintNum:[${row+1},${col+1}]`)}
                                    style={{gridArea:`${col+1} / ${index+1} / ${col+2} / ${index+2}`,
                                        fontSize: '8px',
                                        marginTop: 85,
                                        fontWeight: 'bold',
                                        color: 'white',
                                        textAlign: 'center',

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
            {gridCols}
        </>
    }


        // {colHints.map((hint, index) => {
        //     if(gridAreas[index]) {
        //         let area = gridAreas[index];
        //         let areaArray = area.split("/");
        //         let row1 = parseInt(areaArray[0]) - 1;
        //         let col1 = parseInt(areaArray[1]) - 1;
        //         let row2 = parseInt(areaArray[2]) - 1;
        //         let col2 = parseInt(areaArray[3]) - 1;
        //         let width = (col2 - col1 + 1);
        //         let height = (row2 - row1 + 1);
        //         let left = col1;
        //         let top = row1;
        //         return (
        //             <div key={index}
        //                  className={classes.hint}
        //                  style={{ width: width, height: height, left: left, top: top}}
        //             >
        //                 {hint}
        //             </div>
        //         );
        //     }
        // })}