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
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        boxShadow: '0 2px 20px 0 #000000',
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

//Algorithm
// 1. Initialize an empty list to store the hints for each row and column.
// 2. Iterate through the array of grid areas and for each area, check if it represents a row or a column in the nonogram.
// 3. For a row, scan from left to right and keep track of the consecutive black squares. When a white square is encountered, add the number of consecutive black squares to a list of hints for that row and reset the counter.
// 4. For a column, scan from top to bottom and keep track of the consecutive black squares. When a white square is encountered, add the number of consecutive black squares to a list of hints for that column and reset the counter.
// 5. Repeat steps 2-4 for each grid area in the array.
// 6. Return the lists of hints for each row and column as the solution for the nonogram.

function calculateHints(gridAreas: string[]) {
    let rowHints: number[][] = [];
    let colHints: number[][] = [];
    let rowCounts = new Array(20).fill(0);
    let colCounts = new Array(20).fill(0);

    for (let i = 0; i < gridAreas.length; i++) {
        let area = gridAreas[i].split("/");
        let row1 = parseInt(area[0]) - 1;
        let col1 = parseInt(area[1]) - 1;
        let row2 = parseInt(area[2]) - 1;
        let col2 = parseInt(area[3]) - 1;

        for (let row = row1; row <= row2; row++) {
            for (let col = col1; col <= col2; col++) {
                rowCounts[row]++;
                colCounts[col]++;
            }
        }
    }

    for (let i = 0; i < 20; i++) {
        if (rowCounts[i] > 0) {
            rowHints.push([rowCounts[i]]);
        }

        if (colCounts[i] > 0) {
            colHints.push([colCounts[i]]);
        }
    }

    return { rowHints, colHints };
}
