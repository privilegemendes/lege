import React, {FC, useState} from "react";
import {makeStyles} from "@mui/styles";
import {NonogramCreator} from "./nonogram-creator/NonogramCreator";
import {IconButton, Slider, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles(theme => ({
    buttons: {
        display: 'flex',
        marginTop: 16,
        gap: 16,
        alignItems: 'center',
        padding: 12,
        width: '1fr',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    settings: {
        display: 'flex',
        flexDirection: 'column',
        width: '1fr',
        paddingLeft: 64,
        paddingRight: 64,
        marginLeft: 'auto',
        marginRight: 'auto',
    }


}));

export const CreateNonogram: FC = () => {

    const classes = useStyles();
    const [isRemoving, setRemoving] = useState<boolean>(false);
    const [clickedItems, setClickedItems] = useState<string[]>([]);
    const [alignment, setAlignment] = useState('Draw');
    const [size, setSize] = useState<number>(10);

    const handleGridSize = (event: any, value: number | number []) => {
       setSize(value as number);
    };


    const handleRemove = (event: React.MouseEvent<HTMLElement>, newAlignment:string) => {
        setRemoving(!isRemoving);
        setAlignment(newAlignment);
    };

    const handleClear = () => {
        setClickedItems([]);
    };

    return <>
        <NonogramCreator
            isRemoving={isRemoving}
            clickedItems={clickedItems}
            setClickedItems={setClickedItems}
            gridSize={size}
        />
        <div className={classes.buttons}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                size='small'
                onChange={handleRemove}
                fullWidth={true}
                aria-label="Draw or remove"
            >
                <ToggleButton value="Draw">Draw</ToggleButton>
                <ToggleButton value="Erase">Erase</ToggleButton>
            </ToggleButtonGroup>
            <IconButton
                aria-label={"Clear"}
                size="large"
                onClick={handleClear}
            >
              <ClearIcon/>
            </IconButton>
        </div>
        <div className={classes.settings}>
            <Typography id="discrete-slider" gutterBottom>
                Nonogram size
            </Typography>
            <Slider
                defaultValue={10}
                color="primary"
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={handleGridSize}
                step={5}
                //marks
                min={5}
                max={20}
            />
        </div>

    </>
}
