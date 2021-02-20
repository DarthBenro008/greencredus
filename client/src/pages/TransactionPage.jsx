import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    pageTitle: {
        fontWeight: "bold",
        fontSize: "32.9412px",
        lineHeight: "40px",
        margin: "34px 0 0 1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #2B2B2B",
    },
    dateBar: {
        display: "flex",
    },
});

const TransactionPage = () => {
    const c = useStyles();

    return (
        <div>
            <Typography variant="h1" className={c.pageTitle}>
                Recent
                <br />
                Transactions
            </Typography>
            <div className={c.dateBar}>
                <div className="day">Today</div>
            </div>
        </div>
    );
};

export default TransactionPage;
