import React, {FC, useCallback, useEffect, useMemo, useRef} from "react";
import blankImage from "../layout/blank.png";
import filledImage from "../layout/filled.png"
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {v4 as uuid} from "uuid";
import {gridBackground} from "../../../assets/gridBackground";
import {GridItem} from "./GridItem";

type StylesProps = {
    gridRows: number
    gridColumns: number
}

const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    gridContainer:{
        border: '1px solid #08ffbd',
        width: '100%',
        height: '100%',
        zIndex: 0,
        position:'relative',
        //background: '#131321', /* Old browsers */
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#131321', endColorstr='#131321',GradientType=0 )`, /* IE6-9 */
        boxShadow: '0 2px 20px 0 #000000',
    },
    grid: ({gridRows,gridColumns}) => ({
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'grid',
        gridAutoFlow: 'row dense',
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${gridRows}, 20px)`,
        gap: 0,
        '& > *':{
            backgroundImage: gridBackground,
            border: '0.5px dotted white',
            transition: '0.2s all ease',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1000,
            opacity: 0.5,
        },
    }),
    gridChild:({gridRows,gridColumns}) =>({
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${gridRows}, 20px)`,
        position: 'relative',
        //background: 'hsla(green, 80%, 30%, 0.7)',
        //border: '0.5px solid white',
        '& ::before': {
            position: 'absolute',
            display: 'block',
            padding: '0 5px',
        },
    }),
    canvas: {
        borderSpacing: 0,
        margin: 'auto',
        display: 'grid',
        //gridTemplateColumns: 'repeat(5, 100px)',
        //gridTemplateRows: 'repeat(5, 100px)',
        border: '1px solid #08FFBD',
        background: 'linear-gradient(180deg,#131321 0,#1f1c2c)'
    },
    empty:{
        width: 200,
        height: 200,
        float: 'left',

        //background: 'linear-gradient(180deg,#131321 0,#1f1c2c)',
        //borderRight: '1px solid #08FFBD',
        //borderBottom: '1px solid #08FFBD',
    },
    side:{
        width: 200,
        height: 20,
        float: 'left',
        position: 'relative',
        //background: 'linear-gradient(180deg,#131321 0,#1f1c2c)',
        //borderRight: '1px solid #08FFBD',
        //borderBottom: '1px solid #08FFBD',
    },
    sideNums:{
        position: 'absolute',
        width: 2,
        height: 20,
        fontSize: '10px',
        color: "white"
        //textShadow: '0px 0px 2px #000000',
    },
    top:{
        width: 20,
        height: 200,
        float: "left",
        textAlign: 'center',
        textDecoration: 'underline',
        position: 'relative',
        //background: 'linear-gradient(180deg,#131321 0,#1f1c2c)',
        //borderRight: '1px solid #08FFBD',
        //borderBottom: '1px solid #08FFBD',
    },
    topNums:{
        position: 'absolute',
        textAlign: 'center',
        width: 20,
        bottom: 0,
        fontSize: '10px',
        color: "white"
        //textShadow: '0px 0px 2px #000000',
    },
    tile: {
        width: 20,
        height: 20,
        float: 'left',
        backgroundImage: gridBackground,
        border: '0.5px dotted white',
        transition: '0.2s all ease',
        cursor: 'move',
        position: 'relative',
        zIndex: 1000,
        opacity: 0.5,
    },
    'colUnits, rowUnits':{
        display: 'grid',
        '& > div':{
            textAlign: 'center',
            position: 'relative',
        }
    },
    rowUnits: {
        marginLeft: -70,
        float: 'left',
        height: '100%',
        '& > div': {
            alignSelf: 'center',
        }
    }

}));


