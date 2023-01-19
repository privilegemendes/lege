import React, {FC, useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {GridItem} from "./GridItem";
import {RowHints} from "./RowHints";
import {ColHints} from "./ColHints";

const useStyles = makeStyles<Theme>(theme => ({
    gridContainer:{
        width: 500,
        height: 500,
        zIndex: 0,
        margin: 'auto',
        position:'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gridTemplateRows: '1fr 3fr',
        gridColumnGap: 0,
        gridRowGap: 0,
        //background: '#131321', /* Old browsers */
    },
    empty:{
        gridArea: '1/1/2/2',

    },
    top:{
        gridArea: '1/2/2/3',

    },
    side:{
        gridArea: '2/1/3/2',

    },
    tile: {
        gridArea: '2/2/3/3',
    },
}));

interface Props {
    isRemoving: boolean;
    clickedItems: string[];
    setClickedItems: (items: string[]) => void;
}


export const NonogramCreator: FC<Props> =
    (
        {
            isRemoving,
            clickedItems,
            setClickedItems,
        }
    ) => {

        let cols = 20;
        let rows = 20;

        const classes = useStyles();

        const [rowHints, setRowHints] = useState<number[][]>([]);
        const [colHints, setColHints] = useState<number[][]>([]);

        useEffect(() => {
            setColHints(calculateHints(clickedItems).colHints);
            setRowHints(calculateHints(clickedItems).rowHints);
        }, [clickedItems]);

        console.log(clickedItems);
        console.log({rowHints, colHints});

        return <div id="gridContainer" className={classes.gridContainer}>
                <div className={classes.empty}/>
                <div className={classes.top}>
                    <ColHints
                        colHints={colHints}
                        rows={rows}
                        cols={cols}
                        gridAreas={clickedItems}
                    />
                </div>
                <div className={classes.side}>
                    <RowHints
                        rowHints={rowHints}
                        rows={rows}
                        cols={cols}
                        gridAreas={clickedItems}
                    />
                </div>
                <div className={classes.tile}>
                    <GridItem
                        className={""}
                        rows={rows}
                        cols={cols}
                        isRemoving={isRemoving}
                        clickedItems={clickedItems}
                        setClickedItems={setClickedItems}
                    />
                </div>
            </div>
};


/* Algorithm for calculating hints
To calculate the hints for a nonogram given a gridArea array with the format "rowStart/colStart/rowEnd/colEnd",
you can use the following algorithm:

1. Initialize empty rowHints and colHints arrays
2. Iterate through the gridAreas array:
    a. For each gridArea, extract the rowStart, colStart, rowEnd, and colEnd values
    b. Increase the count of the current hint in the rowHints array at the index of rowStart
    c. Increase the count of the current hint in the colHints array at the index of colStart
3. Iterate through the rowHints array:
    a. If the current count is greater than 0 and the previous count is 0, start a new hint
    b. If the current count is greater than 0, add the current count to the current hint
    c. If the current count is 0 and the previous count is greater than 0, end the current hint
4.  Iterate through the colHints array:
    a. If the current count is greater than 0 and the previous count is 0, start a new hint
    b. If the current count is greater than 0, add the current count to the current hint
    c. If the current count is 0 and the previous count is greater than 0, end the current hint
5. Return the rowHints and colHints arrays
*/

function calculateHints(gridAreas: string[]) {
    let rowHints: number[][] = new Array(20).fill(0).map(() => []);
    let colHints: number[][] = new Array(20).fill(0).map(() => []);

    for (let area of gridAreas) {
        let areaArray = area.split("/");
        let rowStart = parseInt(areaArray[0]) - 1;
        let colStart = parseInt(areaArray[1]) - 1;

        rowHints[rowStart].push(1);
        colHints[colStart].push(1);
    }

    rowHints = rowHints.map(row => {
        let hint = [];
        let count = 0;
        for (let i = 0; i < 20; i++) {
            if (row[i] === 1) {
                if (count === 0) {
                    hint.push(1);
                } else {
                    hint[hint.length - 1]++;
                }
                count++;
            } else {
                count = 0;
            }
        }
        return hint;
    });

    colHints = colHints.map(col => {
        let hint = [];
        let count = 0;
        for (let i = 0; i < 20; i++) {
            if (col[i] === 1) {
                if (count === 0) {
                    hint.push(1);
                } else {
                    hint[hint.length - 1]++;
                }
                count++;
            } else {
                count = 0;
            }
        }
        return hint;
    });

    return { rowHints, colHints };
}