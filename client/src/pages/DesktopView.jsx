import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import desktoplogo from "assets/desktoplogo.svg";

const useStyles = makeStyles({
    root: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        paddingTop: "200px",
    },
});

const DesktopView = () => {
    const c = useStyles();

    return (
        <div className={c.root}>
            <img src={desktoplogo} alt="" />
            <Typography style={{ marginTop: "150px" }} variant="h6">
                Please open the website in PHONE for better experience
            </Typography>
            <a
                style={{
                    marginTop: "150px",
                    textDecoration: "underline",
                    cursor: "pointer",
                }}
                variant="h6"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.green-cred.us/"
            >
                Check us out here
            </a>
        </div>
    );
};

export default DesktopView;
