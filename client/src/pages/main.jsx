/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import BottomNav from "components/BottomNav";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";

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
                <div>nav 1</div>
            ) : navValue === 2 ? (
                <div>nav 2</div>
            ) : navValue === 3 ? (
                <ProfilePage />
            ) : null}
            <BottomNav setNavValue={setNavValue} />
        </React.Fragment>
    );
};

export default Main;
