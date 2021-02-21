import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import success from "../assets/success.svg";
import coin from "../assets/coin.svg";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "60px",
    },
    successText: {
        marginTop: "60px",
        fontSize: "16px",
        lineHeight: "19px",

        /* primary/teak */
        color: "#3EFFA2",
    },
    amt: { fontSize: "72px", lineHeight: "86px", textAlign: "center" },
    cur: { fontSize: "20px", lineHeight: "24px", textAlign: "center" },
    scanAnother: {
        padding: "10px",
        color: "#fbfbfb",
        border: "1px solid #FBFBFB",
        borderRadius: "4px",
        fontSize: "16px",
        lineHeight: "19px",
        margin: "32px",
    },
    link: {
        fontSize: "16px",
        lineHeight: "19px",
        textDecorationLine: "underline",

        /* primary/teak */
        color: "#3EFFA2",
    },
    bluetext: {
        color: "#4464FF",
    },
    footerText: { fontSize: "16px", lineHeight: "19px", marginTop: "50px" },
});

const Success = () => {
    const c = useStyles();

    return (
        <div className={c.root}>
            <img src={success} alt="" />
            <div className={c.successText}>
                Payment of <b>40 GRD</b> was successful
            </div>
            <div className={c.amt}>
                123{" "}
                <span>
                    <img src={coin} alt="" />
                </span>
            </div>
            <div className={c.cur}>Your current balance</div>
            <Button className={c.scanAnother}>Scan another code</Button>
            <a className={c.link} href="/">
                Go back to home
            </a>
            <div className={c.footerText}>
                You generated <span className={c.bluetext}>23 kgCO2</span> of
                carbon emission
            </div>
        </div>
    );
};

export default Success;
