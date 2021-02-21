import React from "react";
import { makeStyles, TextField, Typography } from "@material-ui/core";
import TransactionCard from "components/TransactionCard";

const useStyles = makeStyles({
    root: {
        paddingBottom: "60px",
    },
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
        alignItems: "center",
        justifyContent: "space-between",
        margin: "1rem 0.75rem",
    },
    day: {
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "24px",
    },
    textField: {
        marginLeft: "1rem",
        marginRight: "1rem",
        color: "#fff",
        width: "150px",
    },
});

const TransactionPage = () => {
    const c = useStyles();

    return (
        <div className={c.root}>
            <Typography variant="h1" className={c.pageTitle}>
                Recent
                <br />
                Transactions
            </Typography>
            <div className={c.dateBar}>
                <div className={c.day}>Today</div>
                <TextField
                    id="date"
                    // label="Choose a date"
                    type="date"
                    defaultValue="2020-05-24"
                    className={c.textField}
                    InputLabelProps={{
                        shrink: true,
                        style: { color: "#fbfbfb" },
                    }}
                    inputProps={{
                        style: { color: "#fbfbfb" },
                    }}
                />
            </div>
            <TransactionCard
                name="Martina"
                credits={240}
                item="Meat"
                quantity={245}
                date="26th February 2021"
                carbon="24"
            />
            <TransactionCard
                name="Martina"
                credits={230}
                item="Meat"
                quantity={245}
                date="26th February 2021"
                carbon="24"
            />
            <TransactionCard
                name="Martina"
                credits={12}
                item="Meat"
                quantity={245}
                date="26th February 2021"
                carbon="24"
            />
            <TransactionCard
                name="Martina"
                credits={14}
                item="Meat"
                quantity={245}
                date="26th February 2021"
                carbon="24"
            />
        </div>
    );
};

export default TransactionPage;
