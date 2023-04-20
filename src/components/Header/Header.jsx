import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

const Header = ({setCoordinates}) => {
        //useStyles is a hook, call it as a hook:
        const classes = useStyles();
        const [autocomplete, setAutocomplete] = useState(null);

        const onLoad = (autoC) => setAutocomplete(autoC);

        const onPlaceChanged = () => {
            const lat = autocomplete.getPlace().geometry.location.lat();
            const lng = autocomplete.getPlace().geometry.location.lng();

            setCoordinates({ lat, lng });
        }

    return (
        //top AppVar
        <AppBar position = "static">
            <Toolbar className = {classes.toolbar}>
                <Typography variant="h5"className={classes.title}>
                    Travel Advisor
                </Typography>
                {/* displays search icon and explore new places in upper right*/}
                <Box display="flex">
                    <Typography variant="h6"className={classes.title}>
                        Explore New Places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={"classes.search"}>
                            <div className={"classes.searchIcon"}>
                                <SearchIcon />
                            </div>
                            {/* displays search input and prefilled Search...*/}
                            <InputBase placeholder="Search.." classes={{root:classes.inputRoot, input:classes.inputInput}} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;