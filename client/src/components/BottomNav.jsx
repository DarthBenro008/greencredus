/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
// import predict from "../assets/predict.svg";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "absolute",
        height: "56px",
        left: 0,
        bottom: 0,

        background: "rgba(62, 255, 162, 0.2)",
        backdropFilter: "blur(10px)",

        /* Note: backdrop-filter has minimal browser support */
        borderRadius: "3px",
    },
    menuItem: {
        color: "#FBFBFB",
    },
});

export default function BottomNav({ setNavValue, navValue }) {
    const classes = useStyles();

    // console.log("bottomnav", navValue);

    return (
        <BottomNavigation
            value={navValue}
            onChange={(event, newValue) => {
                setNavValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                className={classes.menuItem}
                label="Home"
                icon={<HomeRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Prediction"
                icon={<ReceiptRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Transaction"
                icon={<ReceiptRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Profile"
                icon={<PersonRoundedIcon />}
            />
        </BottomNavigation>
    );
}
