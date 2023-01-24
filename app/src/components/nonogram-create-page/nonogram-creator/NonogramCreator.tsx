import React, {FC, useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {GridItem} from "./GridItem";
import {RowHints} from "./RowHints";
import {ColHints} from "./ColHints";
import {gridBackground} from "../../../assets/gridBackground";
import Board from "../../../types/board/board";

const useStyles = makeStyles<Theme,StylesProps>(theme => ({
    gridContainer:{
        zIndex: 0,
        margin: 'auto',
        position:'relative',
        padding: 8,
        display: 'grid',
        gridTemplateColumns: '0.5fr 3fr',
        gridTemplateRows: '0.5fr 3fr',
        gridColumnGap: 4,
        gridRowGap: 4,
        width: '100vw',
        height: '100vw',
        //background: '#131321', /* Old browsers */
        [theme.breakpoints.up('sm')]: {
            width: '80vw',
            height: '80vw',
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
        //gridAutoFlow: 'row dense',
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
            opacity: 0.2,
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
    gridSize: number;
}


export const NonogramCreator: FC<Props> =
    (
        {
            isRemoving,
            clickedItems,
            setClickedItems,
            gridSize
        }
    ) => {

        let cols = gridSize;
        let rows = gridSize;

        const classes = useStyles({gridRows: rows, gridColumns: cols});

        const [rowHints, setRowHints] = useState<{value: number, run: number}[][]>([]);
        const [colHints, setColHints] = useState<{value: number, run: number}[][]>([]);

        useEffect(() => {
            setColHints(puzzle(clickedItems, rows, cols).colHints);
            setRowHints(puzzle(clickedItems, rows, cols).rowHints);

        }, [clickedItems]);

        return <div id="gridContainer" className={classes.gridContainer}>
                <div className={classes.empty}/>
                <div className={classes.colHints}>
                    <ColHints
                        colHints={colHints}
                        cols={cols}
                        gridAreas={clickedItems}
                    />
                </div>
                <div className={classes.rowHints}>
                    <RowHints
                        rowHints={rowHints}
                        rows={rows}
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


function puzzle (gridAreas: string[], rows: number, cols: number) {
    const board = new Board(rows, cols);
    let data: number[] | null = new Array(rows * cols).fill(0);
    let rowHints: {value: number, run: number}[][]
    let colHints: {value: number, run: number}[][]

    for (let area of gridAreas) {
        let areaArray = area.split("/");
        let row = parseInt(areaArray[0]) - 1;
        let col = parseInt(areaArray[1]) - 1;

        data[row * cols + col] = 1;
    }

    board.data = data;
    board.buildCluesFromData();

    rowHints = board.rowClues;
    colHints = board.colClues;

    return {rowHints, colHints};
}