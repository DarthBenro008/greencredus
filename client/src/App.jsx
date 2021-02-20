import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "pages/main";
import Qr from "pages/qrPage";
import TransactionInit from "pages/TransactionInit";
import Success from "pages/Success";
import OB1 from "pages/ob1";
import OB2 from "pages/ob2";
import OB3 from "pages/ob3";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import LoginMediator from "pages/LoginMediator";
import BlockTester from "./pages/BlockTester";
import Onboarding from "./pages/Onboarding";
import BlockTester from "./pages/BlockTester";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Sk-Modernist",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact component={LoginMediator} path="/login" />
                <Route exact component={Main} path="/" />
                <Route exact component={Qr} path="/qr" />
                <Route exact component={TransactionInit} path="/Transact" />
                <Route exact component={Success} path="/success" />
                <Route exact component={Onboarding} path="/ob" />
                <Route exact component={OB1} path="/ob1" />
                <Route exact component={OB2} path="/ob2" />
                <Route exact component={OB3} path="/ob3" />

                <Route exact component={BlockTester} path="/test" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
