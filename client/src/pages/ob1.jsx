import React from "react";

import obCoin from "assets/obCoin.png";
import slider1 from "assets/Slider1.svg";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 42px",
        paddingTop: "60px",
    },
    heading: {
        fontSize: "32px",
        lineHeight: "38px",
        letterSpacing: "0.02em",
        margin: "0 0 40px 0",
    },
    content: {
        fontSize: "14px",
        lineHeight: "140%",

        letterSpacing: "0.01em",
    },
});

const OB1 = () => {
    const c = useStyles();

    const history = useHistory();

    return (
        <div className={c.root}>
            <img src={obCoin} alt="" />
            <div>
                <div>Introducing</div>
                <div className={c.heading}>Carbon Cryptocurrency</div>
                <div className={c.content}>
                    Image result for carbon credits crypto. Each
                    blockchain-based UPCO2 token represents a certified measure
                    of carbon dioxide.
                </div>
            </div>
            <img
                style={{
                    alignSelf: "baseline",
                    marginTop: "50px",
                    position: "absolute",
                    bottom: "180px",
                }}
                src={slider1}
                alt=""
            />
            <div
                style={{
                    alignSelf: "flex-end",
                    marginTop: "50px",
                    position: "absolute",
                    bottom: "100px",
                }}
            >
                <Button
                    onClick={() => {
                        // do something to remove onboarding
                        history.push("/");
                        localStorage.setItem("firstTime", "abc");
                    }}
                    style={{ color: "#fbfbfb" }}
                    variant="text"
                >
                    Skip
                </Button>
                <Button
                    onClick={() => {
                        history.push("/ob2");
                    }}
                    variant="contained"
                    color="primary"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default OB1;