export const DrawCanvas2: FC = () => {



    let cellLocation = 0;
    let drawing: any = "";
    let width = 20;
    let height = 20;
    let oldWidth = -1;
    let oldHeight = -1;

    const classes = useStyles({gridRows: height, gridColumns: width});

    const currCols = useMemo(() => ['', '#000000', ''],[]);

    const tileRef = useRef<HTMLElement | null >(null);
    //background = 'rgba(31,138,15,.7)';

    const flip = useCallback((x: number, y: number) => {
        const tileId = "box[" + x + "," + y + "]";
        const tileLoc = x * width + y;
        const tileState = drawing.charAt(tileLoc);

        const tile = document.getElementById(tileId);
        if (tile) {
            tileRef.current = tile;

            if (tileState !== input) {
                //tileRef.current.style.backgroundImage = "url('layout/" + inputs[input] + ".png')";
                tile.style.background = 'rgba(31,138,15,.7)';
                tile.style.border = '0.5px solid #ddd';
                drawing = drawing.substr(0, tileLoc) + input + drawing.substr(tileLoc + 1);
            } else {
                tile.style.backgroundImage = gridBackground;
                drawing = drawing.substr(0, tileLoc) + "0" + drawing.substr(tileLoc + 1);
            }
        }
    },[drawing]);
    
    const startLine = useCallback((x: number, y: number) => {
        startX = x;
        startY = y;
        //let tileLoc = x * width + y;
        //let startCol = drawing.charAt(tileLoc);
        
    }, [width, drawing]);

    const puzzle = calculate(drawing);

    const sideNumberRef = useRef<HTMLElement | null >(null);
    const topNumberRef = useRef<HTMLElement | null >(null);
    const refs = useRef<any>([]);
    // display row numbers
    useEffect(() => {
        const elements = [];

        for(let i = 0; i < puzzle.rows.length; i++) {
            elements.push(
                <div key={i} id={`side;${i}`} className={classes.sideNums}>
                    {
                        puzzle.rows[i].split(' | ').filter(value => value !== '')
                            .map((value, idx) => {
                                let [num, color]: any = value.split(':');
                                return (
                                    <>
                                        <span style={{color: currCols[color] }}>{num}</span>
                                        {idx < puzzle.rows[i].length - 2 ? ' | ' : ''}
                                    </>
                                );
                            })
                    }
                    &nbsp;
                </div>
            );
            const sideNumber = document.getElementById(`side;${i}`);

            if (sideNumber) {
                sideNumberRef.current = sideNumber;
                //sideNumberRef.current.innerHTML = elements.toString();
            }
        }
    }, [puzzle.rows, currCols, classes.sideNums]);

    //display column numbers
    useEffect(() => {
        const elements = [];
        for(let i = 0; i < puzzle.cols.length; i++) {
            elements.push(
                <div key={i} id={`top;${i}`} className={classes.topNums}>
                    {
                        puzzle.cols[i].split(' | ').filter(value => value !== '')
                            .map((value, idx) => {
                                let [num, color]: any = value.split(':');
                                return (
                                    <>
                                        <span style={{color: currCols[color] }}>{num}</span>
                                        {idx < puzzle.cols[i].length -2 ? ' | ' : ''}
                                    </>
                                );
                            })
                    }
                </div>
            );

            const topNumber = document.getElementById(`top;${i}`);

            if (topNumber) {
                topNumberRef.current = topNumber;
            }
        }

        //console.log(elements.map(index => index))
    }, [puzzle.cols, currCols, classes.topNums]);

    // draw Nonogram
    useEffect(() => {
        for (let n = 0; n < drawing.length; n++) {
            let x = Math.floor(n / width);
            let y = (n % width);
            let tileId: any = "tile;" + x + ";" + y;

            if (!refs.current[n]) {
                refs.current[n] = document.getElementById(tileId);
            }
            refs.current[n].style.backgroundImage = "url('../layout/" + inputs[drawing.charAt(n)] + ".png')";
        }
    },[drawing, width])


    const rows: any = [];
    const data = generateCanvas(width, height);

    let drawings = [...drawing];

    const grid: any = [];
    for (let i = 0; i < data.length; i++) {
        const gridBox = [];
        for (let j = 0; j < data[i].length; j++) {
            let boxYAxis = j - 1;
            let boxXAxis = i - 1;
            let cellData = data[i][j];
            let box;
            if (cellData.type === 'box') {
                box = (
                    <div
                        key={uuid()}
                        id={`box[${boxXAxis},${boxYAxis}]`}
                        onClick={() => flip(boxXAxis, boxYAxis)}
                        onMouseDown={() => startLine(boxXAxis, boxYAxis)}
                        onMouseUp={() => endLine(boxXAxis, boxYAxis)}
                    ></div>
                );
            }
            gridBox.push(box);
        }
        grid.push(gridBox);
    }

    for (let n = 0; n < data.length; n++) {
        let id = uuid();
        const cells = [];
        for (let m = 0; m < data[n].length; m++) {
            let mIndex = m - 1;
            let nIndex = n - 1;
            let cellData = data[n][m];
            let cell;
            if (cellData.type === 'empty') {
                cell = <td key={uuid()} className={classes.empty} id="empty">&nbsp;</td>;
            } else if (cellData.type === 'top') {
                cell = <td key={uuid()} className={classes.top} id={`top;${mIndex}`}>&nbsp;</td>;
            } else if (cellData.type === 'side') {
                cell = <td key={uuid()} className={classes.side} id={`side;${nIndex}`}>&nbsp;</td>;
            } else if (cellData.type === 'tile') {
                cell = (
                    <div
                        key={uuid()}
                        className={classes.tile}
                        id={`tile;${nIndex};${mIndex}`}
                        onClick={() => flip(nIndex, mIndex)}
                        onMouseDown={() => startLine(nIndex, mIndex)}
                        onMouseUp={() => endLine(nIndex, mIndex)}
                    ></div>
                );
            }
            cells.push(cell)
        }
        rows.push({id, cells});
    }

    // the component takes in the prop drawing as a 2D array of bits. It then compares the length of each row and the number of rows with the width and height props passed in. It then adjusts the drawing array accordingly.
    // By using a 2D array, the operations performed on the drawing array can be done in O(1) time complexity, rather than O(n) time complexity when using strings, which can improve performance. Additionally, using the props to determine the size of the grid makes the component more dynamic and flexible
    if (width !== drawings.length) {
        if (width < drawings.length) {
            drawings = drawings.map(row => row.slice(0, width));
        } else {
            drawings = drawings.map(row => row.concat(Array(width - row.length).fill(0)));
        }
    }

    if (height !== drawings.length) {
        if (height < drawings.length) {
            drawings.slice(0, height);
        } else {
            let emptyRow = Array(width).fill(0);
            for (let i = 0; i < height - drawings.length; i++) {
                drawings.push(emptyRow);
            }
        }
    }



    return <div id="gridContainer" className={classes.gridContainer}>
            <div id='grid' className={classes.grid}>
                <GridItem className={""}/>
            </div>
        </div>;
}



