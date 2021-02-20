/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import profileImg from "../assets/profile-img.png";
import recycle from "../assets/recycle.svg";
import info from "../assets/info.svg";
import coin from "../assets/coin.svg";
import qrIcon from "../assets/qrIcon.png";
import InfoModal from "components/InfoModal";

const useStyles = makeStyles({
    homeTop: {
        display: "flex",
        justifyContent: "space-between",
        margin: "1.5rem 1rem",
        paddingBottom: "1.5rem",
        borderBottom: "1px solid #2B2B2B",
    },
    topLeft: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: "20px",
        lineHeight: "24px",
        marginLeft: "0.5rem",
    },
    status: {
        fontSize: "12px",
        lineHeight: "12px",

        marginLeft: "0.5rem",
    },
    greentext: { color: "#3EFFA2" },
    homeTopIcon: { margin: "0.75rem" },
    currentValue: {
        padding: "12px",
        border: "0.5px solid #3EFFA2",
        borderRadius: "6px",
        alignSelf: "center",
    },
    balance: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1.5rem",
    },
    balanceTitle: {
        fontSize: "24px",
        lineHeight: "29px",
    },
    row: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
    },
    rowNoSpace: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    coinValue: {
        fontSize: "48px",
        lineHeight: "58px",

        color: "#FBFBFB",
    },
    coinValueRed: {
        fontSize: "48px",
        lineHeight: "58px",

        color: "#FF3C3C",
    },
    payBtn: {
        alignSelf: "center",
        width: "300px",
        height: "50px",
        background: "#4464FF",
        boxShadow: "0px 4px 50px 2px rgba(68, 100, 255, 0.4)",
        borderRadius: "10px",
        margin: "42px 0 27px 0",
        fontSize: "24px",
    },
    qrBtn: {
        height: "72px",
        width: "72px",
        borderRadius: "50%",
        filter: "drop-shadow(0px 5.40984px 36.0656px rgba(62, 255, 162, 0.25))",
        background: "#3EFFA2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "8px",
        bottom: "70px",
    },
});

const Main = () => {
    const c = useStyles();

    const [showInfoModal, setInfoModal] = useState(false);

    const toggleInfoModal = () => {
        setInfoModal(!showInfoModal);
    };

    return (
        <div className="page">
            <div className={c.homeTop}>
                <div className={c.topLeft}>
                    <img src={profileImg} alt="" />
                    <div>
                        <div className={c.name}>Hello Marcus</div>
                        <div className={c.status}>
                            Current status:{" "}
                            <span className={c.greentext}>Lieutinent</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        onClick={() => {
                            toggleInfoModal();
                        }}
                        className={c.homeTopIcon}
                        src={info}
                        alt=""
                    />
                    <img className={c.homeTopIcon} src={recycle} alt="" />
                </div>
            </div>

            <div className={c.currentValue}>
                <span>Current GRD price :</span> <b>123.2345 </b>
                <span>kgCO2</span>
            </div>

            <div className={c.balance}>
                <Typography variant="h2" className={c.balanceTitle}>
                    Your balance
                </Typography>
                <div className={c.row}>
                    <div className={c.rowNoSpace}>
                        <div style={{ textAlign: "center" }}>
                            <div className={c.coinValue}>264</div>
                            <div>GRD Left</div>
                        </div>
                        <img src={coin} alt="" />
                    </div>
                    <div className={c.rowNoSpace}>
                        <div style={{ textAlign: "center" }}>
                            <div className={c.coinValueRed}>54</div>
                            <div>GRD Spent</div>
                        </div>
                        <img src={coin} alt="" />
                    </div>
                </div>
            </div>

            <Button className={c.payBtn} variant="contained" color="primary">
                <b>Pay</b>
            </Button>
            <hr style={{ width: "326px", border: "1px solid #2B2B2B" }} />

            {showInfoModal ? <InfoModal /> : null}
            <div className={c.qrBtn}>
                <img src={qrIcon} alt="" />
            </div>
        </div>
    );
};

export default Main;
