import React, {FC, useRef, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {Theme} from "@mui/material";
import clsx from "clsx";
import {gridBackground} from "../../../assets/gridBackground";


const useStyles = makeStyles<Theme,StylesProps>(theme => ({
    grid: ({gridRows,gridColumns}) => ({
        border: '1px solid #08ffbd',
        width: 400,
        height: 400,
        position: 'relative',
        display: 'grid',
        gridAutoFlow: 'row dense',
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
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
    }),
    highlight: {
        background: 'rgba(77,138,15,.7)',
        border: '0.5px dotted white',
    },
    highlightDrag: {
        // background: 'rgba(77,138,15,.7)',
        cursor: 'pointer',
    }
}));

type StylesProps = {
    gridRows: number
    gridColumns: number
}

interface Props {
    className: string;
    rows: number;
    cols: number;
    isRemoving: boolean;
    clickedItems: string[];
    setClickedItems: (items: string[]) => void;
}

export const GridItem: FC<Props> =
    (
        {
            className,
            rows,
            cols,
            isRemoving,
            clickedItems,
            setClickedItems,
        }
     ) => {

    const classes = useStyles({gridRows: rows, gridColumns: cols});
    const [isMouseDown, setMouseDown] = useState<boolean>(false);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement,MouseEvent> ,gridArea:string) => {
        if(!isRemoving){
            setClickedItems([...clickedItems, gridArea]);
            setMouseDown(true);
        } else {
            setClickedItems(clickedItems.filter(item => item !== gridArea));
            setMouseDown(true);
        }
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement,MouseEvent>,gridArea:string) => {

        if (isMouseDown) {
           if (isRemoving) {
               setClickedItems(clickedItems.filter(item => item !== gridArea));
           } else {
                setClickedItems([...clickedItems, gridArea]);
           }
        }
    }

    const handleMouseUp = () => {
        setMouseDown(false);
    }

    // the background color of the grid-area locations will change to yellow
    // when the corresponding element is clicked, and will change back when clicked again.
    const gridRef = useRef<HTMLDivElement>(null);
    const gridItems = Array.from({length: rows}, (_, row) =>
        Array.from({length: cols}, (_, col) => {
            const gridArea = `${row+1} / ${col+1} / ${row+2} / ${col+2}`;
            return <div
                ref={gridRef}
                key={`[${row+1},${col+1}]`}
                style={{gridArea:`${row+1} / ${col+1} / ${row+2} / ${col+2}`}}
                className={clsx(`[${row+1},${col+1}]`,
                    `${clickedItems.includes(gridArea) ? classes.highlight : ''}
                        ${isMouseDown ? classes.highlightDrag : ''}`)}
                onMouseDown={(event) => handleMouseDown(event, gridArea)}
                onMouseMove={(event) => handleMouseMove(event, gridArea)}
                onMouseUp={handleMouseUp}
            ></div>
        })
    );


    return <div id='grid' className={classes.grid}>
            {gridItems}
        </div>
};