let width = 20;
let height = 20;

let startX = -1;
let startY = -1;

let input = 1;
let inputs = ['blank','filled','x','dot'];

// let drawing = Array(height).fill(Array(width).fill(0).join('')).join('');
function generateCanvas(width: number, height: number) {

    const data = [];

    for(let i = 0; i < height + 1; i++) {
        const row: any[] = [];
        for (let j = 0; j < width + 1; j++) {
            if (i === 0) {
                row.push({ type: j === 0 ? 'empty' : 'top'});
            } else {
               row.push({type: j === 0 ? 'side' : 'box'});
            }
        }
        data.push(row);
    }

    return data;
}

function endLine(x: number, y: number) {
    if (x !== startX || y !== startY) {
        let tileXs = [];
        let tileYs = [];

        if (x === startX) {
            if (y > startY) {
                for (let n = startY; n <= y; n++) {
                    tileXs.push(x);
                    tileYs.push(n);
                }
            } else {
                for (let n = y; n <= startY; n++) {
                    tileXs.push(x);
                    tileYs.push(n);
                }
            }
        } else if (y === startY) {
            if (x > startX) {
                for (let n = startX; n <= x; n++) {
                    tileXs.push(n);
                    tileYs.push(y);
                }
            } else {
                for (let n = x; n <= startX; n++) {
                    tileXs.push(n);
                    tileYs.push(y);
                }
            }
        }

        for (let n = 0; n < tileXs.length; n++) {
            let tileId = "tile;" + tileXs[n] + ";" + tileYs[n];
            const tile = document.getElementById(tileId);

            if (tile) {
                tile.style.background = 'rgba(31,138,15,.7)';
                tile.style.border = '0.5px solid #ddd';
                let tileLoc = tileXs[n] * width + tileYs[n];
            }
        }
    }
}

function calculate(drawing: any) {

    let drawingV = "";
    let colNum = 1;
    let currAdd = 0;

    let rows = [];
    let cols = [];

    let currRow = "";
    let currInt = 0;

    let currCol = drawing.charAt(0);

    // Make string for columns
    for (let n = 0; n < drawing.length; n++) {

        if (colNum === 1) {
            drawingV += drawing.charAt(n);
        } else {
            drawingV = drawingV.substr(0, currAdd) + drawing.charAt(n) + drawingV.substr(currAdd);
            currAdd = currAdd + colNum;
        }

        if (currCol === drawing.charAt(n)) {
            currInt += 1;
        } else {
            if (currCol !== "0") {
                currRow += currInt + ":" + currCol + " | ";
            }
            currInt = 1;
            currCol = drawing.charAt(n);
        }

        let loc = n + 1;
        if ((loc) % width === 0) {
            currAdd = colNum;
            colNum = colNum + 1;
            if (currCol !== "0" && currInt !== 0) {
                currRow += currInt + ":" + currCol + " | ";
            }
            rows.push(currRow);
            currRow = "";
            currInt = 0;
            currCol = drawing.charAt(n + 1);
        }
    }

    currRow = "";
    currInt = 0;
    currCol = drawingV.charAt(0);

    //Calculate Columns
    for (let n = 0; n < drawingV.length; n++) {
        if (currCol === drawingV.charAt(n)) {
            currInt += 1;
        } else {
            if (currCol !== "0") {
                currRow += currInt + ":" + currCol + " | ";
            }
            currInt = 1;
            currCol = drawingV.charAt(n);
        }

        let loc = n + 1;
        if ((loc) % height === 0) {
            currAdd = colNum;
            colNum = colNum + 1;
            if (currCol !== "0" && currInt !== 0) {
                currRow += currInt + ":" + currCol + " | ";
            }
            cols.push(currRow);
            currRow = "";
            currInt = 0;
            currCol = drawingV.charAt(n + 1);
        }
    }


    return ({rows, cols});
}

function invert(drawing: any) {
    for (let n = 0; n < drawing.length; n++) {
        let x = Math.floor(n / width);
        let y = (n % width);
        let tileID = "tile;" + x + ";" + y;
        let tile = document.getElementById(tileID);
        if (drawing.charAt(n) === "1") {
            drawing = drawing.substr(0, n) + "0" + drawing.substr(n + 1);
            tile!.style.backgroundImage = blankImage;
        } else if (drawing.charAt(n) === "0") {
            drawing = drawing.substr(0, n) + "1" + drawing.substr(n + 1);
            tile!.style.backgroundImage = filledImage;
        }
    }
    calculate(drawing);
}
;
