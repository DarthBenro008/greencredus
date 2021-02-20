import { makeStyles } from "@material-ui/core";
import React from "react";

import transactionProfileImg from "../assets/transaction-profile-img.png";
import coinLabel from "../assets/coin-label.png";

const useStyles = makeStyles({
    root: {
        border: "1px solid #FBFBFB",
        borderRadius: "6px",
        margin: "1rem 2rem",
        padding: "1rem",
    },
    top: {
        display: "flex",
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "12px 0",
    },
    topHeader: {
        marginLeft: "12px",
    },
    item: { fontWeight: "bold", fontSize: "24px", lineHeight: "29px" },
    greenText: {
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "140%",
        color: "#3EFFA2",
    },
    bigCred: {
        fontWeight: "bold",
        fontSize: "31.2642px",
        lineHeight: "38px",
        color: "#3EFFA2",
    },
});

const TransactionCard = ({ name, item, credits, quantity, date, carbon }) => {
    const c = useStyles();

    return (
        <div className={c.root}>
            <div className={c.top}>
                <img src={transactionProfileImg} alt="" />
                <div className={c.topHeader}>
                    <div>{name}</div>
                    <div>
                        Totel Creds Transferred :{credits}
                        <span>
                            <img src={coinLabel} alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div className={c.row}>
                <div>
                    <div className={c.item}>{item}</div>
                    <div>
                        Quantity:{" "}
                        <span className={c.greenText}>{quantity}</span>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <span className={c.bigCred}>{credits}</span>
                    <img
                        src={coinLabel}
                        alt=""
                        style={{ height: "12px", width: "auto" }}
                    />
                    <br />
                    <div>Credits spent</div>
                </div>
            </div>
            <div className={c.row}>
                <div>
                    <span className={c.greenText}>Transferred</span> {date}
                </div>
                <div className={c.greenText}>Details</div>
            </div>
            <div className={c.row}>
                Carbon equvalent released: {carbon} kgCO2
            </div>
        </div>
    );
};

export default TransactionCard;
