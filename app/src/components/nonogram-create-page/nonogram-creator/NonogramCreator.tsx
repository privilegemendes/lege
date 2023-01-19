import React, {FC} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
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
            cursor: 'move',
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

    let width = 20;
    let height = 20;

    const classes = useStyles({gridRows: height, gridColumns: width});

    return <div id="gridContainer" className={classes.gridContainer}>
            <div id='grid' className={classes.grid}>
                <GridItem
                    className={""}
                    rows={width}
                    cols={height}
                    isRemoving={isRemoving}
                    clickedItems={clickedItems}
                    setClickedItems={setClickedItems}
                />
            </div>
        </div>;
};
