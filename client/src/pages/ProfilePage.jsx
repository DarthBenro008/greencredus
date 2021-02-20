import React from "react";

import { makeStyles } from "@material-ui/core";

import profilebg from "assets/profilebg.svg";
import profile from "assets/transaction-profile-img.png";
import profileProg from "assets/profileProg.png";

const useStyles = makeStyles({
    root: {
        height: "500px",
        width: "100vw",
        backgroundImage: `url(${profilebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        paddingTop: "56px",
    },
    menuItem: {
        placeSelf: "baseline",
        fontSize: "22px",
        lineHeight: "26px",
        borderBottom: "2px solid #3EFFA2",
        marginLeft: "20px",
        marginBottom: "16px",
        marginTop: "16px",
    },
});

const ProfilePage = () => {
    const c = useStyles();

    return (
        <div className={c.root}>
            <img style={{ height: "72px" }} src={profile} alt="" />
            <div>Alice</div>
            <img src={profileProg} alt="" />
            <div style={{ borderBottom: "2px solid #2B2B2B", padding: "2rem" }}>
                <div>
                    Phone number :
                    <span style={{ color: "#3EFFA2" }}>+91 7830124512</span>
                </div>
            </div>
            <div className={c.menuItem}>Advance settings</div>
            <div className={c.menuItem}>About us</div>
            <div className={c.menuItem}>Feedback</div>
            <div className={c.menuItem}>Support us</div>
            <div className={c.menuItem}>Become a seller</div>
        </div>
    );
};

export default ProfilePage;
