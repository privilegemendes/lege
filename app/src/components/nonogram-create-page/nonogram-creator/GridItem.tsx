import React, {useRef, useState} from 'react';
import {makeStyles} from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    highlight: {
        background: 'rgba(77,138,15,.7)',
        border: '0.5px dotted white',
    }
}));

interface Props {
    className: string;
}

export const GridItem: React.FC<Props> = (props) => {

    const classes = useStyles();
    const [clickedItems, setClickedItems] = useState<string[]>([]);

    const handleClick = (gridArea: string) => {
        // store the grid area of each element clicked and check if it already exists in the array.
        // If the element's grid area already exists in the array then it will remove it.
        if (clickedItems.includes(gridArea)) {
            setClickedItems(clickedItems.filter(item => item !== gridArea));
        } else {
            setClickedItems([...clickedItems, gridArea]);
        }
    };

    console.log(clickedItems);

    // the background color of the grid-area locations will change to yellow
    // when the corresponding element is clicked, and will change back when clicked again.
    const gridRef = useRef<HTMLDivElement>(null);
    const gridItems = Array.from({length: 20}, (_, row) =>
        Array.from({length: 20}, (_, col) => {
            const gridArea = `${row+1} / ${col+1} / ${row+2} / ${col+2}`;
            return <div
                ref={gridRef}
                key={`[${row+1},${col+1}]`}
                style={{gridArea:`${row+1} / ${col+1} / ${row+2} / ${col+2}`}}
                className={clsx(`[${row+1},${col+1}]`,`${clickedItems.includes(gridArea) ? classes.highlight : ''}`)}
                onClick={()=> handleClick(gridArea)}
            ></div>
        })
    );


    return <>
        {gridItems}
    </>
};
