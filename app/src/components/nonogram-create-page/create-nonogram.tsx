import React, {FC, useState} from "react";
import {makeStyles} from "@mui/styles";
import {NonogramCreator} from "./nonogram-creator/NonogramCreator";
import {IconButton, ToggleButton, ToggleButtonGroup} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles(theme => ({
    buttons: {
        display: 'flex',
        marginTop: 16,
        gap: 16,
        alignItems: 'center',
        // '& > *': {
        //     border: '1px solid #08ffbd',
        //     cursor: 'pointer',
        //     transition: 'all .2s ease-in-out',
        // }
    }
}));

export const CreateNonogram: FC = () => {

    const classes = useStyles();
    const [isRemoving, setRemoving] = useState<boolean>(false);
    const [clickedItems, setClickedItems] = useState<string[]>([]);
    const [alignment, setAlignment] = useState('Draw');

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
    </>
}
