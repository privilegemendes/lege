import React, {FC, useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {GridItem} from "./GridItem";
import {RowHints} from "./RowHints";
import {ColHints} from "./ColHints";
import {gridBackground} from "../../../assets/gridBackground";

const useStyles = makeStyles<Theme,StylesProps>(theme => ({
    gridContainer:{
        zIndex: 0,
        margin: 'auto',
        position:'relative',
        padding: 8,
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gridTemplateRows: '1fr 3fr',
        gridColumnGap: 4,
        gridRowGap: 4,
        width: '80vw',
        height: '80vw',
        //background: '#131321', /* Old browsers */
        [theme.breakpoints.up('md')]: {
            width: '80vw',
            height: '80vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '100vw',
        },
    },
    empty:{
        gridArea: '1/1/2/2',

    },
    colHints: ({gridColumns}) => ({
        gridArea: '1/2/2/3',
        display: 'grid',
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: '1fr',
        gap: 4,
        marginLeft: 4,
        marginRight: 4,
    }),
    rowHints: ({gridRows}) => ({
        gridArea: '2/1/3/2',
        display: 'grid',
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        gridTemplateColumns: '1fr',
        gap: 4,
        marginTop: 4,
        marginBottom: 4,
    }),
    grid: ({gridRows,gridColumns}) => ({
        gridArea: '2/2/3/3',
        border: '1px solid #08ffbd',
        position: 'relative',
        display: 'grid',
        gridAutoFlow: 'row dense',
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        boxShadow: '0 2px 20px 0 #000000',
        gap: 0,
        '& > *':{
            backgroundImage: gridBackground,
            border: '0.5px dotted white',
            transition: '0.2s all ease',
            cursor: 'move',
            position: 'relative',
            zIndex: 1000,
            opacity: 0.5,
        },
        [theme.breakpoints.down('sm')]: {
            '& > *':{
                border: '0.1px dotted white',
            },
        },
    }),
}));

type StylesProps = {
    gridRows: number
    gridColumns: number
}

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

        const classes = useStyles({gridRows: rows, gridColumns: cols});

        const [rowHints, setRowHints] = useState<number[][]>([]);
        const [colHints, setColHints] = useState<number[][]>([]);

        useEffect(() => {
            setColHints(calculateHints(clickedItems).colHints);
            setRowHints(calculateHints(clickedItems).rowHints);
        }, [clickedItems]);

        //console.log(clickedItems);
        console.log({rowHints, colHints});

        return <div id="gridContainer" className={classes.gridContainer}>
                <div className={classes.empty}/>
                <div className={classes.colHints}>
                    <ColHints
                        colHints={colHints}
                        rows={rows}
                        cols={cols}
                        gridAreas={clickedItems}
                    />
                </div>
                <div className={classes.rowHints}>
                    <RowHints
                        rowHints={rowHints}
                        rows={rows}
                        cols={cols}
                        gridAreas={clickedItems}
                    />
                </div>
                <div className={classes.grid}>
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
    b. Add empty value "0" if there is an uncolored cell between the current gridArea and the previous gridArea
    c. Increase the count of the current hint in the rowHints array at the index of rowStart
    d. Increase the count of the current hint in the colHints array at the index of colStart
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

        // Add empty value if there is an uncolored cell
        if (rowHints[rowStart].length > 0 && rowHints[rowStart][rowHints[rowStart].length - 1] !== 0) {
            rowHints[rowStart].push(0);
        }
        if (colHints[colStart].length > 0 && colHints[colStart][colHints[colStart].length - 1] !== 0) {
            colHints[colStart].push(0);
        }

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