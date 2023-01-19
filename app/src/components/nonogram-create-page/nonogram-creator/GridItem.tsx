import React, {FC, useRef, useState} from 'react';
import {makeStyles} from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    highlight: {
        background: 'rgba(77,138,15,.7)',
        border: '0.5px dotted white',
    },
    highlightDrag: {
        // background: 'rgba(77,138,15,.7)',
        cursor: 'pointer',
    }
}));

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

    const classes = useStyles();
    const [isMouseDown, setMouseDown] = useState<boolean>(false);

    const handleMouseDown = (gridArea:string) => {
        if(!isRemoving){
            setClickedItems([...clickedItems, gridArea]);
            setMouseDown(true);
        } else {
            setClickedItems(clickedItems.filter(item => item !== gridArea));
            setMouseDown(true);
        }
    }

    const handleMouseMove = (gridArea:string) => {

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
    console.log(clickedItems);
    console.log(isRemoving);

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
                onMouseDown={() => handleMouseDown(gridArea)}
                onMouseMove={() => handleMouseMove(gridArea)}
                onMouseUp={handleMouseUp}
            ></div>
        })
    );


    return <>
        {gridItems}
    </>
};
