/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import BottomNav from "components/BottomNav";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import TransactionPage from "./TransactionPage";
import { Typography } from "@material-ui/core";

const Main = () => {
    const [navValue, setNavValue] = useState(0);

    useEffect(() => {
        console.log("main", navValue);
    }, [navValue]);

    return (
        <React.Fragment>
            {navValue === 0 ? (
                <HomePage />
            ) : navValue === 1 ? (
                <Typography style={{ padding: "2rem" }} variant="h6">
                    Coming Soon...
                </Typography>
            ) : navValue === 2 ? (
                <TransactionPage />
            ) : navValue === 3 ? (
                <ProfilePage />
            ) : null}
            <BottomNav navValue={navValue} setNavValue={setNavValue} />
        </React.Fragment>
    );
};

export default Main;
