import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "pages/main";
import Qr from "pages/qrPage";
import TransactionInit from "pages/TransactionInit";
import Success from "pages/Success";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import LoginMediator from "pages/LoginMediator";
import BlockTester from "./pages/BlockTester";
import Onboarding from "./pages/Onboarding";

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
                <Route exact component={BlockTester} path="/test" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
