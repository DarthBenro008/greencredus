import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

import logo from "../assets/infoModalLogo.svg";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "5vh",
        left: "5vw",
        height: "80vh",
        width: "80vw",
        background: "rgba(68, 100, 255, 0.75)",
        backdropFilter: "blur(20px)",

        /* Note: backdrop-filter has minimal browser support */
        borderRadius: "8px",
        padding: "20px",

        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        overflowY: "scroll",
    },
    title: { fontSize: "24px", lineHeight: "29px", marginTop: "1rem" },
    close: {
        background: "#3EFFA2",
        borderRadius: "7px",
        alignSelf: "center",
        marginBottom: "1rem",
    },
});

const InfoModal = ({ toggleInfoModal }) => {
    const c = useStyles();

    return (
        <div className={c.root}>
            <img src={logo} alt="" />
            <Typography className={c.title} variant="h1">
                Before you get started using this app
            </Typography>
            <div>
                <br />
                Certain amount of credits will be provided each month to every
                individual.
                <br /> <br />
                After paying cash, scan the QR code present at the shops and
                stations, to facilitate transaction.
                <br /> <br />
                Once credits get exhausted,you won’t be able to buy any new
                commodities. In that situation, you may have to wait till next
                month.
                <br /> <br />
                You can also gain credits by recycling products.
                <br /> <br />
                Every user can transfer credits to every other user.
                <br /> <br />
                Get special badges for everytime you save carbon emission each
                month.
                <br /> <br />
            </div>
            <Button
                onClick={() => {
                    toggleInfoModal();
                }}
                className={c.close}
                color="primary"
                variant="filled"
            >
                Close
            </Button>
        </div>
    );
};

export default InfoModal;
