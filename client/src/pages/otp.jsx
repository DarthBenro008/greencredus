/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import LoginBG from "../assets/LoginBG.png";
import back from "../assets/back.svg";
import { verifyCode } from "../utils/firebase";

const useStyles = makeStyles({
    loginPage: {
        backgroundImage: `url(${LoginBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    loginTop: {
        paddingTop: "28px",
        paddingLeft: "12px",
        alignSelf: "baseline",
    },
    welcome: {
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "48px",

        /* identical to box height */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",
    },
    subHead: {
        fontSize: "16px",
        lineHeight: "22px",

        /* or 22px */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",
        margin: "36px 0 32px 0",
    },
    loginHead: {
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "28px",

        /* identical to box height, or 28px */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",

        marginBottom: "24px",
    },

    loginBtn: {
        background: "#4464FF",
        boxShadow: "0px 4px 15px rgba(41, 52, 208, 0.2)",
        borderRadius: "10px",
        width: "295px",
        height: "48px",
        margin: "48px 0 32px 0",
    },
    loginBtnVerified: {
        background: "#3EFFA2",
        boxShadow: "0px 4px 15px rgba(41, 52, 208, 0.2)",
        borderRadius: "10px",
        width: "295px",
        height: "48px",
        margin: "48px 0 32px 0",
    },
    footer: {
        margin: "0 0 0.75rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        fontSize: "10px",
        lineHeight: "14px",

        /* or 14px */
        textAlign: "center",
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",
        opacity: "0.75",
    },
    link: {
        fontSize: "12px",
        lineHeight: "14px",

        /* primary/white */
        color: "#FBFBFB",
        textDecoration: "none",
        marginTop: "2.25rem",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    backBtn: {
        fontSize: "14px",
        lineHeight: "17px",

        /* identical to box height */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",
    },
    textboxOtp: { background: "#FBFBFB", borderRadius: "6px" },
});

const OTP = (props) => {
    const classes = useStyles();

    const [otpVerified, setOtpVerified] = useState(false);
    const [otpInput, setOtpInput] = useState("");
    const history = useHistory();

    const verifyOtp = () => {
        console.log(otpInput);
        verifyCode(otpInput);
        setOtpVerified(true);
        setTimeout(() => {
            history.push("/");
        }, 2000);
    };

    return (
        <div className={classes.loginPage}>
            {/* bacbtn */}
            <div className={classes.loginTop}>
                <Button
                    className={classes.backBtn}
                    onClick={() => window.history.back()}
                >
                    <img src={back} alt="back" />
                    <span>Go back</span>
                </Button>
            </div>
            <div className={classes.main}>
                <Typography
                    align="center"
                    variant="h6"
                    className={classes.loginHead}
                >
                    Enter OTP
                </Typography>
                <Typography variant="h6" className={classes.subHead}>
                    OTP sent to {props.phoneNumber}
                    <EditRoundedIcon style={{ height: "16px" }} />
                </Typography>
                <TextField
                    className={classes.textboxOtp}
                    id="filled-basic"
                    label="OTP"
                    variant="filled"
                    onChange={(event) => {
                        event.preventDefault();
                        setOtpInput(event.target.value);
                    }}
                    InputProps={{ disableUnderline: true }}
                />
                {!otpVerified ? (
                    <Button
                        className={classes.loginBtn}
                        variant="contained"
                        color="primary"
                        onClick={verifyOtp}
                    >
                        Verify
                    </Button>
                ) : (
                    <Button
                        className={classes.loginBtnVerified}
                        variant="contained"
                        color="primary"
                    >
                        Verified successfully
                    </Button>
                )}
            </div>
            <div className={classes.footer}>
                <div className={classes.footerText}>
                    Recycling is on the rise, and more consumers are going
                    green: 86 percent of consumers recycle, and 52 percent
                    recycle more than they did two years ago.
                </div>
                <a className={classes.link} href="/login">
                    Privacy and agreements
                </a>
            </div>
        </div>
    );
};

export default OTP;
