/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import {
    Button,
    Divider,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { recaptchaVerifierInvisible, phoneSignIn } from "../utils/firebase";
import LoginBG from "../assets/LoginBG.png";

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
        paddingTop: "90px",
        paddingLeft: "40px",
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
    textboxTop: {
        background: "#FBFBFB",
        borderRadius: "15px 15px 0px 0px",
        width: "295px",
        // height: "60px",
        // padding: "1rem",
    },
    textboxBottom: {
        background: "#FBFBFB",
        borderRadius: "0px 0px 15px 15px",
        width: "295px",
        // height: "60px",
        // padding: "1rem",
    },
    divider: {
        margin: "0 12px",
        // width,
    },
    loginBtn: {
        background: "#4464FF",
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
});

const Login = (props) => {
    const classes = useStyles();
    const [region, setRegion] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        recaptchaVerifierInvisible();
    }, []);

    const getPhoneNumber = () => {
        return region + phone;
    };

    const moveToOtp = () => {
        const phoneNumberUser = getPhoneNumber();
        props.phone(phoneNumberUser);
        props.moveUp();
    };

    return (
        <div className={classes.loginPage}>
            <div className={classes.loginTop}>
                <Typography variant="h2" className={classes.welcome}>
                    Welcome
                </Typography>
                <Typography variant="h6" className={classes.subHead}>
                    Get started by creating your account
                </Typography>
            </div>
            <div className={classes.main}>
                <Typography
                    align="center"
                    variant="h6"
                    className={classes.loginHead}
                >
                    Login/signup
                </Typography>
                <TextField
                    className={classes.textboxTop}
                    id="filled-basic"
                    variant="filled"
                    label="Country/Region"
                    onChange={(event) => {
                        setRegion(event.target.value);
                    }}
                    InputProps={{ disableUnderline: true }}
                />
                <Divider variant="middle" className={classes.divider} />
                <TextField
                    className={classes.textboxBottom}
                    id="filled-basic"
                    variant="filled"
                    label="Phone Number"
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                    InputProps={{ disableUnderline: true }}
                />
                <Button
                    id="sign-in-button"
                    className={classes.loginBtn}
                    onClick={async () => {
                        const userPhoneNumber = getPhoneNumber();
                        console.log(userPhoneNumber);
                        const results = await phoneSignIn(userPhoneNumber);
                        if (results) {
                            moveToOtp();
                        }
                    }}
                    variant="contained"
                    color="primary"
                >
                    Login/Signup
                </Button>
            </div>
            <Divider light variant="fullWidth" />
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

export default Login;
