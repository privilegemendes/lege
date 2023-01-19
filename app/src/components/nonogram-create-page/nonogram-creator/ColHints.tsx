import React, {FC, useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    colHints: ({gridColumns}) => ({
        display: 'grid',
        height: 100,
        gridTemplateColumns: `repeat(${gridColumns}, 20px)`,
        gridTemplateRows: '1fr',
        gap: 0,
    }),
    hint: {
        position: 'absolute',
        width: 20,
        height: 20,
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    },


}));

type StylesProps = {
    gridColumns: number
}

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

        const classes = useStyles({gridColumns: cols});

        useEffect(() => {
            // Render the component only when the colHints state variable changes
        },[colHints, gridAreas]);

        const gridColsRef = useRef<HTMLDivElement>(null);
        const gridCols = Array.from({length: cols}, (_, col) =>
            Array.from({length: 1}, (_, row) => {
                return <div
                    ref={gridColsRef}
                    key={`[${row+1},${col+1}]`}
                    style={{gridArea:`${row+1} / ${col+1} / ${row+2} / ${col+2}`}}
                    className={clsx(`[${row+1},${col+1}]`)}
                ></div>
            })
        );

        console.log('colHints', colHints);
        console.log('gridAreas', gridAreas);
        return <div className={classes.colHints}>
            {gridCols}
        </div>
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